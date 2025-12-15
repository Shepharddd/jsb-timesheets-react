import { useState, useEffect } from 'react'
import type { User } from 'firebase/auth'
import { getFortnightTimesheets, saveTimesheetData } from '../../services/timesheetService'
import { signOutUser } from '../../services/authService'
import { useTimesheetViewModel } from '../../viewmodels/TimesheetViewModel'
import { TimesheetModel } from '../../models/TimesheetModel'
import TimesheetView from '../Timesheet/TimesheetView'
import './HomeView.css'
import React from 'react'
import { TimesheetData, TimesheetStatus as Status } from '../../types'

/**
 * Hook to detect if we're on mobile
 */
function useIsMobile() {
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

interface HomeProps {
  user: User
}

/**
 * Get the current fortnight start date (1st or 15th of current month)
 */
function getCurrentFortnightStart(): Date {
  const today = new Date()
  const day = today.getDate()
  const start = new Date(today.getFullYear(), today.getMonth(), day <= 14 ? 1 : 15)
  start.setHours(0, 0, 0, 0)
  return start
}

/**
 * Format date for display
 */
function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric' 
  })
}

const Home = ({ user }: HomeProps) => {
  const timesheetViewModel = useTimesheetViewModel()
  const [view, setView] = useState<'home' | 'timesheet'>('home')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const isMobile = useIsMobile()
  
  const fortnightStart = getCurrentFortnightStart()
  const fortnightEnd = new Date(fortnightStart)
  fortnightEnd.setDate(fortnightStart.getDate() + 13)
  
  const [isLoadingTimesheets, setIsLoadingTimesheets] = useState(false)

  // Fetch fortnight timesheets
  useEffect(() => {
    const fetchFortnightTimesheets = async () => {
      if (!user?.uid) {
        timesheetViewModel.setTimesheetsList([])
        setIsLoadingTimesheets(false)
        return
      }
      
      setIsLoadingTimesheets(true)
      try {
        const timesheets = await getFortnightTimesheets(user.uid)
        timesheetViewModel.setTimesheetsList(timesheets)
      } catch (error) {
        console.error('Error fetching fortnight timesheets:', error)
      } finally {
        setIsLoadingTimesheets(false)
      }
    }
    
    fetchFortnightTimesheets()
  }, [user?.uid, timesheetViewModel])
  
  
  // Helper function to remove empty rows from a timesheet
  const removeEmptyRows = (timesheet: TimesheetModel) => {
    // Remove employees with empty names
    if (timesheet.employees) {
      timesheet.employees = timesheet.employees.filter(emp => emp.name && emp.name.trim() !== '')
    }
    // Remove subcontractors with empty names
    if (timesheet.subcontractors) {
      timesheet.subcontractors = timesheet.subcontractors.filter(sub => sub.name && sub.name.trim() !== '')
    }
    // Remove plant with empty names
    if (timesheet.plant) {
      timesheet.plant = timesheet.plant.filter(p => p.name && p.name.trim() !== '')
    }
  }
  
  // Navigate to timesheet entry
  const handleNavigateToTimesheet = (index?: number) => {
    if (index !== undefined && index >= 0 && index < timesheetViewModel.timesheetsList.length) {
      // Remove empty rows from current timesheet before navigating
      const currentTimesheet = timesheetViewModel.getCurrentTimesheet()
      removeEmptyRows(currentTimesheet)
      // Update in list and map
      const dateKey = currentTimesheet.date.toISOString().split('T')[0]
      timesheetViewModel.timesheetsList[timesheetViewModel.currentIndex] = currentTimesheet
      timesheetViewModel.timesheets.set(dateKey, currentTimesheet)
      timesheetViewModel.notify()
      
      timesheetViewModel.setCurrentIndex(index)
      // setSelectedDate(timesheetsList[index].date)
    }
    setView('timesheet')
    // Scroll to top when navigating to timesheet view
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
  
  // Navigate back to home
  const handleBackToHome = () => {
    // Remove empty rows from current timesheet before going back
    const currentTimesheet = timesheetViewModel.getCurrentTimesheet()
    removeEmptyRows(currentTimesheet)
    // Update in list and map
    const dateKey = currentTimesheet.date.toISOString().split('T')[0]
    timesheetViewModel.timesheetsList[timesheetViewModel.currentIndex] = currentTimesheet
    timesheetViewModel.timesheets.set(dateKey, currentTimesheet)
    timesheetViewModel.notify()
    
    // setSelectedDate(undefined)
    setView('home')
  }
  
  // Format date for timesheet view
  const formatTimesheetDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric'
    })
  }
  
  // Show timesheet entry view
  if (view === 'timesheet') {
    const currentTimesheet = timesheetViewModel.getCurrentTimesheet()
    const currentDate = timesheetViewModel.getCurrentDate()
    
    const handleUpdateTimesheet = (updates: Partial<any>) => {
      // Use the update method which automatically sets status to EDITED
      currentTimesheet.update(updates)
      // Update in list
      const index = timesheetViewModel.currentIndex
      timesheetViewModel.timesheetsList[index] = currentTimesheet
      // Update in map
      const dateKey = currentTimesheet.date.toISOString().split('T')[0]
      timesheetViewModel.timesheets.set(dateKey, currentTimesheet)
      timesheetViewModel.notify()
    }
    
    const handleNavigatePrev = () => {
      if (timesheetViewModel.canNavigatePrev()) {
        // Remove empty rows from current timesheet before navigating
        removeEmptyRows(currentTimesheet)
        // Update in list and map
        const dateKey = currentTimesheet.date.toISOString().split('T')[0]
        timesheetViewModel.timesheetsList[timesheetViewModel.currentIndex] = currentTimesheet
        timesheetViewModel.timesheets.set(dateKey, currentTimesheet)
        timesheetViewModel.notify()
        
        timesheetViewModel.navigatePrev()
        // const newDate = timesheetViewModel.getCurrentDate()
        // setSelectedDate(newDate)
      }
    }
    
    const handleNavigateNext = () => {
      if (timesheetViewModel.canNavigateNext()) {
        // Remove empty rows from current timesheet before navigating
        removeEmptyRows(currentTimesheet)
        // Update in list and map
        const dateKey = currentTimesheet.date.toISOString().split('T')[0]
        timesheetViewModel.timesheetsList[timesheetViewModel.currentIndex] = currentTimesheet
        timesheetViewModel.timesheets.set(dateKey, currentTimesheet)
        timesheetViewModel.notify()
        
        timesheetViewModel.navigateNext()
        // const newDate = timesheetViewModel.getCurrentDate()
        // setSelectedDate(newDate)
      }
    }
    
    return (
      <TimesheetView 
        timesheet={currentTimesheet}
        currentDate={currentDate}
        onUpdate={handleUpdateTimesheet}
        onNavigatePrev={handleNavigatePrev}
        onNavigateNext={handleNavigateNext}
        onBackToHome={handleBackToHome}
        formatDate={formatTimesheetDate}
      />
    )
  } 
 
  // Generate all days in the fortnight, separated by week
  const week1Days = timesheetViewModel.timesheetsList.slice(0, 7)
  const week2Days = timesheetViewModel.timesheetsList.slice(7, 14)
  
  const fortnightRangeText = `${fortnightStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${fortnightEnd.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`

  const handleSubmit = async () => {
    if (!user) return
    
    // Set all timesheets to SUBMITTED status before saving
    const timesheetsList = timesheetViewModel.getTimesheetsList()
    timesheetsList.forEach(timesheet => {
      if (timesheet.status === Status.EDITED || timesheet.status === Status.NEW) {
        timesheet.update({ status: Status.SUBMITTED })
      }
    })
    
    // Sync updated statuses back to the viewModel
    timesheetViewModel.setTimesheetsList(timesheetsList)
    
    const allTimesheets = timesheetViewModel.getAllTimesheets()
    console.log('Submitting timesheet:', allTimesheets)
    
    setIsSubmitting(true)
    try {
      // Upload/save the timesheets to Firestore
      await saveTimesheetData(allTimesheets, user.uid)
      alert('Timesheet submitted successfully!')
      // Reload timesheets after submission to get the saved data
      const timesheets = await getFortnightTimesheets(user.uid)
      timesheetViewModel.setTimesheetsList(timesheets)
    } catch (error) {
      console.error('Error submitting timesheet:', error)
      alert('Error submitting timesheet. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="app-container">

    <div className="section timesheet-week-nav-section">
      <div className="date-navigation">
        <button 
          className="submit-btn timesheet-back-button" 
          onClick={async () => {
            try {
              await signOutUser()
              // Auth state change will automatically redirect to login via App.tsx
            } catch (error) {
              console.error('Error signing out:', error)
              alert('Error signing out. Please try again.')
            }
          }}>
            Log Out
        </button>
        <button 
          className="submit-btn timesheet-back-button"
          onClick={handleSubmit}>
            Submit
        </button>
        </div>
      </div>

      <div className="section home-header">
        <h2 className="home-title">{user.displayName}'s Timesheets</h2>
        <h3 className="home-period">{fortnightRangeText}</h3>

      {isLoadingTimesheets ? (
          <div>Loading timesheets...</div>
      ) : (
          <table className="home-timesheets-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Site</th>
                <th>Hours</th>
                <th>Employees</th>
                <th>Subcontractors</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Week 1 */}
              {week1Days.map((timesheet, index) => {
                const date = timesheet.date
                
                // Calculate hours
                let hours = '-'
                if (timesheet.startTime && timesheet.endTime) {
                  const start = timesheet.startTime.split(':').map(Number)
                  const end = timesheet.endTime.split(':').map(Number)
                  const startMinutes = start[0] * 60 + start[1]
                  const endMinutes = end[0] * 60 + end[1]
                  const diffMinutes = endMinutes - startMinutes
                  if (diffMinutes > 0) {
                    const totalHours = diffMinutes / 60
                    hours = totalHours.toFixed(1)
                  }
                }
                
                const statusLabels = {
                  new: 'New',
                  edited: 'Edited',
                  submitted: 'Submitted'
                }
                
                return (
                  <tr 
                    key={date.toISOString().split('T')[0]} 
                    onClick={() => handleNavigateToTimesheet(index)}
                    className={`home-table-row home-table-row-${timesheet.status}`}
                  >
                    <td className="home-table-date">{formatDate(date)}</td>
                    <td className="home-table-site">{timesheet?.site || '-'}</td>
                    <td className="home-table-hours">{hours}</td>
                    <td className="home-table-employees">
                      {timesheet?.employees 
                        ? (() => {
                            const validEmployees = timesheet.employees.filter(emp => emp.name && emp.name.trim() !== '')
                            return validEmployees.length > 0 ? validEmployees.length : '-'
                          })()
                        : '-'}
                    </td>
                    <td className="home-table-subcontractors">
                      {timesheet?.subcontractors 
                        ? (() => {
                            const validSubcontractors = timesheet.subcontractors.filter(sub => sub.name && sub.name.trim() !== '')
                            return validSubcontractors.length > 0 ? validSubcontractors.length : '-'
                          })()
                        : '-'}
                    </td>
                    <td className="home-table-status">
                      <span className={`home-day-status home-day-status-${timesheet.status}`}>
                        {statusLabels[timesheet.status] || timesheet.status}
                      </span>
                    </td>
                  </tr>
                )
              })}
              
              {/* Week separator */}
              <tr className="home-table-week-separator">
                <td colSpan={isMobile ? 4 : 6} className="home-table-separator-cell">
                  <div className="home-table-separator-line"></div>
                </td>
              </tr>
              
              {/* Week 2 */}
              {week2Days.map((timesheet, index) => {
                const date = timesheet.date
                // Use viewmodel data if available, otherwise use timesheet from list
                // Calculate hours
                let hours = '-'
                if (timesheet.startTime && timesheet.endTime) {
                  const start = timesheet.startTime.split(':').map(Number)
                  const end = timesheet.endTime.split(':').map(Number)
                  const startMinutes = start[0] * 60 + start[1]
                  const endMinutes = end[0] * 60 + end[1]
                  const diffMinutes = endMinutes - startMinutes
                  if (diffMinutes > 0) {
                    const totalHours = diffMinutes / 60
                    hours = totalHours.toFixed(1)
                  }
                }
                
                const statusLabels = {
                  new: 'New',
                  edited: 'Edited',
                  submitted: 'Submitted'
                }
                
                return (
                  <tr 
                    key={date.toISOString().split('T')[0]} 
                    onClick={() => handleNavigateToTimesheet(index + 7)}
                    className={`home-table-row home-table-row-${timesheet.status}`}
                  >
                    <td className="home-table-date">{formatDate(date)}</td>
                    <td className="home-table-site">{timesheet?.site || '-'}</td>
                    <td className="home-table-hours">{hours}</td>
                    <td className="home-table-employees">
                      {timesheet?.employees 
                        ? (() => {
                            const validEmployees = timesheet.employees.filter(emp => emp.name && emp.name.trim() !== '')
                            return validEmployees.length > 0 ? validEmployees.length : '-'
                          })()
                        : '-'}
                    </td>
                    <td className="home-table-subcontractors">
                      {timesheet?.subcontractors 
                        ? (() => {
                            const validSubcontractors = timesheet.subcontractors.filter(sub => sub.name && sub.name.trim() !== '')
                            return validSubcontractors.length > 0 ? validSubcontractors.length : '-'
                          })()
                        : '-'}
                    </td>
                    <td className="home-table-status">
                      <span className={`home-day-status home-day-status-${timesheet.status}`}>
                        {statusLabels[timesheet.status] || timesheet.status}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
      )}
      </div>
    </div>
  )
}

export default Home

