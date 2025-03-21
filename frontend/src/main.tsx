import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router";
import { TanstackProvider } from './TanstackProvider.tsx';
TanstackProvider

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <TanstackProvider>
        <App />
      </TanstackProvider>
    </BrowserRouter>
  </StrictMode>,
)
