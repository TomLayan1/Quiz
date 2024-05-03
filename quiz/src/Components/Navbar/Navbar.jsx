import React, { useState } from 'react'
import './Navbar.css'
import {  FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = ( {menu, setMenu} ) => {

  const [nav, setNav] = useState(false)
  console.log(nav)
  
  const handleNav = () => setNav(!nav)


  return (
    <div className='navbar' id='navbar'>
      <div onClick={() => setMenu('home')} className='logo'>
        <Link to='/'><h1 className='logo-name'>Quiz</h1></Link>
      </div>
      <div className='nav-link'>
        <ul className='nav' style={{ top: nav ? '0' : '-600px' }}>
          <Link to='/'><li onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>home</li></Link>
          <Link to='/about'><li onClick={() => setMenu('about')} className={menu === 'about' ? 'active' : ''}>About</li></Link>
          <Link to='/contact'><li onClick={() => setMenu('contact')} className={menu === 'contact' ? 'active' : ''}>Contact</li></Link>
        </ul>
        <div className='hamburger' onClick={handleNav}>
          {nav ? (<FaTimes className='hamburger-x' size={25} style = {{marginRight: '20px', cursor: 'pointer', color: 'white' }}/>) : ( <FaBars className='hamburger-bar' size={25} />)}
        </div>
      </div>
    </div>
  )
}

export default Navbar