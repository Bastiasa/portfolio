// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GAnalyticsConsent } from './components/GAnalytics.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    <App />
    <GAnalyticsConsent/>
  </>,
)
