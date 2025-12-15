import React, { useState, useEffect } from 'react'
import type { Plant } from '../types'
import { getPlantNames } from '../services/timesheetService'

interface PlantTableProps {
  plant: Plant[]
  onAdd: () => void
  onEdit: (index: number) => void
  onEditName: (index: number, name: string) => void
  onDelete: (index: number) => void
  disabled?: boolean
}

const PlantTable = ({ plant, onAdd, onEdit, onEditName, onDelete, disabled = false }: PlantTableProps) => {
  const [plantNames, setPlantNames] = useState<string[]>([])
  const [isLoadingNames, setIsLoadingNames] = useState(true)

  useEffect(() => {
    const fetchPlantNames = async () => {
      try {
        setIsLoadingNames(true)
        const names = await getPlantNames()
        setPlantNames(names)
      } catch (error) {
        console.error('Error loading plant names:', error)
      } finally {
        setIsLoadingNames(false)
      }
    }

    fetchPlantNames()
  }, [])
  return (
    <>
      <div className="section-header">
        <h2>Plant/Equipment</h2>
      </div>
      <table id="plantTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Tasks</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {plant.map((item, index) => (
              <tr key={index}>
                <td>
                  {isLoadingNames ? (
                    <span style={{ color: '#999', fontSize: '14px' }}>Loading...</span>
                  ) : (
                    <select
                      value={item.name || ''}
                      onChange={(e) => !disabled && onEditName(index, e.target.value)}
                      disabled={disabled}
                      style={{
                        width: '100%',
                        padding: '2px 4px',
                        border: 'none',
                        background: 'transparent',
                        fontSize: '12px',
                        color: item.name ? '#333' : '#999',
                        cursor: disabled ? 'not-allowed' : 'pointer',
                        textAlign: 'left'
                      }}
                    >
                      <option value="">Select</option>
                      {plantNames.map((name) => (
                        <option key={name} value={name}>
                          {name}
                        </option>
                      ))}
                    </select>
                  )}
                </td>
                <td>
                  <div
                    className="work-desc-cell"
                    onClick={() => !disabled && onEdit(index)}
                    style={{ cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1 }}
                  >
                    <span className={`work-desc-display ${!item.tasks ? 'empty' : ''}`}>
                      {item.tasks || 'Click to add'}
                    </span>
                  </div>
                </td>
                <td>
                  <button className="delete-btn" onClick={() => !disabled && onDelete(index)} disabled={disabled} title="Delete">
                    ×
                  </button>
                </td>
              </tr>
            ))}
          {/* Always show an extra empty row for input */}
          <tr>
            <td>
              {isLoadingNames ? (
                <span style={{ color: '#999', fontSize: '14px' }}>Loading...</span>
              ) : (
                <select
                  value=""
                  onChange={(e) => {
                    if (e.target.value && !disabled) {
                      onAdd()
                      onEditName(plant.length, e.target.value)
                    }
                  }}
                  disabled={disabled}
                  style={{
                    width: '100%',
                    padding: '4px 8px',
                    border: 'none',
                    background: 'transparent',
                    fontSize: '14px',
                    color: '#999',
                    cursor: disabled ? 'not-allowed' : 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <option value="">Select</option>
                  {plantNames.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              )}
            </td>
            <td>
              <div
                className="work-desc-cell"
                style={{ cursor: 'not-allowed', opacity: 0.5 }}
              >
                <span className="work-desc-display empty">--</span>
              </div>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default PlantTable

