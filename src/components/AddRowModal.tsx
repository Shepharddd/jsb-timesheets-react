import React, { useState, useEffect } from 'react'
import type { Employee, Subcontractor, Plant } from '../types'

interface AddRowModalProps {
  type: 'employee' | 'subcontractor' | 'plant'
  initialData?: Partial<Employee & Subcontractor & Plant>
  onSave: (data: Employee | Subcontractor | Plant) => void
  onClose: () => void
}

const AddRowModal = ({ type, initialData = {}, onSave, onClose }: AddRowModalProps) => {
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    startTime: initialData.startTime || '09:00',
    endTime: initialData.endTime || '17:00',
    tasks: initialData.tasks || ''
  })


  const handleSave = () => {
    if (type === 'plant') {
      // Plant only needs name and tasks
      onSave({
        name: formData.name,
        tasks: formData.tasks
      } as Plant)
    } else {
      // Employees and subcontractors need all fields
      onSave({
        name: formData.name,
        startTime: formData.startTime,
        endTime: formData.endTime,
        tasks: formData.tasks
      } as Employee | Subcontractor)
    }
  }

  const title = type === 'employee' 
    ? 'Add Employee' 
    : type === 'subcontractor' 
    ? 'Add Subcontractor' 
    : 'Add Plant/Equipment'

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
        <div className="modal-header">
          <h3>{title}</h3>
          <span className="modal-close" onClick={onClose}>&times;</span>
        </div>
        <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Name:
            </label>
            <input
              type="text"
              placeholder="Enter name..."
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '14px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontFamily: 'Arial, sans-serif'
              }}
              autoFocus
            />
          </div>

          {type !== 'plant' && (
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                  Start Time:
                </label>
                <input
                  type="time"
                  value={formData.startTime}
                  onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '14px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontFamily: 'Arial, sans-serif'
                  }}
                />
              </div>

              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                  End Time:
                </label>
                <input
                  type="time"
                  value={formData.endTime}
                  onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '14px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontFamily: 'Arial, sans-serif'
                  }}
                />
              </div>
            </div>
          )}

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Tasks:
            </label>
            <textarea
              rows={6}
              placeholder="Enter work description/tasks..."
              value={formData.tasks}
              onChange={(e) => setFormData({ ...formData, tasks: e.target.value })}
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '14px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontFamily: 'Arial, sans-serif',
                resize: 'vertical'
              }}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button className="modal-btn" onClick={handleSave}>Save</button>
          <button className="modal-btn modal-btn-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default AddRowModal

