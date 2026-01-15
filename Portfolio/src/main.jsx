import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Projects from './Components/Pages/Projects.jsx'
import App from './App.jsx'
import ErrorPage from './Components/Pages/Errorpage.jsx'
import Contact from './Components/Pages/Contact.jsx'
import About from './Components/Pages/About.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Skills from './Components/Pages/Skills.jsx'



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
   {
    path: "ferdigheter",
    element: <Skills />
   }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
