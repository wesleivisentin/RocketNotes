import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'

import { Routes } from './routes'

import { AuthProvider } from './hooks/auth'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      
      <AuthProvider>
        
        <Routes />

      </AuthProvider>
      
    </ThemeProvider>
  </StrictMode>
)
