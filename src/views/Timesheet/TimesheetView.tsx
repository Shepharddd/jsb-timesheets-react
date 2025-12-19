import { useState } from 'react'
import '../../App.css'
import './TimesheetView.css'
import UserInfo from '../../components/UserInfo'
import EmployeesTable from '../../components/EmployeesTable'
import SubcontractorsTable from '../../components/SubcontractorsTable'
import PlantTable from '../../components/PlantTable'
import TimeModal from '../../components/TimeModal'
import BreakIntervalModal from '../../components/BreakIntervalModal'
import WorkDescModal from '../../components/WorkDescModal'
import SubNameModal from '../../components/SubNameModal'
import AddRowModal from '../../components/AddRowModal'
import { TimesheetModel } from '../../models/TimesheetModel'
import type { ModalType, ModalData, EmployeeRow, SubcontractorRow, PlantRow, TimesheetData, CompanyData } from '../../types'
import { formatDate } from '../../utils/utils'

interface TimesheetViewProps {
  timesheet: TimesheetModel
  companyData: CompanyData
  onUpdate: (updates: Partial<TimesheetData>) => void
  canNavigatePrev: () => boolean
  onNavigatePrev: () => void
  canNavigateNext: () => boolean
  onNavigateNext: () => void
  onBackToHome: () => void
}

function TimesheetView({ 
  timesheet,
  companyData,
  onUpdate, 
  canNavigatePrev,
  onNavigatePrev, 
  canNavigateNext,
  onNavigateNext, 
  onBackToHome,
}: TimesheetViewProps) {
  const [activeModal, setActiveModal] = useState<ModalType>(null)
  const [modalData, setModalData] = useState<ModalData>({})

  const openModal = (modalType: ModalType, data: ModalData = {}) => {
    setActiveModal(modalType)
    setModalData(data)
  }

  const closeModal = () => {
    setActiveModal(null)
    setModalData({})
  }

  return (
    <div className="timesheet-container">
      <div className="section timesheet-week-nav-section">
        <div className="date-navigation">
          <button 
            className="submit-btn timesheet-back-button" 
            onClick={() => onBackToHome()}
          >
            Back
          </button>
          <button 
            className={`date-nav-btn ${!canNavigatePrev ? 'disabled' : ''}`}
            aria-label="Previous day"
            onClick={() => onNavigatePrev()}
            disabled={!canNavigatePrev}
            style={{ width: '36px', height: '36px', padding: '0' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="date-display">{formatDate(timesheet.date)}</div>
          <button 
            className={`date-nav-btn ${!canNavigateNext ? 'disabled' : ''}`}
            aria-label="Next day"
            onClick={onNavigateNext}
            disabled={!canNavigateNext}
            style={{ width: '36px', height: '36px', padding: '0' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="section timesheet-section">
          <UserInfo
            timesheet={timesheet}
            sites={companyData.sites}
            onUpdate={onUpdate}
            onTimeClick={(type) => {
              const currentValue = timesheet[type] || (type === 'startTime' ? '07:00' : type === 'endTime' ? '15:30' : '00:30')
              openModal('time', { type, value: currentValue })
            }}
          />
      </div>

      <div className="section timesheet-section">
        <EmployeesTable
          employeeRows={timesheet.employees}
          employees={companyData.employees}
          onAdd={() => {
            const updatedEmployees = [...timesheet.employees, { name: '', startTime: '07:00', endTime: '15:30', tasks: '' }]
            onUpdate({ employees: updatedEmployees })
          }}
          onEdit={(index) => openModal('workDesc', { type: 'employee', index })}
          onEditName={(index, name) => {
            const updatedEmployees = [...timesheet.employees]
            updatedEmployees[index] = { ...updatedEmployees[index], name }
            onUpdate({ employees: updatedEmployees })
          }}
          onDelete={(index) => {
            const updatedEmployees = timesheet.employees.filter((_, i) => i !== index)
            onUpdate({ employees: updatedEmployees })
          }}
          onTimeClick={(index, type) => {
            const employee = timesheet.employees[index]
            openModal('time', {
              type: `employee-${index}-${type}`,
              value: employee[type] || (type === 'endTime' ? '15:30' : '07:00')
            })
          }}
        />
      </div>

      <div className="section timesheet-section">
        <SubcontractorsTable
          subcontractorRows={timesheet.subcontractors}
          onAdd={() => {
            const updatedSubcontractors = [...timesheet.subcontractors, { name: '', startTime: '07:00', endTime: '15:30', tasks: '' }]
            onUpdate({ subcontractors: updatedSubcontractors })
          }}
          onEdit={(index) => openModal('workDesc', { type: 'subcontractor', index })}
          onEditName={(index) => openModal('subName', { type: 'subcontractor', index, currentName: timesheet.subcontractors[index]?.name || '' })}
          onDelete={(index) => {
            const updatedSubcontractors = timesheet.subcontractors.filter((_, i) => i !== index)
            onUpdate({ subcontractors: updatedSubcontractors })
          }}
          onTimeClick={(index, type) => {
            const sub = timesheet.subcontractors[index]
            openModal('time', {
              type: `subcontractor-${index}-${type}`,
              value: sub[type] || (type === 'endTime' ? '15:30' : '07:00')
            })
          }}
        />
      </div>

      <div className="section timesheet-section">
        <PlantTable
          plantRows={timesheet.plant}
          plant={companyData.plant}
          onAdd={() => {
            const updatedPlant = [...timesheet.plant, { name: '', tasks: '' }]
            onUpdate({ plant: updatedPlant })
          }}
          onEdit={(index) => openModal('workDesc', { type: 'plant', index })}
          onEditName={(index, name) => {
            const updatedPlant = [...timesheet.plant]
            updatedPlant[index] = { ...updatedPlant[index], name }
            onUpdate({ plant: updatedPlant })
          }}
          onDelete={(index) => {
            const updatedPlant = timesheet.plant.filter((_, i) => i !== index)
            onUpdate({ plant: updatedPlant })
          }}
        />
      </div>

      {activeModal === 'time' && modalData.type !== 'breakLength' && (
        <TimeModal
          title={modalData.type === 'startTime' ? 'Start Time' :
            modalData.type === 'endTime' ? 'End Time' : 'Time'}
          value={(modalData.value as string) || (modalData.type === 'endTime' ? '15:30' : '07:00')}
          onSave={(time) => {
            if (modalData.type === 'startTime' || modalData.type === 'endTime') {
              onUpdate({ [modalData.type]: time })
            } else if (typeof modalData.type === 'string' && modalData.type.startsWith('employee-')) {
              const [, indexStr, field] = modalData.type.split('-')
              const index = parseInt(indexStr)
              const updatedEmployees = [...timesheet.employees]
              updatedEmployees[index] = { ...updatedEmployees[index], [field]: time }
              onUpdate({ employees: updatedEmployees })
            } else if (typeof modalData.type === 'string' && modalData.type.startsWith('subcontractor-')) {
              const [, indexStr, field] = modalData.type.split('-')
              const index = parseInt(indexStr)
              const updatedSubcontractors = [...timesheet.subcontractors]
              updatedSubcontractors[index] = { ...updatedSubcontractors[index], [field]: time }
              onUpdate({ subcontractors: updatedSubcontractors })
            }
            closeModal()
          }}
          onClose={closeModal}
        />
      )}

      {activeModal === 'time' && modalData.type === 'breakLength' && (
        <BreakIntervalModal
          title="Break Length"
          value={(modalData.value as string) || '00:30'}
          onSave={(time) => {
            onUpdate({ breakLength: time })
            closeModal()
          }}
          onClose={closeModal}
        />
      )}

      {activeModal === 'workDesc' && (
        <WorkDescModal
          value={modalData.index !== undefined
            ? (modalData.type === 'employee'
              ? timesheet.employees[modalData.index]?.tasks || ''
              : modalData.type === 'subcontractor'
                ? timesheet.subcontractors[modalData.index]?.tasks || ''
                : timesheet.plant[modalData.index]?.tasks || '')
            : ''}
          onSave={(tasks) => {
            if (modalData.index !== undefined) {
              if (modalData.type === 'employee') {
                const updatedEmployees = [...timesheet.employees]
                updatedEmployees[modalData.index] = { ...updatedEmployees[modalData.index], tasks }
                onUpdate({ employees: updatedEmployees })
              } else if (modalData.type === 'subcontractor') {
                const updatedSubcontractors = [...timesheet.subcontractors]
                updatedSubcontractors[modalData.index] = { ...updatedSubcontractors[modalData.index], tasks }
                onUpdate({ subcontractors: updatedSubcontractors })
              } else {
                const updatedPlant = [...timesheet.plant]
                updatedPlant[modalData.index] = { ...updatedPlant[modalData.index], tasks }
                onUpdate({ plant: updatedPlant })
              }
            } else {
              if (modalData.type === 'employee') {
                const updatedEmployees = [...timesheet.employees, { name: (modalData.name as string) || '', startTime: '07:00', endTime: '15:30', tasks }]
                onUpdate({ employees: updatedEmployees })
              } else if (modalData.type === 'subcontractor') {
                const updatedSubcontractors = [...timesheet.subcontractors, { name: (modalData.name as string) || '', startTime: '07:00', endTime: '15:30', tasks }]
                onUpdate({ subcontractors: updatedSubcontractors })
              } else {
                const updatedPlant = [...timesheet.plant, { name: (modalData.name as string) || '', tasks }]
                onUpdate({ plant: updatedPlant })
              }
            }
            closeModal()
          }}
          onClose={closeModal}
        />
      )}

      {activeModal === 'subName' && (
        <SubNameModal
          title="Subcontractor Name"
          placeholder="Enter subcontractor name..."
          initialValue={(modalData.currentName as string) || ''}
          onSave={(name) => {
            if (modalData.index !== undefined) {
              const updatedSubcontractors = [...timesheet.subcontractors]
              updatedSubcontractors[modalData.index] = { ...updatedSubcontractors[modalData.index], name }
              onUpdate({ subcontractors: updatedSubcontractors })
              closeModal()
            } else {
              closeModal()
              openModal('workDesc', { type: 'subcontractor', name })
            }
          }}
          onClose={closeModal}
        />
      )}

      {activeModal === 'name' && (
        <SubNameModal
          title={modalData.type === 'employee' ? 'Employee Name' : 'Plant/Equipment Name'}
          placeholder={modalData.type === 'employee' ? 'Enter employee name...' : 'Enter plant/equipment name...'}
          initialValue={(modalData.currentName as string) || ''}
          onSave={(name) => {
            if (modalData.index !== undefined) {
              if (modalData.type === 'employee') {
                const updatedEmployees = [...timesheet.employees]
                updatedEmployees[modalData.index] = { ...updatedEmployees[modalData.index], name }
                onUpdate({ employees: updatedEmployees })
              } else {
                const updatedPlant = [...timesheet.plant]
                updatedPlant[modalData.index] = { ...updatedPlant[modalData.index], name }
                onUpdate({ plant: updatedPlant })
              }
              closeModal()
            } else {
              closeModal()
              openModal('workDesc', { type: modalData.type, name })
            }
          }}
          onClose={closeModal}
        />
      )}

      {activeModal === 'addRow' && (
        <AddRowModal
          type={modalData.type as 'employee' | 'subcontractor' | 'plant'}
          onSave={(data) => {
            if (modalData.type === 'employee') {
              const updatedEmployees = [...timesheet.employees, data as EmployeeRow]
              onUpdate({ employees: updatedEmployees })
            } else if (modalData.type === 'subcontractor') {
              const updatedSubcontractors = [...timesheet.subcontractors, data as SubcontractorRow]
              onUpdate({ subcontractors: updatedSubcontractors })
            } else {
              const updatedPlant = [...timesheet.plant, data as PlantRow]
              onUpdate({ plant: updatedPlant })
            }
            closeModal()
          }}
          onClose={closeModal}
        />
      )}
    </div>
  )
}

export default TimesheetView

