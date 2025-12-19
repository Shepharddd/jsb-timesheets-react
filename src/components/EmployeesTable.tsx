import type { EmployeeRow } from '../types'

interface EmployeesTableProps {
  employeeRows: EmployeeRow[]
  employees: string[]
  onAdd: () => void
  onEdit: (index: number) => void
  onEditName: (index: number, name: string) => void
  onDelete: (index: number) => void
  onTimeClick: (index: number, type: 'startTime' | 'endTime') => void
  disabled?: boolean
}

const EmployeesTable = ({ employeeRows, employees, onAdd, onEdit, onEditName, onDelete, onTimeClick, disabled = false }: EmployeesTableProps) => {
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
          {employeeRows.map((employee, index) => (
              <tr key={index}>
                <td>
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
                      {employees.map((name) => (
                        <option key={name} value={name}>
                          {name}
                        </option>
                      ))}
                    </select>
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
                <select
                  value=""
                  onChange={(e) => {
                    if (e.target.value && !disabled) {
                      onAdd()
                      onEditName(employeeRows.length, e.target.value)
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
                  {employees.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
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

