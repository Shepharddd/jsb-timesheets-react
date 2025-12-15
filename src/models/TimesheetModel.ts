import type { TimesheetData, Employee, Subcontractor, Plant, TimesheetStatus } from '../types'
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
  employees: Employee[]
  subcontractors: Subcontractor[]
  plant: Plant[]
  status: TimesheetStatus

  constructor(date: Date, data: Partial<TimesheetData> = {}) {
    this.date = date
    this.name = data.name || ''
    this.site = data.site || ''
    this.weather = data.weather || ''
    this.startTime = data.startTime || '07:00'
    this.endTime = data.endTime || '15:30'
    this.breakLength = data.breakLength || '00:30'
    this.tasksCompleted = data.tasksCompleted || ''
    this.employees = data.employees || []
    this.subcontractors = data.subcontractors || []
    this.plant = data.plant || []
    this.status = data.status || Status.NEW
  }

  /**
   * Create a default timesheet for a date
   */
  static createDefault(date: Date): TimesheetModel {
    return new TimesheetModel(date, {
      name: '',
      site: '',
      weather: '',
      startTime: '07:00',
      endTime: '15:30',
      breakLength: '00:30',
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
  addEmployee(employee: Employee): this {
    this.employees = [...this.employees, employee]
    this.status = Status.EDITED
    return this
  }

  /**
   * Update employee
   */
  updateEmployee(index: number, updates: Partial<Employee>): this {
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
  addSubcontractor(subcontractor: Subcontractor): this {
    this.subcontractors = [...this.subcontractors, subcontractor]
    this.status = Status.EDITED
    return this
  }

  /**
   * Update subcontractor
   */
  updateSubcontractor(index: number, updates: Partial<Subcontractor>): this {
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
  addPlant(plant: Plant): this {
    this.plant = [...this.plant, plant]
    this.status = Status.EDITED
    return this
  }

  /**
   * Update plant/equipment
   */
  updatePlant(index: number, updates: Partial<Plant>): this {
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
}

