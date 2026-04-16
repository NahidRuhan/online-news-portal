import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const AuthLayout = () => {
  return (
    <div>
        <nav className='w-11/12 mx-auto my-3'>
            <Navbar></Navbar>
        </nav>
        <main className='w-11/12 mx-auto py-5'>
           <Outlet></Outlet> 
        </main>
        
    </div>
  )
}

export default AuthLayout
