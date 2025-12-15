import React, { useState, useEffect } from 'react'

interface SubNameModalProps {
  title?: string
  placeholder?: string
  initialValue?: string
  onSave: (name: string) => void
  onClose: () => void
}

const SubNameModal = ({ title = 'Subcontractor Name', placeholder = 'Enter subcontractor name...', initialValue = '', onSave, onClose }: SubNameModalProps) => {
  const [name, setName] = useState(initialValue)

  useEffect(() => {
    setName(initialValue)
  }, [initialValue])

  const handleSave = () => {
    if (name.trim()) {
      onSave(name.trim())
    }
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{title}</h3>
          <span className="modal-close" onClick={onClose}>&times;</span>
        </div>
        <div className="modal-body">
          <input
            type="text"
            placeholder={placeholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSave()
              }
            }}
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
        <div className="modal-footer">
          <button className="modal-btn" onClick={handleSave}>Save</button>
          <button className="modal-btn modal-btn-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default SubNameModal

