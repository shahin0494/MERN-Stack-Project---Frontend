import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareUpRight, faLocationDot, faXmark, faL } from '@fortawesome/free-solid-svg-icons'
import { toast, ToastContainer } from 'react-toastify'
import { addJobsAPI } from '../../services/allAPI'
import { jobContext } from '../../contextAPI/ContextShare'

function AddJob() {

  const {addjobResponse, setAddJobResponse} = useContext(jobContext)
  const [modale, setModale] = useState(false)
  const [newJob, setNewJob] = useState({ title: "", location: "", jobType: "", salary: "", qualification: "", experience: "", description: "" })
  
  const handleReset = () => {
    setNewJob({
      title: "", location: "", jobType: "", salary: "", qualification: "", experience: "", description: ""
    })
  }

  const handleAddJob = async () => {
    const token = sessionStorage.getItem("token")
    const { title, location, jobType, salary, qualification, experience, description } = newJob
    if (!title || !location || !jobType || !salary || !qualification || !experience || !description) {
      toast.info("Please fill the form completely")
    } else if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      // api call
      try {
        const result = await addJobsAPI(newJob, reqHeader)
        if (result.status == 200) {
          // alert job added
          toast.success("jon added successfully")
          // close modal
          setModale(false)
          // reset data
          handleReset()
          // share data to contexf
          setAddJobResponse(result.data)
        }else{
          toast.errpr("something went wrong")
        }
      } catch (err) {
        console.log(err);
        toast.warning("something went wrong")
      }
    } else {
      toast.warning("something wen wrong")
    }
  }

  return (
    <div>
      <button className='md:px-5  px-3 py-2 flex  bg-blue-700 hover:bg-white border border-blue-500 hover:text-blue-500 font-bold text-white' onClick={() => setModale(true)} >AddJOb</button>
      {
        modale &&
        <div className="relative z-10  "  >
          <div className='bg-gray-500/75 p-3 fixed inset-0 transition-opacity' >
            <div className="flex h-full justify-center items-center md:min-h-screen">
              <div className='bg-white rounded-2xl ' style={{ width: '400px' }}>
                <div className='bg-black text-white p-3 flex rounded justify-between w-full'>
                  <h3 className='font-bold'>Applicatin Form</h3>
                  <FontAwesomeIcon className=' text-white p-1 rounded' icon={faXmark} onClick={() => setModale(false)} />
                </div>
                <div className='my-5'>
                  <form action="" className='p-3'>

                    <input
                      value={newJob.title}
                      onChange={e => setNewJob({ ...newJob, title: e.target.value })}
                      type="text"
                      placeholder="Job Title"
                      className="px-3 py-2 my-2 w-full border  border-gray-400 bg-white rounded"
                    />
                    <input
                      value={newJob.location}
                      onChange={e => setNewJob({ ...newJob, location: e.target.value })}
                      type="text"
                      placeholder="Location"
                      className="px-3 py-2 my-2 w-full border  border-gray-400  bg-white rounded"
                    />


                    <input
                      value={newJob.jobType}
                      onChange={e => setNewJob({ ...newJob, jobType: e.target.value })}
                      type="text"
                      placeholder="Job Type"
                      className="px-3 py-2 my-2 w-full border border-gray-400 bg-white rounded"
                    />
                    <input
                      value={newJob.salary}
                      onChange={e => setNewJob({ ...newJob, salary: e.target.value })}
                      type="text"
                      placeholder="Salary"
                      className="px-3 py-2 my-2 w-full border  border-gray-400  bg-white rounded"
                    />

                    <input
                      value={newJob.qualification}
                      onChange={e => setNewJob({ ...newJob, qualification: e.target.value })}
                      type="text"
                      placeholder="Qualification"
                      className="px-2 py-2 my-2 w-full border  border-gray-400  bg-white rounded"
                    />
                    <input
                      value={newJob.experience}
                      onChange={e => setNewJob({ ...newJob, experience: e.target.value })}
                      type="text"
                      placeholder="Experience"
                      className="px-3  py-2 my-2 w-full border  border-gray-400  bg-white rounded"
                    />

                    <div className=' my-3'>
                      <textarea
                        value={newJob.description}
                        onChange={e => setNewJob({ ...newJob, description: e.target.value })}
                        placeholder="Cover Letter"
                        className="my-2 w-full h-25 px-3 py-2  border  border-gray-400  bg-white rounded"
                      ></textarea>
                    </div>

                  </form>
                  <div className=' w-full flex justify-end'>
                    <button onClick={handleReset} className="py-2 ms-1 px-3 rounded bg-red-600 w-fit text-white">Reset</button>
                    <button onClick={handleAddJob} className="py-2 px-3 rounded mx-2 bg-green-600 w-fit text-white">Add</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      // transition={Slide}
      />
    </div>
  )
}

export default AddJob