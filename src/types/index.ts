export interface Employee {
  name: string
  startTime: string
  endTime: string
  tasks: string
}

export interface Subcontractor {
  name: string
  startTime: string
  endTime: string
  tasks: string
}

export interface Plant {
  name: string
  tasks: string
}

export enum TimesheetStatus {
  NEW = 'new',
  EDITED = 'edited',
  SUBMITTED = 'submitted'
}

export interface TimesheetData {
  name?: string
  site?: string
  weather?: string
  startTime?: string
  endTime?: string
  breakLength?: string
  tasksCompleted?: string
  employees?: Employee[]
  subcontractors?: Subcontractor[]
  plant?: Plant[]
  adminUnlocked?: boolean
  status?: TimesheetStatus
}

export type ModalType = 'time' | 'workDesc' | 'subName' | 'name' | 'addRow' | null

export interface ModalData {
  type?: 'employee' | 'subcontractor' | 'plant' | 'startTime' | 'endTime' | string
  index?: number
  currentName?: string
  name?: string
  value?: string
  [key: string]: unknown
}

