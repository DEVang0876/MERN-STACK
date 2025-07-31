import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Event from './Event.jsx'
import Sum from './sum.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Event/>
    <Sum />
  </StrictMode>,
)
