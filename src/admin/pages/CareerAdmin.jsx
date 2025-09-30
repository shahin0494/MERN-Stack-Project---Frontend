import React, { useState } from 'react'
import AdminHead from '../Components/AdminHead'
import Footer from '../../components/Footer'
import AdminSideBar from '../Components/AdminSideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faSquareUpRight, faLocationDot, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


function CareerAdmin() {
  const [jobListStatus, setJobListStatus] = useState(true)
  const [listApplicationStatus, setListApplicationStatus] = useState(false)
  return (
    <>
      <AdminHead />

      <>
        <div className="md:grid grid-cols-5 gap-2 ">
          <div className='col-span-1'>
            <AdminSideBar />
          </div>
          <div className='col-span-4'>
            <div className='p-10'>
              <h1 className='text-3xl text-center'>Careers</h1>
            </div>

            {/* tabs */}
            <div className='flex justify-center items-center my-5'>
              <p onClick={() => { setJobListStatus(true); setListApplicationStatus(false) }} className={jobListStatus ? 'text-sky-500 p-4 border-neutral-200 border-t border-l border-r rounded cursor-pointer' : "p-4 border border-b border-neutral-300 cursor-pointer"}>Job Post</p>
              <p onClick={() => { setListApplicationStatus(true); setJobListStatus(false) }} className={listApplicationStatus ? 'text-sky-500 p-4 border-neutral-200 border-t border-l border-r rounded cursor-pointer' : "p-4 border border-b border-neutral-300 cursor-pointer"}>Applications</p>
            </div>
            {/* job lists */}
            {
              jobListStatus &&
              <div>
                <div className='flex  justify-center md:justify-between my-5 items-center'>
                  <div className='flex w-20 md:w-full'>
                    <input type="text" className='p-2 me-2 rounded border border-gray-400 text-black w-100 placeholder-gray-400' placeholder='Job Title' />
                    <button className='md:px-5 px-2 md:py-2 bg-[#327E32] text-white'>Search</button>
                  </div>
                  <div>
                    <button className='md:px-5 px-3 py-2 flex bg-blue-700 hover:bg-white border border-blue-500 hover:text-blue-500 font-bold text-white'>Apply <FontAwesomeIcon icon={faPlus} className='text-xl' /></button>
                  </div>

                </div>
                {/* lists */}

                <div className='md:px-10 px-5 md:py-10 mt-5 py-5 border rounded border-gray-300'>
                  <div className='  flex justify-between'>
                    <h1 className=' text-lg md:text-2xl md:mt-3 mt-2 text-gray-500'>Job Title</h1>
                    <button className=' text-white rounded bg-red-600 md:px-5 px-3 md:py-3 py-1 hover:bg-white hover:text-sky-600 hover:border  hover:border-sky-600 '>Delete<FontAwesomeIcon icon={faTrashCan} className='ms-3' /></button>
                  </div>
                  <hr className='  md:w-330 mt-5 text-slate-400' />
                  <div className='mt-5 text-gray-600'>
                    <h1 className='text-l mt-3 text-sky-500'> <FontAwesomeIcon icon={faLocationDot} /> Kochi</h1>
                    <h1 className='text-l mt-3'>Job Type : Senior Level</h1>
                    <h1 className='text-l mt-3'>Qualification : M-tech,B-tech,MCA</h1>
                    <h1 className='text-l mt-3'>Experience : 5 - 7 Years</h1>
                    <p className='text-l mt-3 text-justify ' >Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum laboriosam tempora officia ipsam excepturi placeat corporis, itaque numquam dolore accusantium perferendis exercitationem laudantium odio at! Assumenda sunt ea cum. </p>
                  </div>
                </div>
                <div className='md:px-10 px-5 md:py-10 mt-5 py-5 border rounded border-gray-300'>
                  <div className='  flex justify-between'>
                    <h1 className=' text-lg md:text-2xl md:mt-3 mt-2 text-gray-500'>Job Title</h1>
                    <button className=' text-white rounded bg-red-600 md:px-5 px-3 md:py-3 py-1 hover:bg-white hover:text-sky-600 hover:border  hover:border-sky-600 '>Delete<FontAwesomeIcon icon={faTrashCan} className='ms-3' /></button>
                  </div>
                  <hr className='  md:w-330 mt-5 text-slate-400' />
                  <div className='mt-5 text-gray-600'>
                    <h1 className='text-l mt-3 text-sky-500'> <FontAwesomeIcon icon={faLocationDot} /> Kochi</h1>
                    <h1 className='text-l mt-3'>Job Type : Senior Level</h1>
                    <h1 className='text-l mt-3'>Qualification : M-tech,B-tech,MCA</h1>
                    <h1 className='text-l mt-3'>Experience : 5 - 7 Years</h1>
                    <p className='text-l mt-3 text-justify ' >Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum laboriosam tempora officia ipsam excepturi placeat corporis, itaque numquam dolore accusantium perferendis exercitationem laudantium odio at! Assumenda sunt ea cum. </p>
                  </div>
                </div>
                <div className='md:px-10 px-5 md:py-10 mt-5 py-5 border rounded mb-5 border-gray-300'>
                  <div className='  flex justify-between'>
                    <h1 className=' text-lg md:text-2xl md:mt-3 mt-2 text-gray-500'>Job Title</h1>
                    <button className=' text-white rounded bg-red-600 md:px-5 px-3 md:py-3 py-1 hover:bg-white hover:text-sky-600 hover:border  hover:border-sky-600 '>Delete<FontAwesomeIcon icon={faTrashCan} className='ms-3' /></button>
                  </div>
                  <hr className='  md:w-330 mt-5 text-slate-400' />
                  <div className='mt-5 text-gray-600'>
                    <h1 className='text-l mt-3 text-sky-500'> <FontAwesomeIcon icon={faLocationDot} /> Kochi</h1>
                    <h1 className='text-l mt-3'>Job Type : Senior Level</h1>
                    <h1 className='text-l mt-3'>Qualification : M-tech,B-tech,MCA</h1>
                    <h1 className='text-l mt-3'>Experience : 5 - 7 Years</h1>
                    <p className='text-l mt-3 text-justify ' >Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum laboriosam tempora officia ipsam excepturi placeat corporis, itaque numquam dolore accusantium perferendis exercitationem laudantium odio at! Assumenda sunt ea cum. </p>
                  </div>
                </div>
              </div>
            }

            {/* user list */}
            {
              listApplicationStatus &&
              <div className='p-10 overflow-x-hidden'>
                <table className='my-3 w-full shadow'>
                  <thead>
                    <tr>
                      <th className='p-3 bg-sky-700 text-white border border-gray-500 '>SL NO.</th>
                      <th className='p-3 bg-sky-700 text-white border border-gray-500 '>Job Title</th>
                      <th className='p-3 bg-sky-700 text-white border border-gray-500 '>Name</th>
                      <th className='p-3 bg-sky-700 text-white border border-gray-500 '>Qualification</th>
                      <th className='p-3 bg-sky-700 text-white border border-gray-500 '>Email</th>
                      <th className='p-3 bg-sky-700 text-white border border-gray-500 '>Phone</th>
                      <th className='p-3 bg-sky-700 text-white border border-gray-500 '>Cover</th>
                      <th className='p-3 bg-sky-700 text-white border border-gray-500 '>Resume</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-gray-200 p-3 text-center'>1</td>
                      <td className='border border-gray-200 p-3 text-center'>Front-End Developer</td>
                      <td className='border border-gray-200 p-3 text-center'>John Wick</td>
                      <td className='border border-gray-200 p-3 text-center'>BMCFA</td>
                      <td className='border border-gray-200 p-3 text-center'>babayaga@gmail.com</td>
                      <td className='border border-gray-200 p-3 text-center'>99442290194</td>
                      <td className='border border-gray-200 p-3 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi deleniti earum atque voluptas fugit, delectus perferendis rerum dolorem vel a nisi reprehenderit! Incidunt, at quod nihil quae distinctio cumque. Aut.</td>
                      <td className='border border-gray-200 p-3 text-center'><Link className='text-blue-600 underline'>Resume</Link></td>
                    </tr>
                    <tr>
                      <td className='border border-gray-200 p-3 text-center'>2</td>
                      <td className='border border-gray-200 p-3 text-center'>Back-End Developer</td>
                      <td className='border border-gray-200 p-3 text-center'>John Wick</td>
                      <td className='border border-gray-200 p-3 text-center'>BMCFA</td>
                      <td className='border border-gray-200 p-3 text-center'>babayaga@gmail.com</td>
                      <td className='border border-gray-200 p-3 text-center'>99442290194</td>
                      <td className='border border-gray-200 p-3 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi deleniti earum atque voluptas fugit, delectus perferendis rerum dolorem vel a nisi reprehenderit! Incidunt, at quod nihil quae distinctio cumque. Aut.</td>
                      <td className='border border-gray-200 p-3 text-center'><Link className='text-blue-600 underline'>Resume</Link></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            }

          </div>
        </div>
      </>

      <Footer />

    </>
  )
}

export default CareerAdmin