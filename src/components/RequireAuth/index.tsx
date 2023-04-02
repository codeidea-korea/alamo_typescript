import { ReactElement } from 'react'
import { useIsAuthenticated } from 'react-auth-kit'
import { Navigate } from 'react-router-dom'

function RequireAuth({ children }: { children: ReactElement }) {
  const isAuthenticated = useIsAuthenticated()
  const isAuth = isAuthenticated()

  if (!isAuth) {
    return <Navigate to="/login" />
  }
  return children
}
export default RequireAuth
