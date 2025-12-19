import { TimesheetModel } from '../models/TimesheetModel'

interface UserInfoProps {
  timesheet: TimesheetModel
  onUpdate: (updates: Partial<{ site: string; weather: string; tasksCompleted: string; startTime: string; endTime: string; breakLength: string }>) => void
  onTimeClick: (type: 'startTime' | 'endTime' | 'breakLength') => void
  sites: string[]
  disabled?: boolean
}

const UserInfo = ({ timesheet, onUpdate, onTimeClick, disabled = false, sites }: UserInfoProps) => {
  return (
    <>
      <div className="user-info-row">
        <div className="input-container">
          <div className="input-row">
            <label>Site:</label>
            <select
              value={timesheet.site || ''}
              onChange={(e) => {
                const newSite = e.target.value
                const updates: Partial<{ site: string; startTime: string; endTime: string; breakLength: string }> = {
                  site: newSite
                }
                
                // Only set default times if site is being selected and times aren't already set
                if (newSite && !timesheet.startTime && !timesheet.endTime) {
                  updates.startTime = '07:00'
                  updates.endTime = '15:30'
                  updates.breakLength = '00:30'
                }
                
                onUpdate(updates)
              }}
              disabled={disabled}
              style={{
                width: '100%',
                maxWidth: '250px',
                padding: '0',
                marginTop: '0',
                border: 'none',
                background: 'transparent',
                textAlign: 'right',
                fontSize: 'inherit',
                fontFamily: 'inherit',
                color: timesheet.site ? 'inherit' : '#999',
                cursor: disabled ? 'not-allowed' : 'pointer'
              }}
            >
              <option value="">Select a site</option>
              {sites.map((site) => (
                <option key={site} value={site}>
                  {site}
                </option>
              ))}
            </select>
          </div>

          <div className="input-row">
            <label>Weather:</label>
            <input
              type="text"
              placeholder="Sunny · 29°C"
              value={timesheet.weather}
              onChange={(e) => onUpdate({ weather: e.target.value })}
              disabled={disabled}
            />
          </div>
        </div>

        <div className="user-time-container">
          <div className="user-time-row">
            <div className="user-time-row-item">
              <label>Start:</label>
              <div
                className="time-cell user-time-input"
                onClick={() => !disabled && onTimeClick('startTime')}
                style={{ cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1 }}
              >
                <span className="time-display">{timesheet.startTime || '--:--'}</span>
              </div>
            </div>
            <div className="user-time-row-item">
              <label>End:</label>
              <div
                className="time-cell user-time-input"
                onClick={() => !disabled && onTimeClick('endTime')}
                style={{ cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1 }}
              >
                <span className="time-display">{timesheet.endTime || '--:--'}</span>
              </div>
            </div>
            <div className="user-time-row-item">
              <label>Break:</label>
              <div
                className="time-cell user-time-input"
                onClick={() => !disabled && onTimeClick('breakLength')}
                style={{ cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1 }}
              >
                <span className="time-display">
                {timesheet.breakLength 
                  ? (() => {
                      const timeStr = timesheet.breakLength
                      const [hours, minutes] = timeStr.split(':').map(Number)
                      const totalMinutes = (hours || 0) * 60 + (minutes || 0)
                      return `${totalMinutes} min`
                    })()
                  : '-- min'
                }
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="notes-container">
        <div className="notes-item">
          <label htmlFor="tasksCompletedInput">Tasks Completed</label>
          <textarea
            id="tasksCompletedInput"
            rows={5}
            placeholder="Describe the tasks completed today..."
            value={timesheet.tasksCompleted}
            onChange={(e) => onUpdate({ tasksCompleted: e.target.value })}
            disabled={disabled}
          />
        </div>
      </div>
    </>
  )
}

export default UserInfo

