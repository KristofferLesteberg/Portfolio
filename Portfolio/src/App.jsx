import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Heisann ass</h1>
    <h1>{count}</h1>
    <h1>Jeg heter Kristoffer</h1>

    <Navbar />
    </>
  )
}

export default App
