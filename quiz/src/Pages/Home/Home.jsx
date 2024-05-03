import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = ( {menu, setMenu} ) => {
  return (
    <div className='general'>
      <div className='home' id='home'>
        <div className='home-txt'>
          <h1 className='big-txt'>Welcome!</h1>
          <p className='welcome-txt'>Get ready to challenge your wits and discover fascinating facts across a multitude of question. Let the fun begin!</p>
        </div>
        <div onClick={() => setMenu('')} className='take-test-bx'>
          <Link to='/question'><button className='take-test'>TAKE TEST</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Home