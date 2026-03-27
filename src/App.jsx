import { useState } from 'react'
import './App.css'
import { ThemeContextProvider } from './context/theme/ThemeContext'
import { ToastContainer } from 'react-toastify';
import ErrorBoundary from './utils/ErrorBoundary';
import AllRoutes from './routes/AllRoutes';
import { BrowserRouter, useLocation } from 'react-router';

function AppContent() {
  const location = useLocation();

  return (
    <ErrorBoundary resetKey={location.pathname}>
      <AllRoutes />
      <ToastContainer />
    </ErrorBoundary>
  )
}

function App() {

  const [theme, setTheme] = useState('light');

  function setLightThemeMode() {
    setTheme('light')
  }

  function setDarkThemeMode() {
    setTheme('dark')
  }

  return (
    <ThemeContextProvider value={{ themeMode: theme, setLightThemeMode, setDarkThemeMode }}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeContextProvider>
  )
}

export default App
