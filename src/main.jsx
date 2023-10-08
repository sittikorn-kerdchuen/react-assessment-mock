import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

// components
import User from './components/User.jsx'
import Owner from './components/Owner.jsx'
import Admin from './components/Admin.jsx'



const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
  {
    path:'/user',
    element: <User/>
  },
  {
    path:'/owner',
    element: <Owner/>
  },
  {
    path:'/admin',
    element: <Admin/>
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
