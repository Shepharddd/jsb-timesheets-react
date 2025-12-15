import React, { useState, useEffect } from 'react'
import { TimesheetModel } from '../models/TimesheetModel'
import { getSites } from '../services/timesheetService'

interface UserInfoProps {
  timesheet: TimesheetModel
  onUpdate: (updates: Partial<{ site: string; weather: string; tasksCompleted: string; startTime: string; endTime: string; breakLength: string }>) => void
  onTimeClick: (type: 'startTime' | 'endTime' | 'breakLength') => void
  disabled?: boolean
}

const UserInfo = ({ timesheet, onUpdate, onTimeClick, disabled = false }: UserInfoProps) => {
  const [sites, setSites] = useState<string[]>([])
  const [isLoadingSites, setIsLoadingSites] = useState(true)

  useEffect(() => {
    const fetchSites = async () => {
      try {
        setIsLoadingSites(true)
        const sitesList = await getSites()
        console.log('sitesList', sitesList)
        setSites(sitesList)
      } catch (error) {
        console.error('Error loading sites:', error)
      } finally {
        setIsLoadingSites(false)
      }
    }

    fetchSites()
  }, [])
  return (
    <>
      <div className="user-info-row">
        <div className="input-container">
          <div className="input-row">
            <label>Site:</label>
            {isLoadingSites ? (
              <span>Loading...</span>
            ) : (
              <select
                value={timesheet.site || ''}
                onChange={(e) => onUpdate({ site: e.target.value })}
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
            )}
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
                <span className="time-display">{timesheet.startTime}</span>
              </div>
            </div>
            <div className="user-time-row-item">
              <label>End:</label>
              <div
                className="time-cell user-time-input"
                onClick={() => !disabled && onTimeClick('endTime')}
                style={{ cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1 }}
              >
                <span className="time-display">{timesheet.endTime}</span>
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
                {(() => {
                  const timeStr = timesheet.breakLength || '00:30'
                  const [hours, minutes] = timeStr.split(':').map(Number)
                  const totalMinutes = (hours || 0) * 60 + (minutes || 0)
                  return `${totalMinutes} min`
                })()}
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

