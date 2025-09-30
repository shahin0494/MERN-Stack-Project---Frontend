import React, { useState } from 'react'
import AdminHead from '../Components/AdminHead'
import Footer from '../../components/Footer'
import AdminSideBar from '../Components/AdminSideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faUser } from '@fortawesome/free-solid-svg-icons'

function ResourceAdmin() {
  const [bookListStatus, setBookListStatus] = useState(true)
  const [usersListStatus, setUsersListStatus] = useState(false)
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
              <h1 className='text-3xl text-center'>Admin Resources</h1>
            </div>

            {/* tabs */}
            <div className='flex justify-center items-center my-5'>
              <p onClick={() => { setBookListStatus(true); setUsersListStatus(false) }} className={bookListStatus ? 'text-sky-500 p-4 border-neutral-200 border-t border-l border-r rounded cursor-pointer' : "p-4 border border-b border-neutral-300 cursor-pointer"}>Books</p>
              <p onClick={() => { setUsersListStatus(true); setBookListStatus(false) }} className={usersListStatus ? 'text-sky-500 p-4 border-neutral-200 border-t border-l border-r rounded cursor-pointer' : "p-4 border border-b border-neutral-300 cursor-pointer"}>Users</p>
            </div>
            {/* booklist */}
            {
              bookListStatus &&
              <div className="md:grid grid-cols-4 w-full mt-5">
                <div className="p-3">
                  <div className="shadow p-3 rounded">
                    <img width={'100%'} height={'300px'} src="https://s26162.pcdn.co/wp-content/uploads/2018/02/gatsby-original2.jpg" alt="book" />
                    <div className="flex justify-center flex-col items-center ">
                      <p className="text-blue-700 font-bold text-lg">Author</p>
                      <p >Book Title</p>
                      <p>$ 400</p>

                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="shadow p-3 rounded">
                    <img width={'100%'} height={'300px'} src="https://www.papertrue.com/blog/wp-content/uploads/2023/11/461984.jpg" alt="book" />
                    <div className="flex justify-center flex-col items-center ">
                      <p className="text-blue-700 font-bold text-lg">Author</p>
                      <p >Book Title</p>
                      <p>$ 400</p>

                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="shadow p-3 rounded">
                    <img width={'100%'} height={'300px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGh8nYLLj5J3DOWqfY44wkyt2njH8Rwa1u1A&s" alt="book" />
                    <div className="flex justify-center flex-col items-center ">
                      <p className="text-blue-700 font-bold text-lg">Author</p>
                      <p >Book Title</p>
                      <p>$ 400</p>

                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="shadow p-3 rounded">
                    <img width={'100%'} height={'300px'} src="https://s26162.pcdn.co/wp-content/uploads/2021/10/3b47d124002685f2a3c67e47383232c7.jpg" alt="book" />
                    <div className="flex justify-center flex-col items-center ">
                      <p className="text-blue-700 font-bold text-lg">Author</p>
                      <p >Book Title</p>
                      <p>$ 400</p>

                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="shadow p-3 rounded">
                    <img width={'100%'} height={'300px'} src="https://thebooksatchel.com/wp-content/uploads/2020/07/follow-me-to-the-ground.jpg" alt="book" />
                    <div className="flex justify-center flex-col items-center ">
                      <p className="text-blue-700 font-bold text-lg">Author</p>
                      <p >Book Title</p>
                      <p>$ 400</p>

                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="shadow p-3 rounded">
                    <img width={'100%'} height={'300px'} src="https://bcassetcdn.com/public/blog/wp-content/uploads/2021/11/09172447/shadow-and-bone.png" alt="book" />
                    <div className="flex justify-center flex-col items-center ">
                      <p className="text-blue-700 font-bold text-lg">Author</p>
                      <p >Book Title</p>
                      <p>$ 400</p>

                    </div>
                  </div>
                </div>
              </div>
            }

            {/* user list */}
            {
              usersListStatus &&

              <div className="md:grid grid-cols-3 w-full my-5">
                <div className="p-3">
                  <div className="shadow p-3  rounded">
                    <p className='text-red-600 text-lg '>ID : 1834848399219</p>
                    <div className="flex ">
                      <img style={{width:"100px",height:"100px",borderRadius:"50%"}} src="https://tse1.mm.bing.net/th/id/OIP.w-f-qDRUjGt9e_SuPTcfcgHaHw?pid=Api&P=0&h=180" alt="" />
                      <div className='flex flex-col justify-center items-center text-lg ml-6'>
                        <p className='text-sky-500'>Username</p>
                        <p>Email</p>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="shadow p-3  rounded">
                    <p className='text-red-600 text-lg '>ID : 1834848399219</p>
                    <div className="flex ">
                      <img style={{width:"100px",height:"100px",borderRadius:"50%"}} src="https://tse1.mm.bing.net/th/id/OIP.w-f-qDRUjGt9e_SuPTcfcgHaHw?pid=Api&P=0&h=180" alt="" />
                      <div className='flex flex-col justify-center items-center text-lg ml-6'>
                        <p className='text-sky-500'>Username</p>
                        <p>Email</p>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="shadow p-3  rounded">
                    <p className='text-red-600 text-lg '>ID : 1834848399219</p>
                    <div className="flex ">
                      <img style={{width:"100px",height:"100px",borderRadius:"50%"}} src="https://tse1.mm.bing.net/th/id/OIP.w-f-qDRUjGt9e_SuPTcfcgHaHw?pid=Api&P=0&h=180" alt="" />
                      <div className='flex flex-col justify-center items-center text-lg ml-6'>
                        <p className='text-sky-500'>Username</p>
                        <p>Email</p>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="shadow p-3  rounded">
                    <p className='text-red-600 text-lg '>ID : 1834848399219</p>
                    <div className="flex ">
                      <img style={{width:"100px",height:"100px",borderRadius:"50%"}} src="https://tse1.mm.bing.net/th/id/OIP.w-f-qDRUjGt9e_SuPTcfcgHaHw?pid=Api&P=0&h=180" alt="" />
                      <div className='flex flex-col justify-center items-center text-lg ml-6'>
                        <p className='text-sky-500'>Username</p>
                        <p>Email</p>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="shadow p-3  rounded">
                    <p className='text-red-600 text-lg '>ID : 1834848399219</p>
                    <div className="flex ">
                      <img style={{width:"100px",height:"100px",borderRadius:"50%"}} src="https://tse1.mm.bing.net/th/id/OIP.w-f-qDRUjGt9e_SuPTcfcgHaHw?pid=Api&P=0&h=180" alt="" />
                      <div className='flex flex-col justify-center items-center text-lg ml-6'>
                        <p className='text-sky-500'>Username</p>
                        <p>Email</p>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="shadow p-3  rounded">
                    <p className='text-red-600 text-lg '>ID : 1834848399219</p>
                    <div className="flex ">
                      <img style={{width:"100px",height:"100px",borderRadius:"50%"}} src="https://tse1.mm.bing.net/th/id/OIP.w-f-qDRUjGt9e_SuPTcfcgHaHw?pid=Api&P=0&h=180" alt="" />
                      <div className='flex flex-col justify-center items-center text-lg ml-6'>
                        <p className='text-sky-500'>Username</p>
                        <p>Email</p>
                      </div>

                    </div>
                  </div>
                </div>
                
              </div>

            }

          </div>
        </div>


      </>

      <Footer />

    </>
  )
}

export default ResourceAdmin