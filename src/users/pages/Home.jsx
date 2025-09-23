import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <>
      <Header />
      {/* landing */}
      <div className="flex flex-col h-150 justify-center items-center bg-[url(/bg.jpg)] bg-cover bg-center text-white">
        <h1 className=' text-3xl md:text-5xl text-shadow-lg font-bold'>Wonderful Gifts</h1>
        <p className='text-shadow-lg '>Give your family and friends a book !</p>
        <div className='mt-9 w-75  md:w-100 py-2 rounded-3xl ps-3 flex flex-cols px-3 justify-center items-center   bg-white'>
          <input className='w-100 border-none outline-0  h-10 text-black me-2' type="text" placeholder='Search Books' />
          <button>  <FontAwesomeIcon className='text-black' icon={faMagnifyingGlass} /></button>
        </div>

      </div>
      {/* arrival */}
      {/* author */}
      {/* testimony */}
      <Footer />
    </>
  )
}

export default Home