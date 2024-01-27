import React from 'react'
import Navbar from './navbar'
import Footer from './Footer'
function Contact() {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar/>
        <div className='w-[98%] m-auto flex-grow'>
            Contact Page
        </div>
        <Footer/>
    </div>
  )
}

export default Contact