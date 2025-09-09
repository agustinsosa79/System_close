import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CantidadesProvider } from './context/cantidad_context/cantidadProvider.tsx'
import { PreciosProvider } from './context/precios_context/preciosProvider'
import { CalculosProvider } from './context/calculos_context/CalculosProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PreciosProvider>
    <CantidadesProvider>
      <CalculosProvider>
      <App />
      </CalculosProvider>
    </CantidadesProvider>
    </PreciosProvider>
  </StrictMode>
)
