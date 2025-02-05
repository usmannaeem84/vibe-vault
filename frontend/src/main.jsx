import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ProductContextProvider from './Context/Context.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 <ProductContextProvider>
    <App />
 </ProductContextProvider>
  </BrowserRouter>

)
