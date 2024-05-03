import React, { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Question from './Pages/Question/Question'
import Contact from './Pages/About/About'

const App = () => {
  const [menu, setMenu] = useState('home')

  return (
    <div className='app' id='app'>
      <div>
        <Navbar menu={menu} setMenu={setMenu} />
        <Routes>
          <Route path='/' element={<Home menu={menu} setMenu={setMenu} />}/>
          <Route path='/question' element={<Question />}/>
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App