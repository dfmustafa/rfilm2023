import { AuthProvider } from '../auth/providers/auth_provider' 
const RootProvider = ({ children }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default RootProvider;
