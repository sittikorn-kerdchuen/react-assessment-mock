import React from 'react'
// components
import Navbar from './Navbar'

function Owner() {
  return (
    <div>
        <Navbar/>
        <div>
            <h1 className='text-center mt-20 text-4xl font-bold'>Beer - Group H 40-Sittikorn</h1>
            <img src="https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" className='w-1/2 mx-auto my-5' />
            <h2 className='text-center font-bold text-xl mb-5'>Short Biograhpy</h2>
            <p className='text-center px-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolore voluptatibus architecto veritatis! Libero soluta assumenda quo dignissimos totam, eaque eos commodi! Aliquam, obcaecati animi magni odit dolorem ullam, hic fugiat nemo voluptate cum eos deleniti eaque, quibusdam illo debitis fugit quae error beatae dolorum? Magnam voluptatem sapiente nobis sit?</p>
        </div>
    </div>
  )
}

export default Owner