import React from 'react'

// components
import Navbar from './Navbar'
import TableData from './TableData'

function User() {
   

    return (
        <div>
            <Navbar />
            <div className='mt-20'>
                <h1 className='text-center text-5xl font-bold mb-5'>Generation Thailand</h1>
                <h1 className='text-center text-5xl font-bold'>User - Sector</h1>
            </div>
            <TableData/>
        </div>
    )
}

export default User