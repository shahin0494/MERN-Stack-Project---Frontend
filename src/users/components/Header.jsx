import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { faAddressCard, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';



function Header() {
  const [listStatus, setListStatus] = useState(false)
  const [token, setToken] = useState("")
  const [userDp, setUserDp] = useState("")
  const [dropDownStatus, setDropDownStatus] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      setToken(token)
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUserDp(user.profile)
    }
  }, [])

  const logout = () => {
    sessionStorage.clear()
    navigate("/")
  }
  //console.log(token)
  //console.log(userDp)
  return (
    <>
      <div className="grid grid-cols-3 p-3">

        {/* logo */}
        <div className='flex items-center'>
          <img width={"50px"} src="./logo.png" alt="" />
          <h1 className='text-2xl font-bold ms-2 md:hidden'>BOOK STORE</h1>
        </div>

        {/* title */}
        <div className='md:flex justify-center items-center hidden'>
          <h1 className='text-3xl font-bold '>BOOK STORE</h1>
        </div>

        {/* login block */}
        <div className='md:flex justify-end items-center hidden'>
          <FontAwesomeIcon className='text-xl me-2' icon={faInstagram} />
          <FontAwesomeIcon className='text-xl me-2' icon={faXTwitter} />
          <FontAwesomeIcon className='text-xl ' icon={faFacebookF} />

          {/* login link */}
          {!token ? <Link to={'/login'}>
            <button className='border border-black rounded px-3 py-2 ms-3 hover:bg-black hover:text-white'> <FontAwesomeIcon icon={faUser} className='me-2' />Login</button></Link>
            :
            <div className='relative inline-block text-left'>
              <button type='button' onClick={() => setDropDownStatus(!dropDownStatus)} className=' w-full bg-white px-3 py-2 shadow-xs hover:bg-gray-50'>
                <img width={"40px"} height={"40px"} style={{ borderRadius: "50%" }} src={userDp == "" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQytc93VfA29gwZ4w1ySdWjx1CSJBM6qGG3BA&s" : ""} alt="userdp" />
              </button>
              {
                dropDownStatus &&
                <div className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black/5 focus:outline-hidden'>
                  <div className='py-1'>
                    <Link className='block px-4 my-2 text-sm text-gray-700' to={"/profile"}><p><FontAwesomeIcon icon={faAddressCard} className='me-2' />Profile</p></Link>
                    <button onClick={logout} className='block px-4 my-2 text-sm text-gray-700'><FontAwesomeIcon icon={faPowerOff} className='me-2' />Logout</button>
                  </div>
                </div>
              }
            </div>
          }
        </div>
      </div>

      <nav className='w-full p-3 bg-black text-white'>

        {/* menubar and login  */}
        <div className="flex justify-between items-center md:hidden">
          <button onClick={() => setListStatus(!listStatus)} ><FontAwesomeIcon className='text-2xl' icon={faBars} /></button>

          {/* login link */}
          <Link to={'/login'}>
            <button className='border border-black rounded px-3 py-2 ms-3 hover:bg-black hover:text-white'>
              <FontAwesomeIcon icon={faUser} className='me-2' />
              Login
            </button>
          </Link>

        </div>
        <ul className={listStatus ? "flex flex-col" : 'md:flex justify-center itens-center  hidden'}>
          <li className='md: mx-8 mt-3 md:mt-0'>
            <Link to={'/'}>HOME</Link>
          </li>
          <li className='md: mx-8 mt-3 md:mt-0'>
            <Link to={'/all-books'} >BOOKS</Link>
          </li>
          <li className='md: mx-8 mt-3 md:mt-0'>
            <Link to={'/careers'} >CAREERS</Link>
          </li>
          <li className='md: mx-8 mt-3 md:mt-0'>
            <Link to={'/contact'} >CONTACT</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header