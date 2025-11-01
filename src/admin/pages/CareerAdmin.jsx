import React, { useContext, useEffect, useState } from 'react'
import AdminHead from '../Components/AdminHead'
import Footer from '../../components/Footer'
import AdminSideBar from '../Components/AdminSideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faSquareUpRight, faLocationDot, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import AddJob from '../Components/AddJob'
import { getAllApplicationAPI, getAllJobAPI, removeJobsAPI } from '../../services/allAPI'
import { jobContext } from '../../contextAPI/ContextShare'
import SERVERURL from '../../services/serverURL'


function CareerAdmin() {
  const [jobListStatus, setJobListStatus] = useState(true)
  const [listApplicationStatus, setListApplicationStatus] = useState(false)
  const [allJobs, setAllJobs] = useState([])
  const [searchKey, setSearchKey] = useState("")
  const [deleteJobResponse, setDeleteJobResponse] = useState({})
  const { addjobResponse, setAddJobResponse } = useContext(jobContext)
  const [application, setApplication] = useState([])

  // console.log(application);

  // console.log(allJobs);


  useEffect(() => {
    if (jobListStatus == true) {
      getAllJobs()
    }else if(listApplicationStatus==true){
      getApplication()
    }
  }, [searchKey, deleteJobResponse, addjobResponse,listApplicationStatus])

  const getAllJobs = async () => {
    try {
      const result = await getAllJobAPI(searchKey)
      if (result.status == 200) {
        setAllJobs(result.data)
      }
    } catch (err) {
      console.log(err);
    }
  }

  const removeJob = async (id) => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await removeJobsAPI(id, reqHeader)
        console.log(result);

        if (result.status == 200) {
          setDeleteJobResponse(result.data)
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  const getApplication = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      // api call
      const result = await getAllApplicationAPI(reqHeader)
      if (result.status == 200) {
        setApplication(result.data)
      } else {
        console.log(result);
      }
    }
  }
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
                  <div className='flex  justify-center md:justify-between my-5 mx-5 items-center'>
                    <div className='flex w-20 md:w-full'>
                      <input onChange={e => setSearchKey(e.target.value)} type="text" className='p-2 me-2 rounded border border-gray-400 text-black w-100 placeholder-gray-400' placeholder='Job Title' />
                      <button className='md:px-5 px-2 md:py-2 bg-[#327E32] text-white'>Search</button>
                    </div>
                    <div >
                      <AddJob />
                    </div>

                  </div>
                  {/* lists */}

                  {
                    allJobs?.length > 0 ?
                      allJobs.map(job => (
                        <div key={job?._id} className='md:px-10 px-5 md:py-10 mt-5 py-5 border rounded border-gray-300'>
                          <div className='  flex justify-between'>
                            <h1 className=' text-lg md:text-2xl md:mt-3 mt-2 text-gray-500'>{job?.title}</h1>
                            <button type='button' onClick={() => removeJob(job?._id)} className=' text-white rounded bg-red-600 md:px-5 px-3 md:py-3 py-1 hover:bg-white hover:text-red-600 hover:border  hover:border-red-600 '>Delete<FontAwesomeIcon icon={faTrashCan} className='ms-3' /></button>
                          </div>
                          <hr className='  md:w-330 mt-5 text-slate-400' />
                          <div className='mt-5 text-gray-600'>
                            <h1 className='text-l mt-3 text-sky-500'> <FontAwesomeIcon icon={faLocationDot} /> {job?.location}</h1>
                            <h1 className='text-l mt-3'>Job Type : {job?.jobType}</h1>
                            <h1 className='text-l mt-3'>Job Type : {job?.salary}</h1>
                            <h1 className='text-l mt-3'>Qualification : {job?.qualification}</h1>
                            <h1 className='text-l mt-3'>Experience : {job?.experience}</h1>
                            <p className='text-l mt-3 text-justify ' >Description : {job?.description} </p>
                          </div>
                        </div>
                      ))
                      :
                      <div>No jobs added currently</div>
                  }

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
                      {
                        application?.length>0?
                        application.map((item,index)=>(
                          <tr key={item?._id}>
                        <td className='border border-gray-200 p-3 text-center'>{index+1}</td>
                        <td className='border border-gray-200 p-3 text-center'>{item?.jobTitle}</td>
                        <td className='border border-gray-200 p-3 text-center'>{item?.fullname} </td>
                        <td className='border border-gray-200 p-3 text-center'>{item?.qualification}</td>
                        <td className='border border-gray-200 p-3 text-center'>{item?.email}</td>
                        <td className='border border-gray-200 p-3 text-center'>{item?.phone}</td>
                        <td className='border border-gray-200 p-3 text-center'>{item?.coverLetter}</td>
                        <td className='border border-gray-200 p-3 text-center'><Link className='text-blue-600 underline' to={`${SERVERURL}/pdf/${item?.resume}`} target='_blank'>Resume</Link></td>
                      </tr>
                        ))
                        :
                        <p>no application available</p>
                      }
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