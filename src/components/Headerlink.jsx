import React from 'react'
import { Link } from 'react-router-dom'

function Headerlink() {
  return (
    <div className='flex mt-20 justify-center gap-10'>
        <div className='bg-gray-700 p-5 rounded-md hover:bg-gray-500 '>
            <Link to='/user' className='text-white font-bold'>User - Sector</Link>
        </div>
        <div className='bg-gray-700 p-5 rounded-md hover:bg-gray-500 '>
            <Link to='/admin' className='text-white font-bold'>Admin - Sector</Link>
        </div>
    </div>
  )
}

export default Headerlink