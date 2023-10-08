import { useState } from 'react'
import './App.css'

// components
import Home from './components/Home'
import Navbar from './components/Navbar'
import Headerlink from './components/Headerlink'

function App() {
 
  return (
    <div>
      <Navbar/>
      <Home/>
      <Headerlink/>
    </div>
  )
}

export default App
