import './HomeView.css'
import { TimeSheets } from '../../types'
import { formatDate, getFortnightRangeText } from '../../utils/utils'

interface HomeProps {
  timesheets: TimeSheets | null
  userName: string | null
  // isMobile: boolean
  onSignOut:  () => void
  onSubmit:  () => void
  onSelectTimesheet: (isWeek1: boolean, index: number) => void
}


export default function HomeView({ 
  userName, 
  timesheets, 
  // isMobile,
  onSignOut, 
  onSubmit, 
  onSelectTimesheet 
}: HomeProps) {

  if (!timesheets || !userName) {
    return (<div>Error</div>)
  }

  // Helper function to render table rows
  const renderTableRow = (timesheet: typeof timesheets.week1Timesheets[0], index: number, isWeek1: boolean) => {
    const date = timesheet.date
    
    // Calculate hours (including break time)
    let hours = '-'
    if (timesheet.startTime && timesheet.endTime) {
      const start = timesheet.startTime.split(':').map(Number)
      const end = timesheet.endTime.split(':').map(Number)
      const startMinutes = start[0] * 60 + start[1]
      const endMinutes = end[0] * 60 + end[1]
      let diffMinutes = endMinutes - startMinutes
      
      // Subtract break time if provided
      if (timesheet.breakLength) {
        const breakTime = timesheet.breakLength.split(':').map(Number)
        const breakMinutes = (breakTime[0] || 0) * 60 + (breakTime[1] || 0)
        diffMinutes -= breakMinutes
      }
      
      if (diffMinutes > 0) {
        const totalHours = diffMinutes / 60
        hours = totalHours.toFixed(1)
      }
    }
    
    const statusLabels = {
      new: 'New',
      edited: 'Edited',
      saved: 'Saved'
    }
    
    return (
      <tr 
        key={date.toISOString().split('T')[0]} 
        onClick={() => onSelectTimesheet(isWeek1, index)}
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
  }

  return (
    <>
      <div className="section timesheet-week-nav-section">
        <div className="date-navigation">
          <button 
            className="submit-btn timesheet-back-button" 
            onClick={onSignOut}>
              Log Out
          </button>
          <button 
            className="submit-btn timesheet-back-button"
            onClick={onSubmit}>
              Submit
          </button>
        </div>
      </div>

      <div className="section home-header">
        <h2 className="home-title">{userName}'s Timesheets</h2>
        <h3 className="home-period">{getFortnightRangeText(timesheets.week1Timesheets.at(0)!.date, timesheets.week1Timesheets.at(-1)!.date)}</h3>

        {/* Week 1 Table */}
        <div className="home-week-section">
          <h4 className="home-week-title">Week 1</h4>
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
              {timesheets.week1Timesheets.map((timesheet, index) => 
                renderTableRow(timesheet, index, true)
              )}
            </tbody>
          </table>
        </div>

        {/* Week 2 Table */}
        <div className="home-week-section">
          <h4 className="home-week-title">Week 2</h4>
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
              {timesheets.week2Timesheets.map((timesheet, index) => 
                renderTableRow(timesheet, index, false)
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )

  return (
    <>
      <div className="section timesheet-week-nav-section">
        <div className="date-navigation">
          <button 
            className="submit-btn timesheet-back-button" 
            onClick={onSignOut}>
              Log Out
          </button>
          <button 
            className="submit-btn timesheet-back-button"
            onClick={onSubmit}>
              Submit
          </button>
          </div>
        </div>

      <div className="section home-header">
        <h2 className="home-title">{userName}'s Timesheets</h2>
        <h3 className="home-period">{getFortnightRangeText(timesheets!.week1Timesheets.at(0)!.date, timesheets!.week1Timesheets.at(-1)!.date)}</h3>

        {/* Week 1 Table */}
        <div className="home-week-section">
          <h4 className="home-week-title">Week 1</h4>
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
              {timesheets!.week1Timesheets.map((timesheet, index) => 
                renderTableRow(timesheet, index, true)
              )}
            </tbody>
          </table>
        </div>

        {/* Week 2 Table */}
        <div className="home-week-section">
          <h4 className="home-week-title">Week 2</h4>
          <table className="home-timesheets-table">
            <tbody>
              {timesheets!.week2Timesheets.map((timesheet, index) => 
                renderTableRow(timesheet, index, false)
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

