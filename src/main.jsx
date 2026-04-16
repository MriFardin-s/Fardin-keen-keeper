import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {  RouterProvider } from 'react-router'
import { router } from './router/router.jsx'
import TimeLineProvider from './context/TimeLineProvider.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimeLineProvider>
      <RouterProvider router={router} />
    </TimeLineProvider>
    
  </StrictMode>,
)
