import { useEffect, useState } from "react"
import { TimesheetModel } from "../models/TimesheetModel"
import { Timestamp } from "firebase/firestore"
import { TimesheetData, TimeSheets, TimesheetStatus } from "../types"

/**
 * gets the monday of week 1 and week 2 of fortnight
 * starting from payCycleStart
 * @returns [week1Key, week2Key]
 */
export function getWeekKeys(): [string, string] {
  // Use UTC to avoid timezone shifts - 'YYYY-MM-DD' format is interpreted as UTC midnight
  const payCycleStart = new Date('2025-04-12T00:00:00Z') // UTC midnight
  const today = new Date()
  // Normalize today to UTC midnight for consistent calculations
  const todayUTC = new Date(Date.UTC(
    today.getUTCFullYear(),
    today.getUTCMonth(),
    today.getUTCDate(),
    0, 0, 0, 0
  ))

  const MS_PER_DAY = 1000 * 60 * 60 * 24
  const MS_PER_WEEK = MS_PER_DAY * 7

  // Weeks elapsed since pay cycle start (both in UTC)
  const weeksSinceStart = Math.floor(
    (todayUTC.getTime() - payCycleStart.getTime()) / MS_PER_WEEK
  )

  // Fortnight index (0-based)
  const fortnightIndex = Math.floor(weeksSinceStart / 2)

  // Start of this fortnight
  const fortnightStart = new Date(
    payCycleStart.getTime() + fortnightIndex * 2 * MS_PER_WEEK
  )

  // Get Monday of week 1 (using UTC methods)
  const week1Monday = getMonday(fortnightStart)

  // Week 2 Monday is +7 days
  const week2Monday = new Date(week1Monday.getTime() + MS_PER_WEEK)

  return [toKey(week1Monday), toKey(week2Monday)]
}

/**
 * Get Monday of the week for a date
 * Uses UTC to avoid timezone shifts (matches getMondayDateKey in timesheetService.ts)
 */
function getMonday(date: Date): Date {
  const d = new Date(date)
  const day = d.getUTCDay() // 0 (Sunday) to 6 (Saturday)
  // Calculate days to subtract to get to Monday
  // If Sunday (0), subtract 6 days. Otherwise subtract (day - 1) days
  const diff = day === 0 ? 6 : day - 1
  d.setUTCDate(d.getUTCDate() - diff)
  d.setUTCHours(0, 0, 0, 0)
  return d
}

export function timeSheetToWeekMap(timesheets: TimeSheets): Map<string, Record<string, TimesheetData | string | Timestamp>> {
  const week1Key = toKey(timesheets.week1Timesheets[0].date)
  const week2Key = toKey(timesheets.week2Timesheets[0].date)
  return new Map<string, Record<string, TimesheetData | string | Timestamp>>([
    [week1Key, getWeekData(week1Key, timesheets.week1Timesheets)],
    [week2Key, getWeekData(week2Key, timesheets.week2Timesheets)],
  ])
}

export function markAsSaved(timesheets: TimesheetModel[]): TimesheetModel[] {
  return timesheets.map(ts => {
    ts.status = TimesheetStatus.SAVED
    return ts
  })
}

function getWeekData(weekKey: string, timesheets: TimesheetModel[]): Record<string, TimesheetData | string | Timestamp> {
    const weekData: Record<string, TimesheetData | string | Timestamp> = {
      ...Object.fromEntries(
        timesheets.map(ts => [
          toKey(ts.date),
          ts.toJSONWithSave(),
        ])
      ),
      mondayDate: weekKey,
      updatedAt: Timestamp.now()
    }
  return weekData;
}

/**
 * tranforms firestore data to TimesheetModel[]
 */
export function firestoreDataToTimesheets(data: Record<string, TimesheetData | string | Timestamp>): TimesheetModel[] {
  const timesheets: TimesheetModel[] = []
  for (const [dateKey, json] of Object.entries(data)) {
    timesheets.push(TimesheetModel.fromJSON(new Date(dateKey), json as TimesheetData))
  }
  return timesheets;
}

export function firestoreDataToTimesheetMap(data: Record<string, TimesheetData | string | Timestamp>): Map<string, TimesheetModel> {
  const timesheetMap = new Map<string, TimesheetModel>()
  for (const [dateKey, json] of Object.entries(data)) {
    if (dateKey === 'mondayDate' || dateKey === 'updatedAt' || dateKey === 'adminUnlocked') continue
    timesheetMap.set(dateKey, TimesheetModel.fromJSON(new Date(dateKey), json as TimesheetData))
  }
  return timesheetMap;
}
/**
 * Get a default timesheet map for a given week (Monday to Sunday)
 * @param weekKey string key of the monday date of the week
 */
export function getDefaultTimesheets(weekKey: string): TimesheetModel[] {
  const startDate = new Date(weekKey)
  startDate.setUTCHours(0, 0, 0, 0)

  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startDate)
    date.setUTCDate(date.getUTCDate() + i)
    return TimesheetModel.createDefault(date)
  })
}

/**
 * Convert date → YYYY-MM-DD
 */
function toKey(date: Date): string {
  return date.toISOString().slice(0, 10)
}

// Format date for timesheet view
export function formatDate(input: Date | string): string {
  const date = typeof input === 'string' ? new Date(input) : input;
  return date.toLocaleDateString('en-US', { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric'
  })
}

export const getFortnightRangeText = (firstDay: Date, lastDay: Date) => `${firstDay.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${lastDay.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`

/**
 * Hook to detect if we're on mobile
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return isMobile
}


export const getIsWeek1 = (idx: number) => {
  if (idx < 0 || idx >= 14) return;
  return idx < 7;
}