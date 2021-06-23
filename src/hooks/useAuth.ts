import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useAuth() {
  return useContext(AuthContext)
}
