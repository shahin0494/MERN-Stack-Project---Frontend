import { faEye, faEyeSlash, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { loginAPI, registerAPI } from '../services/allAPI'
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';



function Auth({ register }) {
  const [viewPasswordStatus, setViewPasswordStatus] = useState(false)
  const [userDetails, setUserDetails] = useState({ username: "", email: "", password: "" })
  const navigate = useNavigate()

  // console.log(userDetails);

  // register
  const handleRegister = async () => {
    // console.log("inside handleregister");
    const { username, email, password } = userDetails
    if (!username || !email || !password) {
      toast.info("Please fill the form completely")
    } else {
      //toast.success("proceed to api call")
      try {
        const result = await registerAPI(userDetails)
        console.log(result);
        if (result.status == 200) {
          toast.success("Registration successfull !! proceed to login")
          setUserDetails({ username: "", email: "", password: "" })
          navigate("/login")
        } else if (result.status == 409) {
          toast.warning(result.response.data)
          setUserDetails({ username: "", email: "", password: "" })
          navigate("/login")
        } else {
          toast.error("Something went wrong 😭")
          setUserDetails({ username: "", email: "", password: "" })
        }
      }
      catch (err) {
        console.log(err)
      }
    }
  }

  // login
  const handleLogin = async () => {
    const { email, password } = userDetails
    if (!email || !password) {
      toast.info("Please fill the form completely")
    } else {

      try {
        const result = await loginAPI(userDetails)
        console.log(result)
        if (result.status == 200) {
          toast.success("Login Successfull")
          sessionStorage.setItem("user", JSON.stringify(result.data.user))
          sessionStorage.setItem("toke", result.data.token)
          setTimeout(() => {
            if (result.data.user.role == "admin") {
              navigate("/admin-dashboard")
            } else {
              navigate("/")
            }
          }, 2500);
        }

        else if (result.status == 401) {
          toast.warning(result.response.data)
          setUserDetails({ username: "", email: "", password: "" })
        }

        else if (result.status == 404) {
          toast.warning(result.response.data)
          setUserDetails({ username: "", email: "", password: "" })
        } else {
          toast.error("Something went wrong 😭")
          setUserDetails({ username: "", email: "", password: "" })
        }
      } catch (err) {
        console.log(err)
      }
    }
  }


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
                    <button type='button' onClick={handleRegister} className='bg-green-500 p-2 w-full rounded'>Register</button>
                    :
                    <button onClick={handleLogin} type='button' className='bg-green-500 p-2 w-full rounded'>Login</button>
                }
              </div>
              {/* google auth */}
              <div className='text-center'>
                {!register && <p className='mt-4 mb-4 font-extrabold text-xl'>Or</p>}
                {!register &&
                  <div>
                    <GoogleOAuthProvider>
                      <GoogleLogin
                        onSuccess={credentialResponse => {
                          console.log(credentialResponse)
                        }}
                        onError={() => {
                          console.log('Login Failed')
                        }}
                      />
                    </GoogleOAuthProvider>
                  </div>}
              </div>
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
        <ToastContainer
          position="top-right"
          autoClose={1500}
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
    </>
  )
}

export default Auth