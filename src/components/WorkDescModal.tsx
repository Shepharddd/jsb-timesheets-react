import React, { useState, useEffect } from 'react'

interface WorkDescModalProps {
  value: string
  onSave: (tasks: string) => void
  onClose: () => void
}

const WorkDescModal = ({ value, onSave, onClose }: WorkDescModalProps) => {
  const [tasks, setTasks] = useState(value)

  useEffect(() => {
    setTasks(value)
  }, [value])

  const handleSave = () => {
    onSave(tasks)
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Work Description</h3>
          <span className="modal-close" onClick={onClose}>&times;</span>
        </div>
        <div className="modal-body">
          <textarea
            rows={6}
            placeholder="Enter work description..."
            value={tasks}
            onChange={(e) => setTasks(e.target.value)}
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

export default WorkDescModal

