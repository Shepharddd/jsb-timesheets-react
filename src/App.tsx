import { useEffect, useRef } from 'react'
import AuthView from './views/Auth/AuthView'
import HomeView from './views/Home/HomeView'
import TimesheetView from './views/Timesheet/TimesheetView'
import { useAppViewModel } from './viewmodels/AppViewModel'
import { useToast } from './hooks/useToast'
import { ToastContainer } from './components/ToastContainer'

function App() {
  const useApp = useAppViewModel()
  const { toasts, showSuccess, showError, showInfo, removeToast } = useToast()
  const prevToastMessageRef = useRef<string | null>(null)

  // Watch for toast messages from ViewModel
  useEffect(() => {
    const currentToast = useApp.toastMessage
    if (currentToast) {
      const toastKey = `${currentToast.message}-${currentToast.type}`
      // Only show if it's a new toast (different from previous)
      if (prevToastMessageRef.current !== toastKey) {
        const { message, type } = currentToast
        if (type === 'success') {
          showSuccess(message)
        } else if (type === 'error') {
          showError(message)
        } else {
          showInfo(message)
        }
        prevToastMessageRef.current = toastKey
        useApp.clearToast()
      }
    }
  }, [useApp.toastMessage, showSuccess, showError, showInfo, useApp])

  return (
    <div style={{ position: 'relative' }}>
      <div className="section timesheet-logo-section">
        <img src="/assets/JSBLogo.jpg" alt="JSB Logo" className="timesheet-logo" style={{ maxHeight: '150px', maxWidth: '100%', aspectRatio: '4', objectFit: 'contain' }} />
        <div className="timesheet-logo-spacer"></div>
      </div>
      {
        useApp.user === null ? <AuthView 
          authLoading={useApp.authLoading} 
          onSignIn={useApp.onSignIn} /> :

        useApp.selectedTimesheet === null 
          ? <HomeView 
              timesheets={useApp.timesheets ?? null} 
              userName={useApp.user.displayName}
              onSignOut={useApp.onSignOut}
              onSubmit={useApp.handleSubmit}
              onSelectTimesheet={useApp.handleNavigateToTimesheet}
              />
          : <TimesheetView 
              timesheet={useApp.selectedTimesheet}
              companyData={useApp.companyData}
              onUpdate={useApp.updateTimesheet}
              onNavigatePrev={useApp.navigatePrev}
              onNavigateNext={useApp.navigateNext}
              onBackToHome={useApp.handleBackToHome} 
              canNavigatePrev={useApp.canNavigatePrev} 
              canNavigateNext={useApp.canNavigateNext}
              />
      }
      {useApp.loading && (
        <div className="app-loading-overlay">
          <div className="app-loading-text">Loading...</div>
        </div>
      )}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </div>
  )
}

export default App
