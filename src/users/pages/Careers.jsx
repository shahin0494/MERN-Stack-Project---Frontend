import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Careers() {
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
            <button className=' text-white rounded bg-sky-600 md:px-5 px-3 md:py-3 py-1'>Apply now <FontAwesomeIcon icon={faArrowRightFromBracket} className='ms-3' /></button>
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
            <button className=' text-white rounded bg-sky-600 md:px-5 px-3 md:py-3 py-1'>Apply now <FontAwesomeIcon icon={faArrowRightFromBracket} className='ms-3' /></button>
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
            <button className=' text-white rounded bg-sky-600 md:px-5 px-3 md:py-3 py-1'>Apply now <FontAwesomeIcon icon={faArrowRightFromBracket} className='ms-3' /></button>
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
      <Footer />
    </>
  )
}

export default Careers