import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-gray-800'>
        <ul className='flex gap-5 justify-end p-5'>
            <li><Link to='/' className='font-bold text-white text-xl'>Home</Link></li>
            <li><Link to='/owner' className='font-bold text-white text-xl'>Owner</Link></li>
        </ul>
    </div>
  )
}

export default Navbar