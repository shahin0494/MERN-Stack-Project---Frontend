import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function AllBooks() {

  const [listStatus, setListStatus] = useState(false)

  return (
    <>
      <Header />

      <>
        <div className="flex justify-center flex-col my-5 items-center">
          <h1 className="text-3xl">Collections </h1>
          <div className="flex my-5">
            <input type="text" className="p-2 rounded border border-gray-400 md:w-100 text-black placeholder-gray-700" placeholder='Search by Title' />
            <button className='bg-blue-400 ms-2 rounded w-15 md:w-20'>Search</button>
          </div>

        </div>
        {/* grid */}
        <div className="md:grid grid-cols-4 md:px-20 p-5">
          {/* filter */}
          <div className="col-span-1">
            <div className='flex justify-between'>
              <h1 className='text-2xl font-semibold'>Filters</h1>
              <button onClick={() => setListStatus(!listStatus)} className='text-2xl md:hidden'><FontAwesomeIcon icon={faBars} /></button>
            </div>
            <div className={listStatus ? "block" : "md:block hidden"}>
              <div className='mt-3'>
                <input type="radio" id='literary' name='filter' />
                <label className='ms-3' htmlFor="literary">Literacy Fiction</label>
              </div>
              <div className='mt-3'>
                <input type="radio" id='literary' name='filter' />
                <label className='ms-3' htmlFor="literary">Philosophy</label>
              </div>
              <div className='mt-3'>
                <input type="radio" id='literary' name='filter' />
                <label className='ms-3' htmlFor="literary">Romance </label>
              </div>
              <div className='mt-3'>
                <input type="radio" id='literary' name='filter' />
                <label className='ms-3' htmlFor="literary">Mystery/Thriller</label>
              </div>
              <div className='mt-3'>
                <input type="radio" id='literary' name='filter' />
                <label className='ms-3' htmlFor="literary">Horror</label>
              </div>
              <div className='mt-3'>
                <input type="radio" id='literary' name='filter' />
                <label className='ms-3' htmlFor="literary">Auto Biography</label>
              </div>
              <div className='mt-3'>
                <input type="radio" id='literary' name='filter' />
                <label className='ms-3' htmlFor="literary">Self Help</label>
              </div>
              <div className='mt-3'>
                <input type="radio" id='literary' name='filter' />
                <label className='ms-3' htmlFor="literary">Politics</label>
              </div>
            </div>
          </div>
          {/* books */}
          <div className='shadow p-3 rounded mx-2'>
            <img width={'100%'} style={{ height: '300px' }} src="https://helloartsy.com/wp-content/uploads/kids/school/how-to-draw-a-book/how-to-draw-a-book-step-6.jpg" alt="" />
            <div className='flex justify-center flex-col items-center'>
              <p className='text-blue-400 text-lg'>Author</p>
              <p>Book Title</p>
              <p>$ 50</p>
            </div>
          </div>
          <div className='shadow p-3 rounded mx-2'>
            <img width={'100%'} style={{ height: '300px' }} src="https://helloartsy.com/wp-content/uploads/kids/school/how-to-draw-a-book/how-to-draw-a-book-step-6.jpg" alt="" />
            <div className='flex justify-center flex-col items-center'>
              <p className='text-blue-400 text-lg'>Author</p>
              <p>Book Title</p>
              <p>$ 50</p>
            </div>
          </div>
          <div className='shadow p-3 rounded mx-2'>
            <img width={'100%'} style={{ height: '300px' }} src="https://helloartsy.com/wp-content/uploads/kids/school/how-to-draw-a-book/how-to-draw-a-book-step-6.jpg" alt="" />
            <div className='flex justify-center flex-col items-center'>
              <p className='text-blue-400 text-lg'>Author</p>
              <p>Book Title</p>
              <p>$ 50</p>
            </div>
          </div>
        </div>
      </>

      <Footer />
    </>
  )
}

export default AllBooks