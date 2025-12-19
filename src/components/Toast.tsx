import { useEffect } from 'react'
import './Toast.css'

export type ToastType = 'success' | 'error' | 'info'

export interface Toast {
  id: string
  message: string
  type: ToastType
}

interface ToastProps {
  toast: Toast
  onRemove: (id: string) => void
}

export function ToastComponent({ toast, onRemove }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(toast.id)
    }, 5000) // Auto-remove after 5 seconds

    return () => clearTimeout(timer)
  }, [toast.id, onRemove])

  return (
    <div className={`toast toast-${toast.type}`}>
      <div className="toast-content">
        <span className="toast-message">{toast.message}</span>
        <button 
          className="toast-close" 
          onClick={() => onRemove(toast.id)}
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  )
}

