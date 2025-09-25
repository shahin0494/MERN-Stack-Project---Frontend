import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faBackward } from '@fortawesome/free-solid-svg-icons'


function ViewBook() {
  return (
    <>
      <Header />
      <div className='md:m-10 m-5'>
        <div className="border p-5 border-gray-200">
          <div className="md:grid grid-cols-4 gap-x-10">
            <div className="col-span-1">
              <img className='w-full' src="/book.jpg" alt="" />
            </div>
            <div className='col-span-3'>
              <div className="flex justify-between">
                <h1 className='text-xl '>Title</h1>
                <button className='text-gray-400'><FontAwesomeIcon icon={faEye} /></button>
              </div>
              <p className='my-3 text-cyan-600 '>- Author</p>
              <div className="md:grid grid-cols-3 gap-5 my-10">
                <p className='font-semibold'>Publisher : Demo</p>
                <p className='font-semibold'>Langiage : Demo</p>
                <p className='font-semibold'>No. of Pages : Demo</p>
                <p className='font-semibold'>Seller Mail : Demo</p>
                <p className='font-semibold'>Real Price : Demo</p>
                <p className='font-semibold'>ISBN : Demo</p>
              </div>
              <div className='md:my-10 my-4'>
                <p className='font-semibold text-lg'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi doloribus in quam minima explicabo repellendus, illum consectetur debitis reiciendis modi, ex tempore dolores magnam asperiores quasi quisquam vel similique possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias voluptas inventore dolor esse debitis at aut rem architecto dignissimos. Aperiam officia vel totam saepe praesentium laboriosam, eius obcaecati quasi?
                </p>
              </div>
              <div className='flex justify-end'>
                <button className='bg-cyan-500 text-white p-2 rounded'><FontAwesomeIcon icon={faBackward} className='me-3'/>Back</button>
                <button className='bg-lime-600 text-white p-2 ms-5 rounded'>Buy $ 99</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ViewBook