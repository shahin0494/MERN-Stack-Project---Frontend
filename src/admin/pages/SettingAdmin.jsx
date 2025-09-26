import React from 'react'
import AdminHead from '../Components/AdminHead'
import Footer from '../../components/Footer'
import AdminSideBar from '../Components/AdminSideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faUser } from '@fortawesome/free-solid-svg-icons'

function SettingAdmin() {
  return (
    <>

      <AdminHead />

      <>
        <div className="md:grid grid-cols-4 ">
          <div className='col-span-1'>
            <AdminSideBar />
          </div>
          <div className='col-span-3'>
            <h1 className='text-start mx-18 my-10 text-7xl font-bold'>Settings</h1> <hr />
            <div className='md:grid grid-cols-2 md:px-15 md:p-10 gap-10 mx-4'>
              {/* content lorem  */}
              <div className=''>
                <p className='text-justify md:my-0 my-3 md:mb-0 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis id maxime quia asperiores in cupiditate voluptatum quisquam nemo vitae odio, facilis aperiam. Ipsum incidunt labore asperiores! Blanditiis soluta fuga aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque, facilis?</p>
                <p className='text-justify md:my-0 my-3 md:mb-0 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis id maxime quia asperiores in cupiditate voluptatum quisquam nemo vitae odio, facilis aperiam. Ipsum incidunt labore asperiores! Blanditiis soluta fuga aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque, facilis?</p>
                <p className='text-justify md:my-0 my-3 md:mb-0 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis id maxime quia asperiores in cupiditate voluptatum quisquam nemo vitae odio, facilis aperiam. Ipsum incidunt labore asperiores! Blanditiis soluta fuga aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque, facilis?</p>
                <p className='text-justify my-3 md:mb-0 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis id maxime quia asperiores in cupiditate voluptatum quisquam nemo vitae odio, facilis aperiam. Ipsum incidunt labore asperiores! Blanditiis soluta fuga aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque, facilis?</p>
              </div>
              {/* form link */}


              <div className='bg-slate-200 md:px-10 md:py-5 p-3 mb-5 rounded '>

                <div className='flex items-center relative flex-col '>
                  <label htmlFor="adminPic">  <img className='border border-slate-400 ' src='https://static.vecteezy.com/system/resources/previews/013/716/222/non_2x/coin-of-alexander-the-great-vintage-illustration-free-vector.jpg' alt='user admin logo' style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                    <FontAwesomeIcon className='bg-amber-400 rounded absolute bottom-0 ml-17  p-1' icon={faPen} />
                  </label>
                  <input type="file" name='' id='adminPic' className='hidden' />
                </div>
                <p className='my-2 text-center'>User Name</p>
                <form>
                  <input type="text" placeholder='User Name' className='px-3 py-2 my-2 w-full bg-white rounded' />

                  <input type="password" placeholder='Password' className='px-3 py-2 my-2 w-full bg-white rounded' />
                  <input type="password" placeholder='Confirm Password' className='px-3 py-2 my-2 w-full bg-white rounded' />

                </form>

                <div className='flex justify-between my-5'>
                  <button className='md:px-18 md:py-4 px-9 py-2 mr-2 rounded bg-amber-500 text-white'>Reset</button>
                  <button className='md:px-18 px-9 py-2 rounded bg-[#295829] text-white'>Update</button>
                </div>

              </div>
            </div>
          </div>
        </div>


      </>

      <Footer />

    </>
  )
}

export default SettingAdmin