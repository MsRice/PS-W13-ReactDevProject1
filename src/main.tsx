import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import ShorterProvider from './Context/Shorter/ShorterProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <ShorterProvider>
        <App />
      </ShorterProvider>
    </Router>
  </StrictMode>,
)
