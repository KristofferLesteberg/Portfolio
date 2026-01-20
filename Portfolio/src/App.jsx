import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import './App.css'
import './assets/CSS/global.css'
import { Link } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'

import 'animate.css'

function App() {

  return (
    <>
      <Header />
      <div className='frontPage animate__animated animate__fadeInUp'>
        <h1 className='frontHeading'>
          Heisann! <br />
          Jeg er Kristoffer Lesteberg
        </h1>
      <div className='frontText'>
            <h2>
              Jeg er en 17 år gammel teknologiinteressert utvikler med fokus på programmering og digitale løsninger. <br />
              Jeg har erfaring med webutvikling og programvareutvikling gjennom egne prosjekter, og jobber strukturert <br />
              med både frontend og logikk. <br />
              Denne porteføljen viser utvalgte prosjekter og ferdigheter jeg har utviklet gjennom praktisk læring og kontinuerlig utforsking av teknologi.
           </h2>
      </div>

        <Link to={"/prosjekter"}>
          <button className='frontBtn'>Se hva jeg har lagd!</button>
        </Link>
      </div>
      
    

      <Footer />
    </>
  )
}

export default App
