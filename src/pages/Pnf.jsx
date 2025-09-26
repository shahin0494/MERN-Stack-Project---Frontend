import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div className='min-h-screen w-full md:flex justify-center text-justify items-start px-10 flex-col'>
      <img className='w-100 ' src="https://media.tenor.com/ohDcfwU7ymUAAAAM/mike-wazowski-stare.gif" alt="" />
      <p className="text-9xl  font-semi-bold">Oh no!</p> <br />
      <h1 className='text-5xl'>Looks like you are lost </h1> <br />
      <p className='text-5xl'>The page you are looking for is unavailable</p>
      <Link to={'/'} className='bg-green-400 text-white rounded p-2 my-5' >Back Home</Link>
    </div>
  )
}

export default Pnf