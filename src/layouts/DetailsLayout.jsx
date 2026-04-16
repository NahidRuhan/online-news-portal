import React from 'react'
import Navbar from '../components/Navbar'
import NewsDetailsCard from '../components/NewsDetailsCard'
import RightAside from '../components/homelayout/RightAside'
import { ScrollRestoration } from 'react-router'

const DetailsLayout = () => {
  return (
    <div>
      <header>
        <nav className='w-11/12 mx-auto my-3'>
            <Navbar></Navbar>
        </nav>
      </header>
        <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-20'>
        <div className='col-span-9'>
          <NewsDetailsCard></NewsDetailsCard>  
        </div>
        <div className='col-span-3 sticky top-2 h-fit'><RightAside></RightAside></div>
      </main>
      <ScrollRestoration></ScrollRestoration>
    </div>
  )
}

export default DetailsLayout
