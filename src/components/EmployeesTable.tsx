import React, { useState, useEffect } from 'react'
import type { Employee } from '../types'
import { getEmployeeNames } from '../services/timesheetService'

interface EmployeesTableProps {
  employees: Employee[]
  onAdd: () => void
  onEdit: (index: number) => void
  onEditName: (index: number, name: string) => void
  onDelete: (index: number) => void
  onTimeClick: (index: number, type: 'startTime' | 'endTime') => void
  disabled?: boolean
}

const EmployeesTable = ({ employees, onAdd, onEdit, onEditName, onDelete, onTimeClick, disabled = false }: EmployeesTableProps) => {
  const [employeeNames, setEmployeeNames] = useState<string[]>([])
  const [isLoadingNames, setIsLoadingNames] = useState(true)

  useEffect(() => {
    const fetchEmployeeNames = async () => {
      try {
        setIsLoadingNames(true)
        const names = await getEmployeeNames()
        setEmployeeNames(names)
      } catch (error) {
        console.error('Error loading employee names:', error)
      } finally {
        setIsLoadingNames(false)
      }
    }

    fetchEmployeeNames()
  }, [])
  return (
    <>
      <div className="section-header">
        <h2>Employees</h2>
      </div>
      <table id="employeeTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Start</th>
            <th>End</th>
            <th>Tasks</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
              <tr key={index}>
                <td>
                  {isLoadingNames ? (
                    <span style={{ color: '#999', fontSize: '14px' }}>Loading...</span>
                  ) : (
                    <select
                      value={employee.name || ''}
                      onChange={(e) => !disabled && onEditName(index, e.target.value)}
                      disabled={disabled}
                      style={{
                        width: '100%',
                        padding: '2px 4px',
                        border: 'none',
                        background: 'transparent',
                        fontSize: '12px',
                        color: employee.name ? '#333' : '#999',
                        cursor: disabled ? 'not-allowed' : 'pointer',
                        textAlign: 'left'
                      }}
                    >
                      <option value="">Select</option>
                      {employeeNames.map((name) => (
                        <option key={name} value={name}>
                          {name}
                        </option>
                      ))}
                    </select>
                  )}
                </td>
                <td>
                  <div
                    className="time-cell"
                    style={{ display: 'inline-block', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1 }}
                    onClick={() => !disabled && onTimeClick(index, 'startTime')}
                  >
                    <span className="time-display">{employee.startTime || '09:00'}</span>
                  </div>
                </td>
                <td>
                  <div
                    className="time-cell"
                    style={{ display: 'inline-block', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1 }}
                    onClick={() => !disabled && onTimeClick(index, 'endTime')}
                  >
                    <span className="time-display">{employee.endTime || '15:30'}</span>
                  </div>
                </td>
                <td>
                  <div
                    className="work-desc-cell"
                    onClick={() => !disabled && onEdit(index)}
                    style={{ cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1 }}
                  >
                    <span className={`work-desc-display ${!employee.tasks ? 'empty' : ''}`}>
                      {employee.tasks || 'Click to add'}
                    </span>
                  </div>
                </td>
                <td>
                  <button className="delete-btn" onClick={() => !disabled && onDelete(index)} disabled={disabled} title="Delete">
                    ×
                  </button>
                </td>
              </tr>
            ))}
          {/* Always show an extra empty row for input */}
          <tr>
            <td>
              {isLoadingNames ? (
                <span style={{ color: '#999', fontSize: '14px' }}>Loading...</span>
              ) : (
                <select
                  value=""
                  onChange={(e) => {
                    if (e.target.value && !disabled) {
                      onAdd()
                      onEditName(employees.length, e.target.value)
                    }
                  }}
                  disabled={disabled}
                  style={{
                    width: '100%',
                    padding: '4px 8px',
                    border: 'none',
                    background: 'transparent',
                    fontSize: '14px',
                    color: '#999',
                    cursor: disabled ? 'not-allowed' : 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <option value="">Select</option>
                  {employeeNames.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              )}
            </td>
            <td>
              <div
                className="time-cell"
                style={{ display: 'inline-block', cursor: 'not-allowed', opacity: 0.5 }}
              >
                <span className="time-display">--:--</span>
              </div>
            </td>
            <td>
              <div
                className="time-cell"
                style={{ display: 'inline-block', cursor: 'not-allowed', opacity: 0.5 }}
              >
                <span className="time-display">--:--</span>
              </div>
            </td>
            <td>
              <div
                className="work-desc-cell"
                style={{ cursor: 'not-allowed', opacity: 0.5 }}
              >
                <span className="work-desc-display empty">--</span>
              </div>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default EmployeesTable

