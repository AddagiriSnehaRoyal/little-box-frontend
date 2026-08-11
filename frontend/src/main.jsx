import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { PackageProvider } from "./context/PackageContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PackageProvider>
      <App />
    </PackageProvider>
  </StrictMode>,
);
