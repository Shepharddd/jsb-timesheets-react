import { doc, getDoc, setDoc, Timestamp, collection, getDocs } from 'firebase/firestore'
import { db, auth } from '../utils/firebase/config'
import { TimesheetModel } from '../models/TimesheetModel'
import type { TimesheetData, EmployeeRow, PlantRow, TimeSheets } from '../types'
import { firestoreDataToTimesheetMap, getDefaultTimesheets, timeSheetToWeekMap } from '../utils/utils'

/**
 * Get the Firestore path for a user's week timesheet
 * Format: users/{userId}/timesheets/{mondayDate}
 */
function getWeekTimesheetPath(mondayDate: string, userId?: string): string {
  const uid = userId || auth.currentUser?.uid
  if (!uid) {
    throw new Error('User must be authenticated to access timesheets')
  }
  console.log(mondayDate)
  return `users/${uid}/timesheets/${mondayDate}`
}
/**
 * Interface for timesheet data organized by date
 */
export interface DateTimesheetData {
  date: Date
  employees?: EmployeeRow[]
  plant?: PlantRow[]
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
export async function saveTimesheetData(timesheets: TimeSheets | null, userId?: string): Promise<void> {
  try {

    if (!timesheets || !userId) throw new Error("Bad State");

    const weeksMap = timeSheetToWeekMap(timesheets)

    console.log('weeksMap:', weeksMap)
    
    const savePromises: Promise<void>[] = []
    for (const [mondayKey, weekData] of weeksMap.entries()) {
      const docRef = doc(db, getWeekTimesheetPath(mondayKey, userId))
      savePromises.push(setDoc(docRef, weekData, { merge: false }))
    }
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
 * Get all timesheets for a given week (Monday to Sunday)
 * Returns a list of 7 timesheets, one for each day
 * Gets from database if present, otherwise returns default timesheets
 * Reads from users/{userId}/timesheets/{mondayDate}
 */
export async function getWeekTimesheets(weekKey: string, userId?: string): Promise<TimesheetModel[]> {
  const timesheets = getDefaultTimesheets(weekKey);
  try {

    // Get the week document from Firestore
    const docRef = doc(db, getWeekTimesheetPath(weekKey, userId))
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      const weekData = docSnap.data() as Record<string, TimesheetData | string | Timestamp>
      const timesheetMap = firestoreDataToTimesheetMap(weekData)
      for (let i = 0; i < timesheets.length; i++) {
        const dateKey = timesheets[i].date.toISOString().slice(0, 10)
        const updated = timesheetMap.get(dateKey)
        if (updated) timesheets[i] = updated
      }
    }
  } catch (error) {
    // If there's an error fetching from Firestore, log it but continue to generate defaults
    console.error('Error getting week timesheets from Firestore:', error)
  }
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
