import React from 'react'
import AdminHead from '../Components/AdminHead'
import Footer from '../../components/Footer'
import AdminSideBar from '../Components/AdminSideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faUser } from '@fortawesome/free-solid-svg-icons'

function ResourceAdmin() {
  return (
    <>
    <AdminHead />

      <>
        <div className="md:grid grid-cols-4 ">
          <div className='col-span-1'>
            <AdminSideBar />
          </div>
          <div className='col-span-3'>
            <h1 className='text-start mx-18 my-10 text-7xl font-bold'>Resource Admin</h1> <hr />
            
          </div>
        </div>


      </>

    <Footer/>

    </>
  )
}

export default ResourceAdmin