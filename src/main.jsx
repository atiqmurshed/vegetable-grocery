import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Route.jsx'
import UserProvider from './UserContext.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
   <UserProvider>
     <RouterProvider router={router}></RouterProvider>
   </UserProvider>
  </StrictMode>,
  
)
