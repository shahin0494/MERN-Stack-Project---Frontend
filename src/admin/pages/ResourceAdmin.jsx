import React, { useEffect, useState } from 'react'
import AdminHead from '../Components/AdminHead'
import Footer from '../../components/Footer'
import AdminSideBar from '../Components/AdminSideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPen, faUser } from '@fortawesome/free-solid-svg-icons'
import { getAllUsersAPI, listAllBookAdminsAPI, updateBookStatusAPI } from '../../services/allAPI'
import SERVERURL from '../../services/serverURL'
function ResourceAdmin() {
  const [bookListStatus, setBookListStatus] = useState(true)
  const [usersListStatus, setUsersListStatus] = useState(false)
  const [allUsers, setAllUsers] = useState([])
  const [userBooks, setUserBooks] = useState([])
  const [updateBookStatus, setUpdateBookStatus] = useState([])
  // const [token, setToken] = useState("")
  console.log(userBooks);


  console.log(allUsers);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      // setToken(token)
      if (bookListStatus == true) {
        getAllBooks(token)
      } else if (usersListStatus == true) {
        getAllUsers(token)
      } else {
        console.log("something went wrong");
      }
    }
  }, [usersListStatus, updateBookStatus])

  const getAllUsers = async (userToken) => {
    const reqHeader = {
      "Authorization": `Bearer ${userToken}`
    }
    try {
      const result = await getAllUsersAPI(reqHeader)
      if (result.status == 200) {
        setAllUsers(result.data)
      } else {
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const getAllBooks = async (userToken) => {
    const reqHeader = {
      "Authorization": `Bearer ${userToken}`
    }

    try {
      const result = await listAllBookAdminsAPI(reqHeader)
      setUserBooks(result.data)
    } catch (error) {
      console.log(error);

    }
  }

  const approveBook = async (book) => {
    const userToken = sessionStorage.getItem("token")
    const reqHeader = {
      "Authorization": `Bearer ${userToken}`
    }
    try {
      const result = await updateBookStatusAPI(book,reqHeader)
      setUpdateBookStatus(result.data)
    } catch (err) {
      console.log(err);
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
              <div className="md:grid grid-cols-4 w-full mt-5 ">
                {
                  userBooks?.length > 0 ?
                    userBooks?.map((item, index) => (

                      <div key={index} className="p-3  ">
                        <div className="shadow-lg bg-neutral-100/50 p-3 h-fit rounded ">
                          <img width={'100%'} height={'300px'} className='rounded-xl' src={item?.imageUrl} alt="book" />
                          <div className="flex justify-center flex-col items-start ">
                            <p className="text-blue-700 mt-3 font-bold text-lg">{item?.author}      <hr className='text-neutral-300 mb-2' /></p>
                            <p >{item?.title}</p>
                            <p className='text-lg text-neutral-500/90'>$ {item?.discountPrice}</p>
                            {
                              item?.status == "pending" &&
                              <button onClick={()=>approveBook(item)} className='p-3 mt-2 rounded bg-green-700 w-full text-white'>Approve</button>
                            }
                            {
                              item?.status == "approved" &&
                              <div className='flex justify-start  p-3 border border-green-400 rounded'>
                                <img width={"20px"} height={"40px"} src="https://cdn-icons-png.flaticon.com/512/62/62025.png" alt="" />
                              </div>
                            }
                          </div>
                        </div>
                      </div>
                    ))
                    :
                    <div>no books </div>
                }
              </div>
            }

            {/* user list */}
            {
              usersListStatus &&
              <div className="md:grid grid-cols-3 w-full my-5">

                {
                  allUsers.length > 0 ?
                    allUsers.map((user, index) => (
                      <div key={index} className="p-3">
                        <div className="shadow p-3  bg-neutral-200 rounded">
                          <p className='text-red-600 text-lg '>ID : {user?._id}</p>
                          <div className="flex ">
                            <img style={{ width: "100px", height: "100px", borderRadius: "50%" }} src={user?.profile ? `${SERVERURL}/uploads/${user?.profile}` : "https://tse1.mm.bing.net/th/id/OIP.w-f-qDRUjGt9e_SuPTcfcgHaHw?pid=Api&P=0&h=180"} alt="user" />
                            <div className='flex flex-col justify-center bg-neutral-100/50 rounded-2xl px-5  items-start text-lg ml-6'>
                              <p className='text-sky-700  text-start'>{user?.username}</p>
                              <p>{user?.email}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )) :
                    <div>no users</div>
                }

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