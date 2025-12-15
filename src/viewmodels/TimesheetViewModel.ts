import { useState, useEffect } from 'react'
import { TimesheetModel } from '../models/TimesheetModel'
import type { Employee, Subcontractor, Plant, TimesheetData } from '../types'

type Listener = () => void

/**
 * Timesheet ViewModel - Manages state and operations for timesheet views
 */
export class TimesheetViewModel {
  public timesheets: Map<string, TimesheetModel>
  public timesheetsList: TimesheetModel[]
  public currentIndex: number
  private listeners: Set<Listener>

  constructor() {
    this.timesheets = new Map() // date string -> TimesheetModel
    this.timesheetsList = [] // Array of 14 timesheets for the fortnight
    this.currentIndex = 0
    this.listeners = new Set()
  }

  /**
   * Subscribe to changes
   */
  subscribe(listener: Listener): () => void {
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  }

  /**
   * Notify all listeners of changes
   */
  notify(): void {
    this.listeners.forEach(listener => listener())
  }

  /**
   * Get current date
   */
  getCurrentDate(): Date {
    if (this.currentIndex >= 0 && this.currentIndex < this.timesheetsList.length) {
      return this.timesheetsList[this.currentIndex].date
    }
    return new Date()
  }

  /**
   * Get current date key
   */
  getCurrentDateKey(): string {
    return this.getCurrentDate().toISOString().split('T')[0]
  }

  /**
   * Get timesheet for current index
   */
  getCurrentTimesheet(): TimesheetModel {
    if (this.currentIndex >= 0 && this.currentIndex < this.timesheetsList.length) {
      return this.timesheetsList[this.currentIndex]
    }
    // Fallback to creating default if list is empty
    return TimesheetModel.createDefault(new Date())
  }

  /**
   * Get timesheet for a specific date
   */
  getTimesheet(date: Date): TimesheetModel {
    const dateKey = date.toISOString().split('T')[0]
    if (!this.timesheets.has(dateKey)) {
      this.timesheets.set(dateKey, TimesheetModel.createDefault(date))
    }
    return this.timesheets.get(dateKey)!
  }

  /**
   * Set current index
   */
  setCurrentIndex(index: number): void {
    if (index >= 0 && index < this.timesheetsList.length) {
      this.currentIndex = index
      this.notify()
    }
  }

  /**
   * Set current date (converts to index)
   */
  setCurrentDate(date: Date, userId?: string): void {
    const dateKey = date.toISOString().split('T')[0]
    const index = this.timesheetsList.findIndex(ts => ts.date.toISOString().split('T')[0] === dateKey)
    if (index !== -1) {
      this.currentIndex = index
      this.notify()
    }
  }

  /**
   * Check if can navigate previous
   */
  canNavigatePrev(): boolean {
    return this.currentIndex > 0
  }

  /**
   * Check if can navigate next
   */
  canNavigateNext(): boolean {
    return this.currentIndex < this.timesheetsList.length - 1
  }

  /**
   * Navigate to previous timesheet
   */
  navigatePrev(): void {
    if (this.canNavigatePrev()) {
      this.currentIndex--
      this.notify()
    }
  }

  /**
   * Navigate to next timesheet
   */
  navigateNext(): void {
    if (this.canNavigateNext()) {
      this.currentIndex++
      this.notify()
    }
  }

  /**
   * Update current timesheet
   */
  updateTimesheet(updates: Partial<TimesheetData>): void {
    const timesheet = this.getCurrentTimesheet()
    timesheet.update(updates)
    // Update in list using current index
    if (this.currentIndex >= 0 && this.currentIndex < this.timesheetsList.length) {
      this.timesheetsList[this.currentIndex] = timesheet
      // Update in map
      const dateKey = timesheet.date.toISOString().split('T')[0]
      this.timesheets.set(dateKey, timesheet)
    }
    this.notify()
  }

  /**
   * Update user time
   */
  updateUserTime(type: 'startTime' | 'endTime', time: string): void {
    this.updateTimesheet({ [type]: time })
  }

  /**
   * Add employee
   */
  addEmployee(employee: Employee): void {
    const timesheet = this.getCurrentTimesheet()
    timesheet.addEmployee(employee)
    this.notify()
  }

  /**
   * Update employee
   */
  updateEmployee(index: number, updates: Partial<Employee>): void {
    const timesheet = this.getCurrentTimesheet()
    timesheet.updateEmployee(index, updates)
    this.notify()
  }

  /**
   * Remove employee
   */
  removeEmployee(index: number): void {
    const timesheet = this.getCurrentTimesheet()
    timesheet.removeEmployee(index)
    this.notify()
  }

  /**
   * Update employee time
   */
  updateEmployeeTime(index: number, type: 'startTime' | 'endTime', time: string): void {
    this.updateEmployee(index, { [type]: time })
  }

  /**
   * Add subcontractor
   */
  addSubcontractor(subcontractor: Subcontractor): void {
    const timesheet = this.getCurrentTimesheet()
    timesheet.addSubcontractor(subcontractor)
    this.notify()
  }

  /**
   * Update subcontractor
   */
  updateSubcontractor(index: number, updates: Partial<Subcontractor>): void {
    const timesheet = this.getCurrentTimesheet()
    timesheet.updateSubcontractor(index, updates)
    this.notify()
  }

  /**
   * Remove subcontractor
   */
  removeSubcontractor(index: number): void {
    const timesheet = this.getCurrentTimesheet()
    timesheet.removeSubcontractor(index)
    this.notify()
  }

  /**
   * Update subcontractor time
   */
  updateSubcontractorTime(index: number, type: 'startTime' | 'endTime', time: string): void {
    this.updateSubcontractor(index, { [type]: time })
  }

  /**
   * Add plant/equipment
   */
  addPlant(plant: Plant): void {
    const timesheet = this.getCurrentTimesheet()
    timesheet.addPlant(plant)
    this.notify()
  }

  /**
   * Update plant/equipment
   */
  updatePlant(index: number, updates: Partial<Plant>): void {
    const timesheet = this.getCurrentTimesheet()
    timesheet.updatePlant(index, updates)
    this.notify()
  }

  /**
   * Remove plant/equipment
   */
  removePlant(index: number): void {
    const timesheet = this.getCurrentTimesheet()
    timesheet.removePlant(index)
    this.notify()
  }

  /**
   * Set the fortnight timesheets list
   */
  setTimesheetsList(timesheets: TimesheetModel[]): void {
    this.timesheetsList = timesheets
    // Sync the map from the list
    this.timesheets.clear()
    timesheets.forEach((timesheet) => {
      const dateKey = timesheet.date.toISOString().split('T')[0]
      this.timesheets.set(dateKey, timesheet)
    })
    this.notify()
  }

  /**
   * Get the fortnight timesheets list
   */
  getTimesheetsList(): TimesheetModel[] {
    return this.timesheetsList
  }

  /**
   * Get all timesheets for submission
   */
  getAllTimesheets(): Record<string, TimesheetData> {
    const result: Record<string, TimesheetData> = {}
    this.timesheets.forEach((timesheet, dateKey) => {
      result[dateKey] = timesheet.toJSON()
    })
    return result
  }

  /**
   * Get week dates (Monday to Sunday) - for backwards compatibility
   */
  getWeekDates(): Date[] {
    const today = this.getCurrentDate()
    const day = today.getDay()
    const diff = today.getDate() - day + (day === 0 ? -6 : 1) // Adjust to Monday
    const monday = new Date(today.setDate(diff))
    
    const weekDates: Date[] = []
    for (let i = 0; i < 7; i++) {
      const date = new Date(monday)
      date.setDate(monday.getDate() + i)
      weekDates.push(date)
    }
    return weekDates
  }

  /**
   * Get week start date (Monday) - for backwards compatibility
   */
  getWeekStartDate(): Date {
    const today = this.getCurrentDate()
    const day = today.getDay()
    const diff = today.getDate() - day + (day === 0 ? -6 : 1) // Adjust to Monday
    const monday = new Date(today.setDate(diff))
    return monday
  }

}

/**
 * React hook to use TimesheetViewModel
 */
export function useTimesheetViewModel(): TimesheetViewModel {
  const [viewModel] = useState(() => new TimesheetViewModel())
  const [, setUpdateTrigger] = useState(0)

  useEffect(() => {
    const unsubscribe = viewModel.subscribe(() => {
      setUpdateTrigger(prev => prev + 1)
    })
    return unsubscribe
  }, [viewModel])

  // Note: Timesheet loading is now handled by TanStack Query in App.tsx

  return viewModel
}

