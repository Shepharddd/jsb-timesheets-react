import React, { useState, useEffect } from 'react'

interface BreakIntervalModalProps {
  title: string
  value: string // Time format "HH:MM"
  onSave: (time: string) => void
  onClose: () => void
}

const BreakIntervalModal = ({ title, value, onSave, onClose }: BreakIntervalModalProps) => {
  // Convert time string (HH:MM) to minutes
  const timeToMinutes = (timeStr: string): number => {
    if (!timeStr) return 30 // Default 30 minutes
    const [hours, minutes] = timeStr.split(':').map(Number)
    return (hours || 0) * 60 + (minutes || 0)
  }

  // Convert minutes to time string (HH:MM)
  const minutesToTime = (minutes: number): string => {
    const hrs = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}`
  }

  const [minutes, setMinutes] = useState(timeToMinutes(value))

  useEffect(() => {
    setMinutes(timeToMinutes(value))
  }, [value])

  const handleSave = () => {
    const timeStr = minutesToTime(minutes)
    onSave(timeStr)
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{title}</h3>
          <span className="modal-close" onClick={onClose}>&times;</span>
        </div>
        <div className="modal-body">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <input
              type="number"
              min="0"
              max="1440"
              value={minutes}
              onChange={(e) => {
                const val = parseInt(e.target.value) || 0
                setMinutes(Math.max(0, Math.min(1440, val)))
              }}
              style={{
                width: '100px',
                padding: '10px',
                fontSize: '14px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center'
              }}
              autoFocus
            />
            <span style={{ fontSize: '14px', fontWeight: '500' }}>minutes</span>
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

export default BreakIntervalModal

