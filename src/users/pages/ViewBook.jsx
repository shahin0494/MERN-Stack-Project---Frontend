import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faEye } from '@fortawesome/free-regular-svg-icons'
import { faBackward, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { getSingleBookAPI, makePaymentAPI } from '../../services/allAPI'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import SERVERURL from '../../services/serverURL'
import { loadStripe } from '@stripe/stripe-js';


function ViewBook() {

  const [modalStatus, setModalStatus] = useState(false)
  const { id } = useParams()

  const [book, setBook] = useState({})
  console.log(book);

  useEffect(() => {
    viewBookDetails()
  }, [])

  const viewBookDetails = async () => {
    const token = sessionStorage.getItem('token')
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await getSingleBookAPI(id, reqHeader)
        if (result.status == 200) {
          setBook(result.data)
        } else if (result.response.status == 401) {
          toast.warning(result.response.data)
        } else {
          console.log(result);

        }
      } catch (err) {
        console.log(err);

      }
    }
  }

  const handlePayment = async () => {
    console.log("inside handle payment fnction");
    // stripe object or instance
    const stripe = await loadStripe('pk_test_51SPbdm2M3fJPEa74kzqrVzHG5VXvbyJuPoIhAbzvKtOew8YzF694jJsC0lq5cNZk4F8vkkrv2d23l17OSO4NXKAr00RFERt4ox');
    // console.log(stripe)
    // reqbody - book , reqHeader - token
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await makePaymentAPI(book, reqHeader)
        console.log(result);
        const checkoutSessionURL = result.data.checkoutSessionURL
        if (checkoutSessionURL) {
          // redirect
          window.location.href = checkoutSessionURL
        }

      } catch (error) {
        console.log(error);
      }
    }
  }

  return (

    <>
      <Header />
      <div className='md:m-10 m-5'>
        <div className="border p-5 border-gray-200">
          <div className="md:grid grid-cols-4 gap-x-10">
            <div className="col-span-1">
              <img className='w-full rounded' src={book?.imageUrl} alt="" />
            </div>
            <div className='col-span-3'>
              <div className="flex justify-between">
                <h1 className='text-xl '>{book?.title}</h1>
                <button onClick={() => setModalStatus(true)} className='text-gray-400'><FontAwesomeIcon icon={faEye} /></button>
              </div>
              <p className='my-3 text-blue-700 '>Author : {book?.author}</p>
              <div className="md:grid grid-cols-3 gap-5 my-10">
                <p className='font-semibold'>Publisher : {book?.publisher}</p>
                <p className='font-semibold'>Language : {book?.language}</p>
                <p className='font-semibold'>No. of Pages : {book?.noOfPages}</p>
                <p className='font-semibold'>Seller Mail : {book?.userMail}</p>
                <p className='font-semibold'>Real Price : {book?.price}</p>
                <p className='font-semibold'>ISBN : {book?.isbn}</p>
                <p className='font-semibold'>Category : {book?.category}</p>
              </div>
              <div className='md:my-10 my-4'>
                <p className='font-semibold text-lg'>
                  {book?.abstract}
                </p>
              </div>
              <div className='flex justify-end'>
                <Link to={"/all-books"}><button className='bg-cyan-500 text-white p-2 rounded'><FontAwesomeIcon icon={faBackward} className='me-3' />Back</button></Link>
                <button onClick={handlePayment} className='bg-lime-600 text-white p-2 ms-5 rounded'>Buy $ {book?.discountPrice}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      {
        modalStatus &&
        <div className='relative z-10' onClick={() => setModalStatus(false)}>
          <div className="bg-slate-200/75 fixed inset-0">
            <div className="flex justify-center items-center min-h-screen ">
              <div style={{ width: '900px' }} className='bg-gray-50 rounded'>
                {/* header */}
                <div className=' rounded bg-black text-white flex justify-between items-center p-5 '>
                  <h1>Book Images</h1>
                  <FontAwesomeIcon icon={faXmark} />
                </div>
                <p className='text-cyan-600 my-5 ml-5'>
                  <FontAwesomeIcon icon={faCamera} className='me-2' />
                  Camera click of the book in the hand of seller
                </p>
                {/* images */}
                <div className='md:flex my-4'>
                  {/* duplicate images */}
                  {
                    book?.uploadImg?.length > 0 ?
                      book?.uploadImg?.map(img => (
                        <img style={{ height: '300px', width: "300px" }} className='mx-5 rounded' src={`${SERVERURL}/uploads/${img}`} alt="" />
                      ))
                      :
                      <p>User Uploaded Images Unavailable</p>
                  }
                </div>
              </div>

            </div>
          </div>
        </div>}

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

export default ViewBook