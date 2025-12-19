import { 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged,
  type User
} from 'firebase/auth'
import { OAuthProvider } from 'firebase/auth'
import { auth } from '../utils/firebase/config'

/**
 * Sign in with Microsoft
 */
export async function signInWithMicrosoft(): Promise<User> {
  try {
    const provider = new OAuthProvider('microsoft.com')
    // Add scopes if needed
    provider.addScope('email')
    provider.addScope('profile')

    // Force single-tenant endpoint
    provider.setCustomParameters({
      tenant: '68237f8a-bf3c-425b-b92b-9518c6d4bf18', // or tenant ID
    });
    
    const result = await signInWithPopup(auth, provider)
    return result.user
  } catch (error) {
    console.error('Error signing in with Microsoft:', error)
    throw error
  }
}

/**
 * Sign out
 */
export async function signOutUser(): Promise<void> {
  try {
    await signOut(auth)
  } catch (error) {
    console.error('Error signing out:', error)
    throw error
  }
}

/**
 * Get current user
 */
export function getCurrentUser(): User | null {
  return auth.currentUser
}

/**
 * Subscribe to auth state changes
 */
export function onAuthStateChange(callback: (user: User | null) => void): () => void {
  return onAuthStateChanged(auth, callback)
}

