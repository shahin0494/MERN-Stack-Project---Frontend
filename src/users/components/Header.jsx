import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';



function Header() {
  const [listStatus, setListStatus] = useState(false)
  return (
    <>
      <div className="grid grid-cols-3 p-3">
        {/* logo */}
        <div className='flex items-center'>
          <img width={"50px"} src="./logo.png" alt="" />
          <h1 className='text-2xl font-bold ms-2 md:hidden'>Book Store</h1>
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
          <Link to={'/login'}><button className='border border-black rounded px-3 py-2 ms-3 hover:bg-black hover:text-white'> <FontAwesomeIcon icon={faUser} className='me-2' />Login</button></Link>
        </div>
      </div>

      <nav className='w-full p-3 bg-black text-white'>
        {/* menubar and login  */}
        <div className="flex justify-between items-center md:hidden">
          <button onClick={()=>setListStatus(!listStatus)} ><FontAwesomeIcon className='text-2xl' icon={faBars} /></button>
          {/* login link */}
          <Link to={'/login'}>
            <button  className='border border-black rounded px-3 py-2 ms-3 hover:bg-black hover:text-white'>
              <FontAwesomeIcon icon={faUser} className='me-2' />
              Login</button>
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