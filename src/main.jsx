import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource/sora";
import '@fontsource/coda-caption';
import '@fontsource/luckiest-guy';
import '@fontsource-variable/gluten';
import '@fontsource/roboto';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
