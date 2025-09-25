import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div className='min-h-screen w-full md:flex justify-center items-center flex-col'>
      <img className='w-100' src="https://cdnl.iconscout.com/lottie/premium/thumb/404-error-animation-gif-download-4699349.gif" alt="" />
      <p className="text-3xl  font-semi-bold">Oh no</p>
      <h1>Looks like you are lost </h1>
      <p>The page you are looking for is unavailable</p>
      <Link to={'/'} className='bg-blue-400 text-white rounded p-2 my-5' >Back Home</Link>
    </div>
  )
}

export default Pnf