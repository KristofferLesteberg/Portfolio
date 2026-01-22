import { useState } from 'react'
import Navbar from './Components/Navbar'

import { Link } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'

import "./assets/CSS/global.css"

import 'animate.css'
import picture from './assets/Pictures/CV_Bilde.png'
import AboutMe from './Components/AboutMe'

function App() {
  return (
    <>
      <Header />
      <div className='frontPage animate__animated animate__fadeInUp'>
        <div className='front'>
          <h1 className='frontHeading'>
            Heisann! <br />
            Jeg er Kristoffer Lesteberg
          </h1>
        <img className='frontImg' src={picture} alt="" />
        </div>
       
      <div className='frontText'>
            <h2>
              Jeg er en 17 år gammel teknologiinteressert utvikler med fokus på <br />
              programmering og digitale løsninger.
              Jeg har erfaring med webutvikling<br />
               og programvareutvikling gjennom egne prosjekter, og jobber strukturert <br />
              med både frontend og logikk. <br />
              Denne porteføljen viser utvalgte prosjekter og ferdigheter jeg har utviklet gjennom <br />
              praktisk læring og kontinuerlig utforsking av teknologi.
           </h2>
      </div>
        <div className='frontBtns'>
          <Link to={"/prosjekter"}>
            <button className='frontBtn'>Se hva jeg har lagd!</button>
          </Link>
          <button className='frontBtn'>
            <a 
              href='cv/Kristoffer_Lesteberg_CV.pdf' 
              download
              type='application/pdf'
            >
                last ned CV-en min!
            </a>
          </button>
        </div>
      </div>
    <AboutMe />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Footer />
    </>
  )
}

export default App
