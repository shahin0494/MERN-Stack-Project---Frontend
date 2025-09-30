import { faEye, faEyeSlash, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'

function Auth({ register }) {
  const [viewPasswordStatus, setViewPasswordStatus] = useState(false)
  const [userDetails, setUserDetails] = useState({ username: "", email: "", password: "" })
  return (
    <>
      <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[url(/authbg.jpg)] bg-cover bg-center'>
        <div className='p-18'>

          <div className='bg-slate-900 text-white p-10 rounded-xl flex flex-col justify-center items-center my-5 '>
            <div style={{ width: "100px", height: "100px", borderRadius: "50%" }} className='border mb-5 flex justify-center items-center'>
              <FontAwesomeIcon icon={faUser} className='text-3xl' />
            </div>
            <h1 className='text-2xl'>{register ? "Register" : "Login"}</h1>
            <form className='my-5 w-full '>
              {
                register &&
                <input value={userDetails.username} onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} type="text" placeholder='Username' className='bg-white w-full p-2 my-0 rounded placeholder-gray-300 text-slate-700' />
              }
              <input value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} type="email" placeholder='Email ID' className='bg-white w-full p-2 my-5 rounded placeholder-gray-300 text-slate-700' />

              <div className='flex items-center'>
                <input value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} type={viewPasswordStatus ? "text" : "password"} placeholder='Password' className='bg-white w-full mb-3 p-2 rounded placeholder-gray-300 text-slate-700' />
                {
                  viewPasswordStatus ?
                    <FontAwesomeIcon onClick={() => setViewPasswordStatus(!viewPasswordStatus)} style={{ marginLeft: "-24px", marginBottom: "15px" }} className='text-neutral-400 ' icon={faEye} />
                    :
                    <FontAwesomeIcon onClick={() => setViewPasswordStatus(!viewPasswordStatus)} style={{ marginLeft: "-30px", marginBottom: "15px" }} className='text-neutral-400 ' icon={faEyeSlash} />}
              </div >

              <div className='flex justify-between mb-5'>
                <p className='text-sm text-orange-300'>*Never share your password with others</p>
                <button className='text-sm underline'>Forgot Password</button>
              </div>
              <div className='text-center'>
                {
                  register ?
                    <button className='bg-green-500 p-2 w-full rounded'>Register</button>
                    :
                    <button className='bg-green-500 p-2 w-full rounded'>Login</button>
                }
              </div>
              {/* google auth */}
              <div className='my-5 text-center'>
                {
                  register ?
                    <p className='text-blue-400'>Already a user? <Link to={'/login'} className='underline ms-5'>Login</Link></p>
                    :
                    <p className='text-blue-400'>New user ? <Link to={'/register'} className='underline ms-5'>Register</Link></p>
                }
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default Auth