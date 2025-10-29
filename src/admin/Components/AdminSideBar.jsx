import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { faBagShopping, faBars, faBook, faHome, faScrewdriverWrench, faUser } from '@fortawesome/free-solid-svg-icons'
import { adminUpdateContext } from '../../contextAPI/ContextShare'
import SERVERURL from '../../services/serverURL'

function AdminSideBar() {


  const [listStatus, setListStatus] = useState(false)
  const [adminName,setAdminName] = useState("")
  const {adminEditResponse, setAdminEditResponse} = useContext(adminUpdateContext)
  const [dp, setDp] = useState("https://tse1.mm.bing.net/th/id/OIP.w-f-qDRUjGt9e_SuPTcfcgHaHw?pid=Api&P=0&h=180")


  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"))
      setDp(user.profile)
      setAdminName(user.username)
    }
  }, [adminEditResponse])


  return (
    <>

      <div className='  w-full h-full '>
        <nav className='w-full md:p-20 flex items-center p-4 justify-between md:block flex-col h-full  text-black bg-[#EFF6FF] ' >
          {/* menu bar and login */}

          <div className='flex md:items-center  flex-col '>
            <img className='border ' src={dp == "" ? 'https://tse1.mm.bing.net/th/id/OIP.w-f-qDRUjGt9e_SuPTcfcgHaHw?pid=Api&P=0&h=180' : `${SERVERURL}/uploads/${dp}`} alt='user admin logo' style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
            <p className='my-2'>{adminName}</p>
          </div>
          <div className="flex justify-between items-center md:hidden">
            <button onClick={() => setListStatus(!listStatus)} ><FontAwesomeIcon icon={faBars} /></button>
          </div>



          <ul className={listStatus ? "flex flex-col" : 'md:flex flex-col justify-center  hidden'} >
            <li className='my-3'>

              <Link to={'/admin-dashboard'} ><label htmlFor='Home'>
                <FontAwesomeIcon icon={faHome} className='mx-2' />
                Home
              </label></Link>
            </li>
            <li className='my-3'>

              <Link to={'/admin-resources'}><label htmlFor="Book">
                <FontAwesomeIcon icon={faBook} className='mx-2' />
                Resources
              </label></Link>
            </li>
            <li className='my-3'>

              <Link to={'/admin-careers'}  ><label htmlFor="CAREERS">
                <FontAwesomeIcon icon={faBagShopping} className='mx-2' />
                Careers
              </label></Link>
            </li>
            <li className='my-3'>

              <Link to={'/admin-settings'}  > <label htmlFor="Settings">
                <FontAwesomeIcon icon={faScrewdriverWrench} className='mx-2' />
                Settings
              </label></Link>

            </li>

          </ul>
        </nav>
      </div>

    </>
  )
}

export default AdminSideBar