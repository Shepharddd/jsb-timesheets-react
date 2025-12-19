import { TimesheetData, EmployeeRow, SubcontractorRow, PlantRow, TimesheetStatus } from '../types'
import { TimesheetStatus as Status } from '../types'

/**
 * Timesheet Model - Data structure and business logic
 */
export class TimesheetModel {
  date: Date
  name: string
  site: string
  weather: string
  startTime: string
  endTime: string
  breakLength: string
  tasksCompleted: string
  employees: EmployeeRow[]
  subcontractors: SubcontractorRow[]
  plant: PlantRow[]
  status: TimesheetStatus

  constructor(date: Date, data: Partial<TimesheetData> = {}) {
    this.date = date
    this.name = data.name || ''
    this.site = data.site || ''
    this.weather = data.weather || ''
    this.startTime = data.startTime || ''
    this.endTime = data.endTime || ''
    this.breakLength = data.breakLength || ''
    this.tasksCompleted = data.tasksCompleted || ''
    this.employees = data.employees || []
    this.subcontractors = data.subcontractors || []
    this.plant = data.plant || []
    // Convert legacy "submitted" status to "saved" when loading from database
    let status = data.status || Status.NEW
    // Check if status is the legacy "submitted" string value from database
    if (String(status) === 'submitted') {
      status = Status.SAVED
    }
    this.status = status
  }

  /**
   * Create a default timesheet for a date
   */
  static createDefault(date: Date): TimesheetModel {
    return new TimesheetModel(date, {
      name: '',
      site: '',
      weather: '',
      startTime: '',
      endTime: '',
      breakLength: '',
      tasksCompleted: '',
      employees: [],
      subcontractors: [],
      plant: [],
      status: Status.NEW
    })
  }

  /**
   * Convert to plain object for storage
   */
  toJSON(): TimesheetData {
    return {
      name: this.name,
      site: this.site,
      weather: this.weather,
      startTime: this.startTime,
      endTime: this.endTime,
      breakLength: this.breakLength,
      tasksCompleted: this.tasksCompleted,
      employees: this.employees,
      subcontractors: this.subcontractors,
      plant: this.plant,
      status: this.status
    }
  }

   /**
   * Convert to plain object for storage
   */
   toJSONWithSave(): TimesheetData {
    return {
      name: this.name,
      site: this.site,
      weather: this.weather,
      startTime: this.startTime,
      endTime: this.endTime,
      breakLength: this.breakLength,
      tasksCompleted: this.tasksCompleted,
      employees: this.employees,
      subcontractors: this.subcontractors,
      plant: this.plant,
      status: TimesheetStatus.SAVED
    }
  }


  /**
   * Create from JSON data
   */
  static fromJSON(date: Date, json: TimesheetData): TimesheetModel {
    return new TimesheetModel(date, json)
  }

  /**
   * Update timesheet data
   */
  update(updates: Partial<TimesheetData>): this {
    Object.assign(this, updates)
    // Mark as edited when any update is made (unless status is explicitly set)
    if (updates.status === undefined) {
      this.status = Status.EDITED
    }
    return this
  }

  /**
   * Add employee
   */
  addEmployee(employee: EmployeeRow): this {
    this.employees = [...this.employees, employee]
    this.status = Status.EDITED
    return this
  }

  /**
   * Update employee
   */
  updateEmployee(index: number, updates: Partial<EmployeeRow>): this {
    this.employees[index] = { ...this.employees[index], ...updates }
    this.status = Status.EDITED
    return this
  }

  /**
   * Remove employee
   */
  removeEmployee(index: number): this {
    this.employees = this.employees.filter((_, i) => i !== index)
    this.status = Status.EDITED
    return this
  }

  /**
   * Add subcontractor
   */
  addSubcontractor(subcontractor: SubcontractorRow): this {
    this.subcontractors = [...this.subcontractors, subcontractor]
    this.status = Status.EDITED
    return this
  }

  /**
   * Update subcontractor
   */
  updateSubcontractor(index: number, updates: Partial<SubcontractorRow>): this {
    this.subcontractors[index] = { ...this.subcontractors[index], ...updates }
    this.status = Status.EDITED
    return this
  }

  /**
   * Remove subcontractor
   */
  removeSubcontractor(index: number): this {
    this.subcontractors = this.subcontractors.filter((_, i) => i !== index)
    this.status = Status.EDITED
    return this
  }

  /**
   * Add plant/equipment
   */
  addPlant(plant: PlantRow): this {
    this.plant = [...this.plant, plant]
    this.status = Status.EDITED
    return this
  }

  /**
   * Update plant/equipment
   */
  updatePlant(index: number, updates: Partial<PlantRow>): this {
    this.plant[index] = { ...this.plant[index], ...updates }
    this.status = Status.EDITED
    return this
  }

  /**
   * Remove plant/equipment
   */
  removePlant(index: number): this {
    this.plant = this.plant.filter((_, i) => i !== index)
    this.status = Status.EDITED
    return this
  }

  removeEmptyRows(): this {
    if (this.employees) {
      this.employees = this.employees.filter(emp => emp.name && emp.name.trim() !== '')
    }
    // Remove subcontractors with empty names
    if (this.subcontractors) {
      this.subcontractors = this.subcontractors.filter(sub => sub.name && sub.name.trim() !== '')
    }
    // Remove plant with empty names
    if (this.plant) {
      this.plant = this.plant.filter(p => p.name && p.name.trim() !== '')
    }
    return this
  }
}

