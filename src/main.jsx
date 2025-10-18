import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import Contact from './router/Contact.jsx'
import ErrorPage from './router/ErrorPage.jsx'

import { RouterProvider, Route, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
