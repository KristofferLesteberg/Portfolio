import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Projects from './Pages/Projects.jsx'
import App from './App.jsx'
import ErrorPage from './Pages/Errorpage.jsx'
import Contact from './Pages/Contact.jsx'
import About from './Pages/About.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  }, 
  {
    path: "/kontakt",
    element: <Contact />
  },
  {
    path: "/prosjekter",
    element: <Projects />
  },
   {
    path: "/kristoffer",
    element: <About />
   },
  
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
