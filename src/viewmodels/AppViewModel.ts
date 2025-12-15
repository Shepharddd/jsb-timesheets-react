import { useState, useEffect } from 'react'
import { onAuthStateChange } from '../services/authService'
import type { User } from 'firebase/auth'

interface AppViewModel {
  user: User | null
  loading: boolean
}

/**
 * Hook to manage app-level authentication state only
 */
export function useAppViewModel(): AppViewModel {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  
  // Handle authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChange((user) => {
      setUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  return {
    user,
    loading
  }
}

