import React from 'react'
import AdminHead from '../Components/AdminHead'
import Footer from '../../components/Footer'
import AdminSideBar from '../Components/AdminSideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faPen, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'

function AdminDashboard() {
  return (
    <>
      <AdminHead />
      <div className='md:grid grid-cols-5 gap-2'>
        <div className='col-span-1'>
          <AdminSideBar />
        </div>
        <div className='col-span-4 p-10'>
          <div className='md:grid grid-cols-3'>
            <div className="md:px-5">
              <div className='bg-sky-800 p-4 flex items-center text-5xl rounded text-white'>
                <FontAwesomeIcon icon={faBook} />
                <div className='text-center ms-10 md:ms-2'>
                  <h1 className='text-xl'>Total number of Books</h1>
                  <h1 className='text-4xl me-30'>100+</h1>
                </div>
              </div>
            </div>
            <div className="md:px-5">
              <div className='bg-emerald-800 p-4 flex items-center text-5xl rounded text-white'>
                <FontAwesomeIcon icon={faUsers} />
                <div className='text-center ms-10 md:ms-4'>
                  <h1 className='text-xl'>Total number of Users</h1>
                  <h1 className='text-4xl  me-30'>100+</h1>
                </div>
              </div>
            </div>
            <div className="md:px-5">
              <div className='bg-amber-800 p-4 flex items-center text-5xl rounded text-white'>
                <FontAwesomeIcon icon={faBook} />
                <div className='text-center ms-10 md:ms-2'>
                  <h1 className='text-xl'>Total number of Employees</h1>
                  <h1 className='text-4xl  me-38'>100+</h1>
                </div>
              </div>
            </div>
          </div>
          {/* chart */}
          <div className='md:grid grid-cols-2 p-5 my-5'>
            <div className='my-5 md:my-0'>Bar Chart</div>
            <div className='my-5 md:my-0'>Pie Chart</div>
          </div>
        </div>
      </div>

      <Footer />

    </>

  )
}

export default AdminDashboard