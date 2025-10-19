import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import Contact from './routes/Contact.jsx'
import Home from './routes/Home.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Projects from './routes/Projects.jsx'
import Certifications from './routes/Certifications.jsx'

import { RouterProvider, Route, createBrowserRouter } from 'react-router-dom'
import DocumentationPage from './routes/Documentation.jsx'

const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'documentation',
        element: <DocumentationPage />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'certifications',
        element: <Certifications />,
      }
  ]}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
