import React, { useEffect, useState } from 'react'
import AdminHead from '../Components/AdminHead'
import Footer from '../../components/Footer'
import AdminSideBar from '../Components/AdminSideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faUser } from '@fortawesome/free-solid-svg-icons'
import { toast, ToastContainer } from 'react-toastify'
import { updateAdminProfileAPI } from '../../services/allAPI'
import SERVERURL from '../../services/serverURL'


function SettingAdmin() {


  const [adminDetails, setAdminDetails] = useState({ username: "", password: "", cpassword: "", profile: "" })
  const [existingProfilePic, setExistingProfilePic] = useState("")
  const [preview, setPreview] = useState("")
  const [token, setToken] = useState("")

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      const user = JSON.parse(sessionStorage.getItem("user"))
      setAdminDetails({ username: user.username, password: user.password, cpassword: user.password})
      setExistingProfilePic(user.profile)
    }
  }, [])

  const handlePictureUpdload = (e) => {
    setAdminDetails({ ...adminDetails, profile: e.target.files[0] })
    const url = URL.createObjectURL(e.target.files[0])
    setPreview(url)
  }
console.log(preview);

  const handleReset = () => {
    const user = JSON.parse(sessionStorage.getItem("user"))
    setAdminDetails({ username: user.username, password: user.password, cpassword: user.password, bio: user.bio, roe: user.role })
    setExistingProfilePic(user.profile)
    setPreview("")

  }

  const handleupdateAdminProfile = async () => {
    const { username, password, profile, cpassword } = adminDetails
    if (!username || !password || !cpassword) {
      toast.info("please fill the form completely")
    } else {
      if (password != cpassword) {
        toast.warning("incorrect password")
        handleReset()
      } else {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
          "Authorization": `Bearer ${token}`
        }
        const reqBody = new FormData()
        reqBody.append("username", username)
        reqBody.append("password", password)
        reqBody.append("bio", "")
        preview ? reqBody.append("profile", profile) : reqBody.append("profile", existingProfilePic)
        try {
          const result = await updateAdminProfileAPI(reqBody, reqHeader)
          console.log(result);
          
          if (result.status == 200) {
            // toast.success("profile updation completed")
            sessionStorage.setItem("user", JSON.stringify(result.data))
            handleReset()
            setAdminDetails(result.data)
          } else {
            console.log(result);
            toast.error("something went wrong")
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  }



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
                  <label htmlFor="adminPic">
                    {
                      existingProfilePic ?
                        <img className='border border-slate-400 ' src={preview ? preview : `${SERVERURL}/uploads/${existingProfilePic}`} alt='user admin logo' style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                        :

                        <img className='border border-slate-400 ' src={preview ? preview : 'https://static.vecteezy.com/system/resources/previews/013/716/222/non_2x/coin-of-alexander-the-great-vintage-illustration-free-vector.jpg'} alt='user admin logo' style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                    }
                    <FontAwesomeIcon className='bg-amber-400 rounded absolute bottom-0 ml-17  p-1' icon={faPen} />
                  </label>
                  <input type="file" onChange={e => handlePictureUpdload(e)} name='' id='adminPic' className='hidden' />
                </div>
                <p className='my-2 text-center'>User Name</p>
                <div>
                  <input onChange={e=>setAdminDetails({...adminDetails,username:e.target.value})} type="text" placeholder='User Name' value={adminDetails.username} className='px-3 py-2 my-2 w-full bg-white rounded' />

                  <input onChange={e=>setAdminDetails({...adminDetails,password:e.target.value})} type="text" placeholder='Password' value={adminDetails.password} className='px-3 py-2 my-2 w-full bg-white rounded' />
                  <input onChange={e=>setAdminDetails({...adminDetails,cpassword:e.target.value})} type="text" placeholder='Confirm Password' value={adminDetails.cpassword} className='px-3 py-2 my-2 w-full bg-white rounded' />

                </div>

                <div className='flex justify-between my-5'>
                  <button onClick={handleReset} className='md:px-18 md:py-4 px-9 py-2 mr-2 rounded bg-amber-500 text-white'>Reset</button>
                  <button onClick={handleupdateAdminProfile} className='md:px-18 px-9 py-2 rounded bg-[#295829] text-white'>Update</button>
                </div>

              </div>
            </div>
          </div>
        </div>


      </>

      <Footer />

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

export default SettingAdmin