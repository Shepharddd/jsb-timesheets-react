import { TimesheetModel } from "../models/TimesheetModel"

export interface EmployeeRow {
  name: string
  startTime: string
  endTime: string
  tasks: string
}

export interface SubcontractorRow {
  name: string
  startTime: string
  endTime: string
  tasks: string
}

export interface PlantRow {
  name: string
  tasks: string
}

export enum TimesheetStatus {
  NEW = 'new',
  EDITED = 'edited',
  SAVED = 'saved'
}

export interface TimesheetData {
  name?: string
  site?: string
  weather?: string
  startTime?: string
  endTime?: string
  breakLength?: string
  tasksCompleted?: string
  employees?: EmployeeRow[]
  subcontractors?: SubcontractorRow[]
  plant?: PlantRow[]
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

export interface TimeSheets {
  week1Timesheets: TimesheetModel[]
  week2Timesheets: TimesheetModel[]
}

export interface CompanyData {
  sites: string[]
  employees: string[]
  plant: string[]
}
