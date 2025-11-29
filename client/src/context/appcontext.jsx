import { createContext, useMemo, useState } from 'react'
import { assets } from '../assets/assets'

export const AppContext = createContext(null)

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [credit, setCredit] = useState(25)
  const [showLogin, setShowLogin] = useState(false)

  const logout = () => setUser(null)

  const generateImage = async (prompt) => {
    // Placeholder; replace with backend request when available
    await new Promise((resolve) => setTimeout(resolve, 1200))
    return assets.sample_img_2
  }

  const value = useMemo(
    () => ({
      user,
      setUser,
      credit,
      setCredit,
      showLogin,
      setShowLogin,
      logout,
      generateImage,
    }),
    [user, credit, showLogin],
  )

  return (
    <AppContext.Provider value={value}>
      {children}
      {showLogin ? null : null}
    </AppContext.Provider>
  )
}
