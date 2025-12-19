import type { SubcontractorRow } from '../types'

interface SubcontractorsTableProps {
  subcontractorRows: SubcontractorRow[]
  onAdd: () => void
  onEdit: (index: number) => void
  onEditName?: (index: number) => void
  onDelete: (index: number) => void
  onTimeClick: (index: number, type: 'startTime' | 'endTime') => void
  disabled?: boolean
}

const SubcontractorsTable = ({ subcontractorRows, onAdd, onEdit, onEditName, onDelete, onTimeClick, disabled = false }: SubcontractorsTableProps) => {
  return (
    <>
      <div className="section-header">
        <h2>Subcontractors</h2>
      </div>
      <table id="subTable">
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
          {subcontractorRows.map((sub, index) => (
              <tr key={index}>
                <td>
                  <div 
                    className="sub-name-cell"
                    onClick={() => !disabled && onEditName && onEditName(index)}
                    style={{ cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1 }}
                  >
                    <span className={`sub-name-display ${!sub.name ? 'empty' : ''}`}>
                      {sub.name || 'Click to add'}
                    </span>
                  </div>
                </td>
                <td>
                  <div
                    className="time-cell"
                    style={{ display: 'inline-block', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1 }}
                    onClick={() => !disabled && onTimeClick(index, 'startTime')}
                  >
                    <span className="time-display">{sub.startTime || '09:00'}</span>
                  </div>
                </td>
                <td>
                  <div
                    className="time-cell"
                    style={{ display: 'inline-block', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1 }}
                    onClick={() => !disabled && onTimeClick(index, 'endTime')}
                  >
                    <span className="time-display">{sub.endTime || '15:30'}</span>
                  </div>
                </td>
                <td>
                  <div
                    className="work-desc-cell"
                    onClick={() => !disabled && onEdit(index)}
                    style={{ cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1 }}
                  >
                    <span className={`work-desc-display ${!sub.tasks ? 'empty' : ''}`}>
                      {sub.tasks || 'Click to add'}
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
              <div 
                className="sub-name-cell"
                onClick={() => {
                  if (!disabled && onEditName) {
                    onAdd()
                    onEditName(subcontractorRows.length)
                  }
                }}
                style={{ cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1 }}
              >
                <span className="sub-name-display empty">Click to add</span>
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

export default SubcontractorsTable

