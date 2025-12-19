import { useState, useEffect } from 'react'
import { onAuthStateChange, signInWithMicrosoft, signOutUser } from '../services/authService'
import type { User } from 'firebase/auth'
import { getEmployeeNames, getPlantNames, getSites, getWeekTimesheets, saveTimesheetData } from '../services/timesheetService'
import { getWeekKeys } from '../utils/utils'
import { CompanyData, TimesheetData, TimeSheets } from '../types'
import { TimesheetModel } from '../models/TimesheetModel'

type Listener = () => void

export class AppViewModel {

  public loading: boolean = false;
  public fetchingData: boolean = false;
  public authLoading: boolean = true;
  
  public error: string | null = null;
  public toastMessage: { message: string; type: 'success' | 'error' | 'info' } | null = null;

  public user: User | null = null
  public timesheets: TimeSheets | null = null;
  public companyData: CompanyData;

  public selectedIndex: number | null = null;
  public selectedTimesheet: TimesheetModel | null = null;

  private listeners: Set<Listener>;

  constructor() {
    this.listeners = new Set()
    this.companyData = {
      sites: [],
      employees: [],
      plant: []
    }
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
   * Clear toast message after it's been displayed
   */
  clearToast(): void {
    this.toastMessage = null
    this.notify()
  }
  

  async fetchData(user: User) {
    try {

      const [ wk1Key, wk2Key ] = getWeekKeys()

      const week1Timesheets = await getWeekTimesheets(wk1Key, user.uid)
      const week2Timesheets = await getWeekTimesheets(wk2Key, user.uid)

      console.log('Week 1 Timesheets:', week1Timesheets)
      console.log('Week 2 Timesheets:', week2Timesheets)

      this.timesheets = {
        week1Timesheets: week1Timesheets,
        week2Timesheets: week2Timesheets
      }

      this.companyData = {
        sites: await getSites(),
        employees: await getEmployeeNames(),
        plant: await getPlantNames()
      }

    } catch (error) {
      this.error = "Error Fetching Data, please Try Again."
      this.toastMessage = { message: "Error fetching data. Please try again.", type: 'error' }
      this.notify()
    }
  }

  async onUserChange(user: User | null){
    if (user) await this.fetchData(user); 
    this.user = user;
    this.authLoading = false;
    this.notify();
  }

  handleNavigateToTimesheet = (isWeek1: boolean, index: number) => {
    this.selectedIndex = isWeek1 ? index : index + 7;
    this.navigate()
  }

  handleBackToHome = () => {
    this.selectedIndex = null;
    this.navigate();
    
  }

  navigate() {
    if (this.selectedIndex !== null) {
        this.selectedTimesheet = this.selectedIndex < 7 
          ? this.timesheets?.week1Timesheets.at(this.selectedIndex) ?? null
          : this.timesheets?.week2Timesheets.at(this.selectedIndex - 7) ?? null
    } else {
      this.selectedTimesheet = null
    }
    this.notify()
  }

   /**
   * Check if can navigate previous
   */
   canNavigatePrev = (): boolean => {
    return (
      typeof this.selectedIndex === 'number' &&
      this.timesheets !== undefined &&
      this.selectedIndex <  14
    )
  }

  /**
   * Check if can navigate next
   */
  canNavigateNext = (): boolean => {
    return (
      typeof this.selectedIndex === 'number' &&
      this.timesheets !== undefined &&
      this.selectedIndex <  14
    )
  }

  /**
   * Navigate to previous timesheet
   */
  navigatePrev = (): void => {
    if (!this.canNavigatePrev()) return
    this.selectedIndex! -= 1
    this.navigate();
  }

  /**
   * Navigate to next timesheet
   */
  navigateNext = (): void => {
    if (!this.canNavigateNext()) return
    this.selectedIndex! += 1
    this.navigate();
  }

  /**
   * Update current timesheet
   */
  updateTimesheet = (updates: Partial<TimesheetData>): void => {
    const timesheet = this.selectedTimesheet
    if (!timesheet) return;
    timesheet.update(updates)
    this.notify()
  }

  handleSubmit = async () => {
    if (!this.user) return
    console.log('Submitting timesheet:', this.timesheets)
    this.loading = true;
    this.notify();
    try {
      // Upload/save the timesheets to Firestore
      await saveTimesheetData(this.timesheets, this.user.uid)
      this.toastMessage = { message: 'Timesheet saved successfully!', type: 'success' }
      this.notify()
      // Reload timesheets after submission to get the saved data
      await this.fetchData(this.user);
    } catch (error) {
      console.error('Error submitting timesheet:', error)
      this.toastMessage = { message: 'Error saving timesheet. Please try again.', type: 'error' }
      this.notify()
    } finally {
      this.loading = false;
      this.notify();
    }
  }


  onSignOut = async () => {
    try {
      await signOutUser();
      this.toastMessage = { message: 'Signed out successfully', type: 'success' }
      this.notify()
    } catch (error) {
      this.error = error instanceof Error ? error.message : 'Failed to sign out'
      this.toastMessage = { message: error instanceof Error ? error.message : 'Failed to sign out', type: 'error' }
      this.notify();
    }
  }

  onSignIn = async () => {
    this.authLoading = true;
    this.notify();
    try {
      await signInWithMicrosoft()
      this.toastMessage = { message: 'Signed in successfully', type: 'success' }
      this.notify()
    } catch (err) {
      this.error = err instanceof Error ? err.message : 'Failed to sign in'
      this.toastMessage = { message: err instanceof Error ? err.message : 'Failed to sign in', type: 'error' }
      this.authLoading = false;
      this.notify();
    }
  }
}



/**
 * Hook to manage app-level authentication state only
 */
export function useAppViewModel(): AppViewModel {
  const [appModel] = useState(() => new AppViewModel())
  const [, setUpdateTrigger] = useState(0)
  
  // Handle authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChange((user) => {
      appModel.onUserChange(user);
    })

    return unsubscribe
  }, [appModel])

  useEffect(() => {
    const unsubscribe = appModel.subscribe(() => {
      setUpdateTrigger(prev => prev + 1)
    })
    return unsubscribe
  }, [appModel])

  return appModel;
}

