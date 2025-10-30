import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareUpRight, faLocationDot, faXmark, faL } from '@fortawesome/free-solid-svg-icons'

function AddJob() {
  const [modale,setModale] = useState(false)
  return (
    <div>
       <button className='md:px-5  px-3 py-2 flex  bg-blue-700 hover:bg-white border border-blue-500 hover:text-blue-500 font-bold text-white' onClick={()=>setModale(true)} >AddJOb</button>
          {
            modale &&
            <div className="relative z-10  "  >
            <div className='bg-gray-500/75 p-3 fixed inset-0 transition-opacity' >
              <div className="flex h-full justify-center items-center md:min-h-screen">
                <div className='bg-white rounded-2xl ' style={{ width: '400px' }}>
                  <div className='bg-black text-white p-3 flex justify-between w-full'>
                    <h3 className='font-bold'>Applicatin Form</h3>
                    <FontAwesomeIcon className='bg-white text-black p-1 rounded' icon={faXmark} onClick={() => setModale(false)} />
                  </div>
                  <div className='ml-5 my-5'>
                    <form action="" className='p-3'>
                      
                        <input
                          type="text"
                          placeholder="Job Title"
                          className="px-3 py-2 my-2 w-full border  border-gray-400 bg-white rounded"
                        />
                        <input
                          type="text"
                          placeholder="Location"
                          className="px-3 py-2 my-2 w-full border  border-gray-400  bg-white rounded"
                        />
                   
                     
                        <input
                          type="text"
                          placeholder="Job Type"
                          className="px-3 py-2 my-2 w-full border border-gray-400 bg-white rounded"
                        />
                        <input
                          type="text"
                          placeholder="Salary"
                          className="px-3 py-2 my-2 w-full border  border-gray-400  bg-white rounded"
                        />
                      
                       <input
                          type="text"
                          placeholder="Qualification"
                          className="px-3 py-2 my-2 w-full border  border-gray-400  bg-white rounded"
                        />
                         <input
                          type="text"
                          placeholder="Experience"
                          className="px-3  py-2 my-2 w-full border  border-gray-400  bg-white rounded"
                        />
                      <div className=' my-3'>
                        <textarea
                          placeholder="Cover Letter"
                          className="my-2 w-full h-25 px-3 py-2  border  border-gray-400  bg-white rounded"
                        ></textarea>
                        </div>

                    


                    </form>

                  </div>
                  <div className='bg-gray-400 p-2 w-full flex justify-end'>
                    <button className="py-2 px-3 rounded bg-black text-white">Reset</button>
                       <button className="py-2 px-3 rounded mx-2 bg-blue-600 text-white">Add</button>

                  </div>

                </div>
              </div>
            </div>
          </div>
          }
    </div>
  )
}

export default AddJob