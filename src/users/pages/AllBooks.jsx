import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'


function AllBooks() {
  return (
    <>
      <Header />

      <>
        <div className="flex justify-center flex-col my-5 items-center">
          <h1 className="text-3xl">Collections </h1>
          <div className="flex my-5">
            <input type="text" className="p-2 rounded border border-gray-400 w-100 text-black placeholder-gray-700" placeholder='Search by Title' />
            <button className='bg-blue-400 ms-2 rounded w-20'>Search</button>
          </div>

        </div>
        {/* grid */}
        <div className="grid grid-cols-3 md:px-40 p-5">
          <div className="col-span-1">
            <h1 className='text-xl font-semibold'>Filters</h1> < hr className='w-13'/>
            <div className='mt-3'>
              <input type="radio" id='literary' name='filter' />
              <label className='ms-3'  htmlFor="literary">Literacy Fiction</label>
            </div>
          </div>
        </div>
      </>

      <Footer />
    </>
  )
}

export default AllBooks