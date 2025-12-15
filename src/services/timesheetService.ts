import { doc, getDoc, setDoc, Timestamp, collection, getDocs } from 'firebase/firestore'
import { db, auth } from '../firebase/config'
import { TimesheetModel } from '../models/TimesheetModel'
import type { TimesheetData, Employee, Plant } from '../types'

/**
 * Get the Firestore path for a user's week timesheet
 * Format: users/{userId}/timesheets/{mondayDate}
 */
function getWeekTimesheetPath(mondayDate: string, userId?: string): string {
  const uid = userId || auth.currentUser?.uid
  if (!uid) {
    throw new Error('User must be authenticated to access timesheets')
  }
  return `users/${uid}/timesheets/${mondayDate}`
}

/**
 * Get the Monday date for a given date (week starts on Monday)
 * Uses UTC to avoid timezone shifts
 */
function getMondayDateKey(date: Date): string {
  const d = new Date(date)
  const day = d.getUTCDay() // 0 (Sunday) to 6 (Saturday)
  // Calculate days to subtract to get to Monday
  // If Sunday (0), subtract 6 days. Otherwise subtract (day - 1) days
  const diff = day === 0 ? 6 : day - 1
  d.setUTCDate(d.getUTCDate() - diff)
  d.setUTCHours(0, 0, 0, 0)
  return d.toISOString().split('T')[0]
}

/**
 * Interface for timesheet data organized by date
 */
export interface DateTimesheetData {
  date: Date
  employees?: Employee[]
  plant?: Plant[]
  userData?: {
    name?: string
    site?: string
    weather?: string
    startTime?: string
    endTime?: string
    tasksCompleted?: string
  }
}

/**
 * Save timesheet data object (from ViewModel.getAllTimesheets())
 * Groups timesheets by week (Monday to Sunday) and saves each week separately
 * Saves to users/{userId}/timesheets/{mondayDate} for each week
 */
export async function saveTimesheetData(timesheetsData: Record<string, TimesheetData>, userId?: string): Promise<void> {
  try {
    // Get the fortnight start date for filtering
    const fortnightStart = getCurrentFortnightStart()
    const fortnightStartKey = fortnightStart.toISOString().split('T')[0]
    const fortnightEnd = new Date(fortnightStart)
    fortnightEnd.setDate(fortnightStart.getDate() + 13)
    const fortnightEndKey = fortnightEnd.toISOString().split('T')[0]
    
    // Group timesheets by week (Monday to Sunday)
    const weeksMap = new Map<string, Record<string, TimesheetData>>()
    
    for (const [dateKey, data] of Object.entries(timesheetsData)) {
      // Validate dateKey is a valid date string (YYYY-MM-DD format)
      if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) continue
      
      // Only include dates within the current fortnight
      if (dateKey < fortnightStartKey || dateKey > fortnightEndKey) continue
      
      // Parse dateKey as UTC to avoid timezone shifts
      // Split the date string and create a UTC date
      const [year, month, day] = dateKey.split('-').map(Number)
      const date = new Date(Date.UTC(year, month - 1, day, 0, 0, 0, 0))
      const mondayKey = getMondayDateKey(date)
      
      // Group by week
      if (!weeksMap.has(mondayKey)) {
        weeksMap.set(mondayKey, {})
      }
      weeksMap.get(mondayKey)![dateKey] = data
    }
    
    // Save each week as a separate document
    const savePromises: Promise<void>[] = []
    
    for (const [mondayKey, weekTimesheets] of weeksMap.entries()) {
      const docRef = doc(db, getWeekTimesheetPath(mondayKey, userId))
      
      // Prepare the document data for this week
      const weekData: Record<string, TimesheetData | string | Timestamp> = {
        ...weekTimesheets,
        mondayDate: mondayKey,
        updatedAt: Timestamp.now()
      }
      
      // Save the week document - use setDoc without merge to completely override/replace
      savePromises.push(setDoc(docRef, weekData, { merge: false }))
    }
    
    // Wait for all weeks to be saved
    await Promise.all(savePromises)
  } catch (error) {
    console.error('Error saving timesheet data:', error)
    throw error
  }
}


/**
 * Week metadata stored in Firestore
 */
export interface WeekMetadata {
  adminUnlocked?: boolean
  mondayDate?: string
  updatedAt?: Timestamp
}

/**
 * Result of getting week timesheets
 */
export interface WeekTimesheetsResult {
  timesheets: Map<string, TimesheetModel>
  metadata: WeekMetadata
}

/**
 * Get the current fortnight start date (8th or 22nd of current month)
 * If today is before the 8th, use the 22nd of the previous month
 */
function getCurrentFortnightStart(): Date {
  const today = new Date();
  const day = today.getDate();
  let year = today.getFullYear();
  let month = today.getMonth();
  
  // Determine which fortnight period we're in
  // Period 1: 8th to 21st
  // Period 2: 22nd to 7th of next month
  let startDay: number;
  
  if (day >= 8 && day <= 21) {
    // Current period: 8th to 21st, start on 8th
    startDay = 8;
  } else if (day >= 22) {
    // Current period: 22nd to end of month, start on 22nd
    startDay = 22;
  } else {
    // Day is 1-7, so we're in the period that started on 22nd of previous month
    // Go back to previous month
    month -= 1;
    if (month < 0) {
      month = 11;
      year -= 1;
    }
    startDay = 22;
  }
  
  const start = new Date(year, month, startDay);
  start.setHours(0, 0, 0, 0);
  return start;
}



/**
 * Get all timesheets for a given week (Monday to Sunday)
 * Returns a list of 7 timesheets, one for each day
 * Gets from database if present, otherwise returns default timesheets
 * Reads from users/{userId}/timesheets/{mondayDate}
 */
export async function getWeekTimesheets(mondayDate: Date, userId?: string): Promise<TimesheetModel[]> {
  // Normalize the Monday date using UTC to avoid timezone shifts
  const monday = new Date(mondayDate)
  monday.setUTCHours(0, 0, 0, 0)
  const mondayKey = monday.toISOString().split('T')[0]
  
  // Calculate Sunday (end of week) using UTC
  const sunday = new Date(monday)
  sunday.setUTCDate(monday.getUTCDate() + 6)
  sunday.setUTCHours(0, 0, 0, 0)
  const sundayKey = sunday.toISOString().split('T')[0]
  
  const timesheetMap = new Map<string, TimesheetModel>()
  
  try {
    // Get the week document from Firestore
    const docRef = doc(db, getWeekTimesheetPath(mondayKey, userId))
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      const weekData = docSnap.data() as Record<string, TimesheetData | string | Timestamp>
      
      // Extract all day timesheets (skip metadata fields)
      for (const [dateKey, data] of Object.entries(weekData)) {
        // Skip metadata fields
        if (dateKey === 'mondayDate' || dateKey === 'updatedAt' || dateKey === 'adminUnlocked') continue
        
        // Validate dateKey is a valid date string (YYYY-MM-DD format)
        if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) continue
        
        // Parse as UTC to avoid timezone shifts
        const [year, month, day] = dateKey.split('-').map(Number)
        const date = new Date(Date.UTC(year, month - 1, day, 0, 0, 0, 0))
        const dateKeyNormalized = date.toISOString().split('T')[0]
        
        // Only include dates within the week (Monday to Sunday)
        if (dateKeyNormalized >= mondayKey && dateKeyNormalized <= sundayKey) {
          timesheetMap.set(dateKeyNormalized, TimesheetModel.fromJSON(date, data as TimesheetData))
        }
      }
    }
  } catch (error) {
    // If there's an error fetching from Firestore, log it but continue to generate defaults
    console.error('Error getting week timesheets from Firestore:', error)
    // Continue execution to generate default timesheets
  }
  
  // Generate list of exactly 7 timesheets, one for each day of the week
  // Always generate the list, even if Firestore document doesn't exist or there's an error
  const timesheets: TimesheetModel[] = []
  
  for (let i = 0; i < 7; i++) {
    const date = new Date(monday)
    date.setUTCDate(monday.getUTCDate() + i)
    date.setUTCHours(0, 0, 0, 0) // Normalize to midnight UTC to avoid timezone issues
    const dateKey = date.toISOString().split('T')[0]
    
    // Get from map if exists, otherwise create default
    const timesheet = timesheetMap.get(dateKey) || TimesheetModel.createDefault(date)
    timesheets.push(timesheet)
  }
  
  return timesheets
}

/**
 * Get all timesheets for the current fortnight (14 days)
 * Returns a list of 14 timesheets, one for each day
 * Gets from database if present, otherwise returns default timesheets
 * Reads from users/{userId}/timesheets/{mondayDate} for each week in the fortnight
 */
export async function getFortnightTimesheets(userId?: string): Promise<TimesheetModel[]> {
  const fortnightStart = getCurrentFortnightStart()
  // Normalize to UTC to avoid timezone shifts
  const fortnightStartUTC = new Date(Date.UTC(
    fortnightStart.getFullYear(),
    fortnightStart.getMonth(),
    fortnightStart.getDate(),
    0, 0, 0, 0
  ))
  const fortnightStartKey = fortnightStartUTC.toISOString().split('T')[0]
  const fortnightEnd = new Date(fortnightStartUTC)
  fortnightEnd.setUTCDate(fortnightStartUTC.getUTCDate() + 13)
  fortnightEnd.setUTCHours(0, 0, 0, 0)
  const fortnightEndKey = fortnightEnd.toISOString().split('T')[0]
  
  console.log('Fortnight start:', fortnightStartKey)
  console.log('Fortnight end:', fortnightEndKey)
  
  const timesheetMap = new Map<string, TimesheetModel>()
  
  try {
    // Get all Monday dates that could contain the fortnight's timesheets
    // A fortnight (14 days) can span 2-3 weeks
    const weekStartDates = new Set<string>()
    
    // Calculate Monday for each day in the fortnight using UTC
    for (let i = 0; i < 14; i++) {
      const date = new Date(fortnightStartUTC)
      date.setUTCDate(fortnightStartUTC.getUTCDate() + i)
      date.setUTCHours(0, 0, 0, 0)
      const mondayKey = getMondayDateKey(date)
      weekStartDates.add(mondayKey)
    }
    
    // Fetch all week documents in parallel
    const weekPromises = Array.from(weekStartDates).map(async (mondayKey) => {
      const docRef = doc(db, getWeekTimesheetPath(mondayKey, userId))
      const docSnap = await getDoc(docRef)
      return { mondayKey, docSnap }
    })
    
    const weekResults = await Promise.all(weekPromises)
    
    // Extract timesheet data from all week documents
    for (const { docSnap } of weekResults) {
      if (docSnap.exists()) {
        const weekData = docSnap.data() as Record<string, TimesheetData | string | Timestamp>
        
        // Extract all day timesheets (skip metadata fields)
        for (const [dateKey, data] of Object.entries(weekData)) {
          // Skip metadata fields
          if (dateKey === 'mondayDate' || dateKey === 'updatedAt' || dateKey === 'adminUnlocked') continue
          
          // Validate dateKey is a valid date string (YYYY-MM-DD format)
          if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) continue
          
          // Parse as UTC to avoid timezone shifts
          const [year, month, day] = dateKey.split('-').map(Number)
          const date = new Date(Date.UTC(year, month - 1, day, 0, 0, 0, 0))
          const dateKeyNormalized = date.toISOString().split('T')[0]
          
          // Only include dates within the fortnight (using normalized date key)
          if (dateKeyNormalized >= fortnightStartKey && dateKeyNormalized <= fortnightEndKey) {
            timesheetMap.set(dateKeyNormalized, TimesheetModel.fromJSON(date, data as TimesheetData))
          }
        }
      }
    }
  } catch (error) {
    // If there's an error fetching from Firestore, log it but continue to generate defaults
    console.error('Error getting fortnight timesheets from Firestore:', error)
    // Continue execution to generate default timesheets
  }
  
  // Generate list of exactly 14 timesheets, one for each consecutive day
  // Always generate the list, even if Firestore document doesn't exist or there's an error
  const timesheets: TimesheetModel[] = []
  const seenDateKeys = new Set<string>()
  
  for (let i = 0; i < 14; i++) {
    const date = new Date(fortnightStartUTC)
    date.setUTCDate(fortnightStartUTC.getUTCDate() + i)
    date.setUTCHours(0, 0, 0, 0) // Normalize to midnight UTC to avoid timezone issues
    const dateKey = date.toISOString().split('T')[0]
    
    // Ensure we don't add duplicate dates (shouldn't happen, but safety check)
    if (seenDateKeys.has(dateKey)) {
      console.warn(`Duplicate date detected: ${dateKey}, skipping`)
      continue
    }
    seenDateKeys.add(dateKey)
    
    // Get from map if exists, otherwise create default
    const timesheet = timesheetMap.get(dateKey) || TimesheetModel.createDefault(date)
    timesheets.push(timesheet)
  }

  console.log('Timesheets generated:', timesheets.length)
  console.log('Date range:', timesheets[0]?.date.toISOString().split('T')[0], 'to', timesheets[timesheets.length - 1]?.date.toISOString().split('T')[0])
  
  return timesheets
}

/**
 * Get all sites from the sites collection
 */
export async function getSites(): Promise<string[]> {
  try {
    const sitesRef = collection(db, 'sites')
    const snapshot = await getDocs(sitesRef)
    const sites: string[] = []
    
    snapshot.forEach((doc) => {
      const data = doc.data()
      // Assuming sites have a 'name' field, or use the document ID
      const siteName = data.name || doc.id
      if (siteName) {
        sites.push(siteName)
      }
    })
    
    // Sort sites alphabetically
    return sites.sort()
  } catch (error) {
    console.error('Error getting sites:', error)
    throw error
  }
}

/**
 * Get all employee names from the employees collection
 */
export async function getEmployeeNames(): Promise<string[]> {
  try {
    const employeesRef = collection(db, 'employees')
    const snapshot = await getDocs(employeesRef)
    const employeeNames: string[] = []
    
    snapshot.forEach((doc) => {
      const data = doc.data()
      // Assuming employees have a 'name' field, or use the document ID
      const employeeName = data.name || doc.id
      if (employeeName) {
        employeeNames.push(employeeName)
      }
    })
    
    // Sort employee names alphabetically
    return employeeNames.sort()
  } catch (error) {
    console.error('Error getting employee names:', error)
    throw error
  }
}

/**
 * Get all plant names from the plant collection
 */
export async function getPlantNames(): Promise<string[]> {
  try {
    const plantRef = collection(db, 'plant')
    const snapshot = await getDocs(plantRef)
    const plantNames: string[] = []
    
    snapshot.forEach((doc) => {
      const data = doc.data()
      // Assuming plant have a 'name' field, or use the document ID
      const plantName = data.name || doc.id
      if (plantName) {
        plantNames.push(plantName)
      }
    })
    
    // Sort plant names alphabetically
    return plantNames.sort()
  } catch (error) {
    console.error('Error getting plant names:', error)
    throw error
  }
}
