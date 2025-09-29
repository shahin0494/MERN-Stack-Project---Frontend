import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faSquareUpRight, faLocationDot, faXmark } from '@fortawesome/free-solid-svg-icons'

function Careers() {
  const [modalStatus, setModalStatus] = useState(false)
  return (
    <>
      <Header />
      {/* career landing */}
      <div className='mt-2 text-center py-5 px-10'>
        <h1 className='text-center mb-5 text-3xl'>Careers</h1>
        <p className='text-justify text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et nulla architecto error, iste fuga aliquid minus maiores voluptatum dolores deleniti ullam minima, hic illo fugit unde odio exercitationem iure quaerat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum ipsam dolorum excepturi assumenda aliquam non quia optio, exercitationem voluptatum aliquid corrupti soluta sit doloribus iste nulla repellat iure velit fuga? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ad ducimus fugiat nostrum sit, ea iure amet in provident. Aut tenetur vel odit nulla sint culpa quaerat aspernatur ex totam?</p>
      </div>
      {/* job openings */}
      <div className='py-5 flex flex-col px-10'>
        <h1 className='text-xl'>Current Openings</h1> <hr className='w-38.5 mt-2' />
        <div className="flex items-center justify-center my-5">
          <input type="text" className="p-2 rounded border border-gray-400 w-100 text-black placeholder-gray-700" placeholder='Search by Title' />
          <button className='bg-cyan-500 ms-2 text-white rounded w-25 md:w-20 h-10.5'>Search</button>
        </div>
        {/* job details div */}
        <div className='md:px-10 px-5 md:py-10 mt-5 py-5 border rounded border-gray-300'>
          <div className='  flex justify-between'>
            <h1 className=' text-lg md:text-2xl md:mt-3 mt-2 text-gray-500'>Job Title</h1>
            <button onClick={()=>setModalStatus(true)} className=' text-white rounded bg-sky-600 md:px-5 px-3 md:py-3 py-1 hover:bg-white hover:text-sky-600 hover:border  hover:border-sky-600 '>Apply now <FontAwesomeIcon icon={faArrowRightFromBracket} className='ms-3' /></button>
          </div>
          <hr className='  md:w-330 mt-5 text-slate-400' />
          <div className='mt-5 text-gray-600'>
            <h1 className='text-l mt-3'> <FontAwesomeIcon icon={faLocationDot} /> Location</h1>
            <h1 className='text-l mt-3'>Job Type : Senior Level</h1>
            <h1 className='text-l mt-3'>Qualification : M-tech,B-tech,MCA</h1>
            <h1 className='text-l mt-3'>Experience : 5 - 7 Years</h1>
            <p className='text-l mt-3 text-justify ' >Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum laboriosam tempora officia ipsam excepturi placeat corporis, itaque numquam dolore accusantium perferendis exercitationem laudantium odio at! Assumenda sunt ea cum. </p>
          </div>
        </div>
        <div className='md:px-10 px-5 md:py-10 mt-5 py-5 border rounded border-gray-300'>
          <div className='  flex justify-between'>
            <h1 className=' text-lg md:text-2xl md:mt-3 mt-2 text-gray-500'>Job Title</h1>
            <button onClick={()=>setModalStatus(true)} className=' text-white rounded bg-sky-600 md:px-5 px-3 md:py-3 py-1 hover:bg-white hover:text-sky-600 hover:border  hover:border-sky-600 '>Apply now <FontAwesomeIcon icon={faArrowRightFromBracket} className='ms-3' /></button>
          </div>
          <hr className='  md:w-330 mt-5 text-slate-400' />
          <div className='mt-5 text-gray-600'>
            <h1 className='text-l mt-3'> <FontAwesomeIcon icon={faLocationDot} /> Location</h1>
            <h1 className='text-l mt-3'>Job Type : Senior Level</h1>
            <h1 className='text-l mt-3'>Qualification : M-tech,B-tech,MCA</h1>
            <h1 className='text-l mt-3'>Experience : 5 - 7 Years</h1>
            <p className='text-l mt-3 text-justify ' >Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum laboriosam tempora officia ipsam excepturi placeat corporis, itaque numquam dolore accusantium perferendis exercitationem laudantium odio at! Assumenda sunt ea cum. </p>
          </div>
        </div>
        <div className='md:px-10 px-5 md:py-10 mt-5 py-5 border rounded border-gray-300'>
          <div className='  flex justify-between'>
            <h1 className=' text-lg md:text-2xl md:mt-3 mt-2 text-gray-500'>Job Title</h1>
            <button onClick={()=>setModalStatus(true)} className=' text-white rounded bg-sky-600 md:px-5 px-3 md:py-3 py-1 hover:bg-white hover:text-sky-600 hover:border  hover:border-sky-600 '>Apply now <FontAwesomeIcon icon={faArrowRightFromBracket} className='ms-3' /></button>
          </div>
          <hr className='  md:w-330 mt-5 text-slate-400' />
          <div className='mt-5 text-gray-600'>
            <h1 className='text-l mt-3'> <FontAwesomeIcon icon={faLocationDot} /> Location</h1>
            <h1 className='text-l mt-3'>Job Type : Senior Level</h1>
            <h1 className='text-l mt-3'>Qualification : M-tech,B-tech,MCA</h1>
            <h1 className='text-l mt-3'>Experience : 5 - 7 Years</h1>
            <p className='text-l mt-3 text-justify ' >Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum laboriosam tempora officia ipsam excepturi placeat corporis, itaque numquam dolore accusantium perferendis exercitationem laudantium odio at! Assumenda sunt ea cum. </p>
          </div>
        </div>
      </div>

      {/* modal  */}
      {modalStatus &&
        <div className="relative z-10  "  >
          <div className='bg-gray-500/75 p-3 fixed inset-0 transition-opacity' >
            <div className="flex h-full justify-center items-center md:min-h-screen">
              <div className='bg-white rounded' style={{ width: '900px' }}>
                <div className='bg-black rounded text-white p-3 flex justify-between w-full'>
                  <h3 className='font-bold'>Applicatin Form</h3>
                  <FontAwesomeIcon className='bg-white text-black p-1 rounded' icon={faXmark} onClick={() => setModalStatus(false)} />
                </div>
                <div className='ml-5 my-5'>
                  <form action="">
                    <div className='flex'>
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="px-3 py-2 my-2 w-full border mx-2 border-gray-400 bg-white rounded"
                      />
                      <input
                        type="text"
                        placeholder="Qualification"
                        className="px-3 py-2 my-2 w-full border  border-gray-400 mx-2 bg-white rounded"
                      />
                    </div>
                    <div className='flex'>
                      <input
                        type="email "
                        placeholder="Email"
                        className="px-3 py-2 my-2 w-full border mx-2 border-gray-400 bg-white rounded"
                      />
                      <input
                        type="number"
                        placeholder="Phone Number"
                        className="px-3 py-2 my-2 w-full border  border-gray-400 mx-2 bg-white rounded"
                      />
                    </div>
                    <div className='mx-2 my-3'>
                      <textarea
                        placeholder="Cover Letter"
                        className="my-2 w-full h-25 px-3 py-2  border  border-gray-400  bg-white rounded"
                      ></textarea>
                    </div>

                    <div className='mx-3'>
                      <input
                        type="file"
                        placeholder="Phone Number"
                        className="px-3 py-2 my-2 w-full border  border-gray-400 mx-2 bg-white rounded"
                      />
                    </div>
                  </form>

                  {/* modal footer */}
                  <div className='bg-neutral-200 p-2 w-215 mt-4 flex justify-end'>
                    <button className='py-2 px-3 rounded bg-neutral-800 text-white'>Reset</button>
                    <button className='py-2 px-3 rounded mx-2 bg-sky-600 text-white'>Submit</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>}

        

      <Footer />
    </>
  )
}

export default Careers