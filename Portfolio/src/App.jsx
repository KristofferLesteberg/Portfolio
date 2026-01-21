import { useState } from 'react'
import Navbar from './Components/Navbar'

import { Link } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'

import "./assets/CSS/global.css"

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
    <main>
      <div className='Me'>
        <h1 className='meHeading'>Hvem er jeg?</h1>
          <div className='school'>
            <h1>Elev ved Sam Eyde Vgs.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aperiam omnis mollitia labore eum, sequi ab similique iste dicta quaerat obcaecati porro sapiente at voluptate qui animi blanditiis, alias culpa.</p>

          </div>
          <div className='hobbies'>

          </div>
          <div className='instrests'></div>


      </div>
    </main>  


      <br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Footer />
    </>
  )
}

export default App
