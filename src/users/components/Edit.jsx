import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faFax, faPen, faXmark } from '@fortawesome/free-solid-svg-icons'
import SERVERURL from '../../services/serverURL'
import { ToastContainer, toast } from 'react-toastify'
import { updateUserProfileAPI } from '../../services/allAPI'
import { userUpdateContext } from '../../contextAPI/ContextShare'


function Edit() {
  const [offCanvasStatus, setOffCanvasStatus] = useState(false)
  const [userDetails, setUserDetails] = useState({ username: "", password: "", cpassword: "", bio: "", profile: "", role: "" })
  const [token, setToken] = useState("")
  const [existingProfile, setExistingProfile] = useState("")
  const [preview, setPreview] = useState("")
  const {userEditResponse, setUserEditResponse} = useContext(userUpdateContext)

  console.log(userDetails);


  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUserDetails({ username: user.username, password: user.password, cpassword: user.password, bio: user.bio, roe: user.role })
      setExistingProfile(user.profile)
    }
  }, [])

  const handlePictureUpdload = (e) => {
    setUserDetails({ ...userDetails, profile: e.target.files[0] })
    const url = URL.createObjectURL(e.target.files[0])
    setPreview(url)
  }

  const handleReset = () => {
    const user = JSON.parse(sessionStorage.getItem("user"))
    setUserDetails({ username: user.username, password: user.password, cpassword: user.password, bio: user.bio, roe: user.role })
    setExistingProfile(user.profile)
    setPreview("")

  }

  const handleupdate = async () => {
    const { username, password, bio, role, cpassword, profile } = userDetails
    if (!username || !password || !cpassword || !bio) {
      toast.info("please fill the form completely")
    } else {
      if (password != cpassword) {
        toast.warning("incorrect password")
      } else {
        const reqHeader = {
          "Authorization": `Bearer ${token}`
        }
        const reqBody = new FormData()
        if (preview) {
          for (let key in userDetails) {
            reqBody.append(key, userDetails[key])
          }
          const result = await updateUserProfileAPI(reqBody, reqHeader)
          if (result.status == 200) {
            // toast.success("profile updation completed")
            sessionStorage.setItem("user", JSON.stringify(result.data))
            handleReset()
            setOffCanvasStatus(false)
            setUserEditResponse(result.data)
          } else {
            toast.error("something went wrong")
            console.log(result);
          }
        } else {
          const result = await updateUserProfileAPI({ username, password, bio, role, profile: existingProfile }, reqHeader)
          if (result.status == 200) {
            toast.success("profile updation completed")
            sessionStorage.setItem("user", JSON.stringify(result.data))
            handleReset()
            setOffCanvasStatus(false)
            setUserEditResponse(result.data)
          } else {
            toast.error("something went wrong")
            console.log(result);
          }
        }
      }
    }
  }

  return (
    <>
      <button onClick={() => setOffCanvasStatus(true)} className='text-emerald-600 border border-emerald-400 rounded p-3 hover:text-white'><FontAwesomeIcon icon={faPenToSquare} />Edit</button>
      {/* for off canvas */}
      {
        offCanvasStatus &&
        <div>
          <div className="fixed inset-0 backdrop-blur-lg  transition-opacity bg-neutral-900/75 w-full h-full"></div>
          <div className='bg-white h-full w-90 fixed z-50 top-0 left-0'>
            <div className='bg-neutral-900 px-3 py-4 flex justify-between text-amber-50 text-2xl'>
              <h1>Edit User Profile</h1>
              <FontAwesomeIcon onClick={() => setOffCanvasStatus(false)} icon={faXmark} />
            </div>
            <div className='flex justify-center items-center flex-col my-5'>
              <label htmlFor="profilePic">
                <input onChange={e => handlePictureUpdload(e)} type="file" id='profilePic' style={{ display: "none" }} />

                {
                  existingProfile == "" ?
                    <img className='z-52' style={{ width: "100px", height: "100px", borderRadius: "50%" }} src={preview ? preview : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"} alt="profile" />
                    : existingProfile.startsWith("https://lh3.googleusercontent.com/") ?
                      <img className='z-52' style={{ width: "100px", height: "100px", borderRadius: "50%" }} src={preview ? preview : existingProfile} alt="profile" />
                      :
                      <img className='z-52' style={{ width: "100px", height: "100px", borderRadius: "50%" }} src={preview ? preview : `${SERVERURL}/uploads/${existingProfile}`} alt="profile" />

                }

                <button className='bg-amber-300 z-54 ms-15 -mt-6 fixed text-white py-1 px-2 rounded'>
                  <FontAwesomeIcon icon={faPen} />
                </button>
              </label>
              <div className='my-3 mt-5 w-full px-5'>
                <input value={userDetails.username} onChange={e => setUserDetails({ ...userDetails, username: e.target.value })} type="text" placeholder='Username' className='w-full border border-neutral-300 placeholder-neutral-400 p-2 rounded-lg' />
              </div>
              <div className='my-3 w-full px-5'>
                <input value={userDetails.password} onChange={e => setUserDetails({ ...userDetails, password: e.target.value })} type="text" placeholder='Password' className='w-full border border-neutral-300 placeholder-neutral-400 p-2 rounded-lg' />
              </div>
              <div className='my-3 w-full px-5'>
                <input value={userDetails.cpassword} onChange={e => setUserDetails({ ...userDetails, cpassword: e.target.value })} type="text" placeholder='Confirm Password' className='w-full border border-neutral-300 placeholder-neutral-400 p-2 rounded-lg' />
              </div>
              <div className='my-3 w-full px-5'>
                <textarea value={userDetails.bio} onChange={e => setUserDetails({ ...userDetails, bio: e.target.value })} type="text" placeholder='Bio' className='w-full border border-neutral-300 placeholder-neutral-400 p-2 rounded-lg' />
              </div>
              <div className='flex justify-end w-full px-5'>
                <button onClick={handleReset} className='bg-red-500 text-amber-50 rounded-lg py-2 px-3 hover:text-red-600 hover:bg-amber-50 hover:border-red-700 border-red-400 border '>Reset</button>
                <button onClick={handleupdate} className='bg-green-500 text-amber-50 rounded-lg py-2 px-3 hover:text-green-600 hover:bg-amber-50 hover:border-green-700 border-green-400 border ms-3 '>Update</button>
              </div>
            </div>
          </div>
        </div>
      }
      <ToastContainer
        position="top-right"
        autoClose={500}
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
    </>
  )
}

export default Edit