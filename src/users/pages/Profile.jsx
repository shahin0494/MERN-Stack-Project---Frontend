import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { ToastContainer, toast } from 'react-toastify'
import { addBookAPI, getAllUserPurchasedBooksAPI, getAllUserUploadBooksAPI, removeUserUploadBooksAPI } from '../../services/allAPI'
import Edit from '../components/Edit'
import SERVERURL from '../../services/serverURL'
import { userUpdateContext } from '../../contextAPI/ContextShare'


function Profile() {

  const [sellBookStatus, setSellBookStatus] = useState(true)
  const [bookStatus, setBookStatus] = useState(false)
  const [purchaseStatus, setPurchaseStatus] = useState(false)
  const [bookDetails, setBookDetails] = useState({
    title: "", author: "", noOfPages: "", imageUrl: "", price: "", discountPrice: "", abstract: "", publisher: "", language: "", isbn: "", category: "", uploadImg: []
  })
  //console.log(bookDetails);
  const [preview, setPreview] = useState("")
  const [previewList, setPreviewList] = useState([])
  const [token, setToken] = useState("")
  const [userBooks, setUserBooks] = useState([])
  const [deleteBookStatus, setDeleteBookStatus] = useState(false)
  const [purchaseBooks, setPurchaseBooks] = useState([])
  const [username, SetUserName] = useState("")
  const [userDp, setUserDp] = useState("")
  const {userEditResponse, setUserEditResponse} = useContext(userUpdateContext)

  console.log(userBooks);


  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
      const user = JSON.parse(sessionStorage.getItem("user"))
      SetUserName(user.username)
      setUserDp(user.profile)
    }
  }, [userEditResponse])

  useEffect(() => {
    if (bookStatus == true) {
      getAllUserBooks()
    } else if (purchaseStatus == true) {
      getAllUserBoughtBooks()
    }
  }, [bookStatus, deleteBookStatus, purchaseStatus])



  const getAllUserBoughtBooks = async () => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    try {
      const result = await getAllUserPurchasedBooksAPI(reqHeader)
      if (result.status == 200) {
        setPurchaseBooks(result.data)
      } else {
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const removeBook = async (bookId) => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    try {
      const result = await removeUserUploadBooksAPI(bookId, reqHeader)
      if (result.status == 200) {
        toast.success(result.data)
        setDeleteBookStatus(true)
      } else {
        console.log(result);

      }

    } catch (err) {
      console.log(err);
    }
  }

  const getAllUserBooks = async () => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    try {
      const result = await getAllUserUploadBooksAPI(reqHeader)
      if (result.status == 200) {
        setUserBooks(result.data)
      } else {
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleUploadBookImage = (e) => {
    //console.log(e.target.files[0]);


    const fileArray = bookDetails.uploadImg
    fileArray.push(e.target.files[0])
    setBookDetails({ ...bookDetails, uploadImg: fileArray })
    const url = URL.createObjectURL(e.target.files[0])
    setPreview(url)
    //console.log(url);
    const bookImageArray = previewList
    bookImageArray.push(url)
    setPreviewList(bookImageArray)
  }

  const handleReset = () => {
    setBookDetails({
      title: "", author: "", noOfPages: "", imageUrl: "", price: "", discountPrice: "", abstract: "", publisher: "", language: "", isbn: "", category: "", uploadImg: []
    })
    setPreview("")
    setPreviewList([])
  }

  const handleBookSubmit = async () => {
    const { title, author, noOfPages, imageUrl, price, discountPrice, abstract, publisher, language, isbn, category, uploadImg } = bookDetails
    if (!title || !author || !noOfPages || !imageUrl || !price || !discountPrice || !abstract || !publisher || !language || !isbn || !category || uploadImg.length == 0) {
      toast.info("Please fill the form")
    } else {
      // api call
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const reqBody = new FormData()
      // append reqBody.append(key,value)
      for (let key in bookDetails) {
        if (key != "uploadImg") {
          reqBody.append(key, bookDetails[key])
        } else {
          bookDetails.uploadImg.forEach(img => {
            reqBody.append("uploadImg", img)
          })
        }
      }
      try {
        const result = await addBookAPI(reqBody, reqHeader)
        console.log(result);
        if (result.status == 401) {
          toast.warning(result.response.data)
          // clear all field
          handleReset()
        } else if (result.status == 200) {
          toast.success("Book added successfully")
          // clear all field
          handleReset()
        } else {
          toast.error("Something went wrong")
          // clear all field
          handleReset()

        }
      } catch (err) {
        console.log(err);

      }
    }
  }



  return (
    <>
      <Header />
      <div style={{ height: "200px" }} className='bg-neutral-900'></div>
      <div className='bg-white p-3' style={{ width: "230px", height: "230px", borderRadius: "50%", marginLeft: "70px", marginTop: "-130px" }}>
        <img style={{ width: "200px", height: "200px", borderRadius: "50%" }} src={userDp == "" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" : userDp.startsWith("https://lh3.googleusercontent.com/") ? userDp : `${SERVERURL}/uploads/${userDp}`} alt="userdp" />
      </div>
      <div className='md:flex justify-between px-20 mt-5'>
        <div className='flex justify-center items-center '>
          <h1 className="font-bold text-5xl">{username}</h1>
          <FontAwesomeIcon className='ms-2 text-2xl mt-1 text-blue-700  ' icon={faCircleCheck} />
        </div>
        <Edit />
      </div>

      <p className='md:px-20 px-5 my-5 text-justify'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam aperiam in voluptatem quae. Nostrum libero aspernatur sapiente voluptas ab nemo quisquam illum, ipsam veritatis, velit tenetur iure neque? Impedit, iusto?
        Inventore ad explicabo dicta quisquam aliquam commodi optio eveniet saepe cum adipisci, mollitia minima rerum laudantium in. Est sapiente fugit officiis facilis ex nesciunt corrupti iure recusandae maiores, laudantium laborum?
        Soluta accusantium, saepe minus cum officiis sunt, sed laudantium suscipit culpa ab, rerum aliquid sequi impedit voluptatum tempora dolorum similique aspernatur labore temporibus neque alias facilis odio. Sapiente, minus.
      </p>

      <div className='md:px-40'>

        {/* tab */}
        <div className='flex justify-center items-center my-5'>
          <p onClick={() => { setSellBookStatus(true); setPurchaseStatus(false); setBookStatus(false) }} className={sellBookStatus ? 'text-sky-500 p-4 border-neutral-200 border-t border-l border-r rounded cursor-pointer' : "p-4 border border-b border-neutral-300 cursor-pointer"}>Sell Books</p>
          <p onClick={() => { setBookStatus(true); setPurchaseStatus(false); setSellBookStatus(false) }} className={bookStatus ? 'text-sky-500 p-4 border-neutral-200 border-t border-l border-r rounded cursor-pointer' : "p-4 border border-b border-neutral-300 cursor-pointer"}>Book Status</p>
          <p onClick={() => { setPurchaseStatus(true); setSellBookStatus(false); setBookStatus(false) }} className={purchaseStatus ? 'text-sky-500 p-4 border-neutral-200 border-t border-l border-r rounded cursor-pointer' : "p-4 border border-b border-neutral-300 cursor-pointer"}>Purchase History</p>
        </div>
      </div>
      {/* contents */}

      {/* Sell Books */}
      {
        sellBookStatus &&
        <div className='p-10 my-20 mx-5 bg-gray-200'>
          <div className="text-center text-3xl font-medium">Book Details</div>
          <div className='md:grid grid-cols-2 mt-10 w-full'>
            <div className='px-3'>
              <div className='mb-3 px-3'>
                <input value={bookDetails.title} onChange={e => setBookDetails({ ...bookDetails, title: e.target.value })} type="text" className="p-2 rounded border border-gray-200 w-full text-black placeholder-gray-400 bg-white" placeholder='Title' />
              </div>
              <div className='mb-3 px-3'>
                <input value={bookDetails.author} onChange={e => setBookDetails({ ...bookDetails, author: e.target.value })} type="text" className="p-2 rounded border border-gray-200 w-full text-black placeholder-gray-400 bg-white" placeholder='Author' />
              </div>
              <div className='mb-3 px-3'>
                <input value={bookDetails.noOfPages} onChange={e => setBookDetails({ ...bookDetails, noOfPages: e.target.value })} type="text" className="p-2 rounded border border-gray-200 w-full text-black placeholder-gray-400 bg-white" placeholder='No. of Pages' />
              </div>
              <div className='mb-3 px-3'>
                <input value={bookDetails.imageUrl} onChange={e => setBookDetails({ ...bookDetails, imageUrl: e.target.value })} type="text" className="p-2 rounded border border-gray-200 w-full text-black placeholder-gray-400 bg-white" placeholder='Image URL' />
              </div>
              <div className='mb-3 px-3'>
                <input value={bookDetails.price} onChange={e => setBookDetails({ ...bookDetails, price: e.target.value })} type="text" className="p-2 rounded border border-gray-200 w-full text-black placeholder-gray-400 bg-white" placeholder='Price' />
              </div>
              <div className='mb-3 px-3'>
                <input value={bookDetails.discountPrice} onChange={e => setBookDetails({ ...bookDetails, discountPrice: e.target.value })} type="text" className="p-2 rounded border border-gray-200 w-full text-black placeholder-gray-400 bg-white" placeholder='Discount Price' />
              </div>
              <div className='mb-3 px-3'>
                <textarea value={bookDetails.abstract} onChange={e => setBookDetails({ ...bookDetails, abstract: e.target.value })} type="text" className="p-2 h-52 rounded border border-gray-200 w-full text-black placeholder-gray-400 bg-white" placeholder='Abstract' />
              </div>
            </div>
            <div className='px-3'>
              <div className='mb-3 px-3'>
                <input value={bookDetails.publisher} onChange={e => setBookDetails({ ...bookDetails, publisher: e.target.value })} type="text" className="p-2 rounded border border-gray-200 w-full text-black placeholder-gray-400 bg-white" placeholder='Publisher' />
              </div>
              <div className='mb-3 px-3'>
                <input value={bookDetails.language} onChange={e => setBookDetails({ ...bookDetails, language: e.target.value })} type="text" className="p-2 rounded border border-gray-200 w-full text-black placeholder-gray-400 bg-white" placeholder='Language' />
              </div>
              <div className='mb-3 px-3'>
                <input value={bookDetails.isbn} onChange={e => setBookDetails({ ...bookDetails, isbn: e.target.value })} type="text" className="p-2 rounded border border-gray-200 w-full text-black placeholder-gray-400 bg-white" placeholder='ISBN' />
              </div>
              <div className='mb-3 px-3'>
                <input value={bookDetails.category} onChange={e => setBookDetails({ ...bookDetails, category: e.target.value })} type="text" className="p-2 rounded border border-gray-200 w-full text-black placeholder-gray-400 bg-white" placeholder='Category' />
              </div>

              <div className='mb-3 px-3 flex justify-center items-center'>
                <label htmlFor="upload">
                  <input
                    onChange={e => handleUploadBookImage(e)}
                    type="file"
                    id='upload'
                    className='hidden' />
                  {!preview ? <img className='md:w-50 md:h-50 md:ms-0' src="https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Logo-Transparent-Free-PNG.png" alt="" />
                    :
                    <img className='md:w-100 md:h-100 md:ms-50' src={preview} alt="" />
                  }
                </label>
              </div>

              {preview && <div className='flex justify-center items-center '>
                {
                  previewList?.map(imageUrl => (
                    <img src={imageUrl} alt="" width={"70px"} height={'70px'} className='mx-3' />
                  ))
                }

                {
                  previewList.length < 3 &&
                  <label htmlFor="upload">
                    <input
                      onChange={e => handleUploadBookImage(e)} type="file" id='upload' className='hidden' />
                    <FontAwesomeIcon className='fa-3x shadow ms-3 text-gray-500' icon={faSquarePlus} />
                  </label>}

              </div>}

            </div>
          </div>
          {/* modal footer */}
          <div className='bg-neutral-200 p-2 w-215 mt-4 flex justify-end'>
            <button onClick={handleReset} className='py-2 px-3 rounded bg-neutral-800 text-white'>Reset</button>
            <button onClick={handleBookSubmit} className='py-2 px-3 rounded mx-2 bg-sky-600 text-white'>Submit</button>
          </div>
        </div>
      }

      {/* book status */}
      {
        bookStatus &&
        <div className='p-10 my-20 shadow rounded'>
          {/* duplicate div according to book */}
          {
            userBooks?.length > 0 ?
              userBooks?.map((item, index) => (
                <div key={index} className='p-5 rounded-2xl mt-4 bg-neutral-100'>
                  <div className='md:grid grid-cols-[3fr_1fr]'>
                    <div className='px-4 '>
                      <h1 className='text-4xl'>{item?.title}</h1>
                      <h2 className='text-2xl'>{item?.author}</h2>
                      <h3 className='text-xl text-blue-600'>$ {item?.discountPrice}</h3>
                      <p className="text-justify">{item?.abstract}</p>

                      <div className='flex'>
                        {
                          item?.status == "pending" ?
                            <img style={{ width: "100px", height: "100px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjlag_31KJZKjPCyXpldwr3TGrBf1uFQmDLA&s" alt="pending" /> :
                            item?.status == "approved" ?
                              <img style={{ width: "300px", height: "200px" }} src="https://media.istockphoto.com/id/948531554/vector/approved-ink-stamp.jpg?s=612x612&w=0&k=20&c=kVKJxtXo1QOxDoqTvAdxHEjuVlcRvxGN-1f6qvyimRA=" alt="approved" /> :
                              <img style={{ width: "200px", height: "200px" }} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sold-out-stamp-design-template-89756519e732cfb0be2a52799ef0d5d4_screen.jpg?ts=1737111674" alt="sold" />}
                      </div>

                    </div>
                    <div className='px-4 mt-4 md:mt-0'>
                      <img className='w-full' src={item?.imageUrl} alt="" />
                      <div className='mt-5'>
                        <button onClick={() => removeBook(item?._id)} className='py-2 px-3 rounded bg-red-600 text-white ms-3 '>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
              :
              <p>no books</p>
          }
        </div>
      }

      {/* purchase status */}
      {
        purchaseStatus &&
        <div className='p-10 my-20 shadow rounded'>
          {/* duplicate div according to book */}
          {
            purchaseBooks?.length > 0 ?
              purchaseBooks.map((item, index) => (
                <div key={index} className='p-5 rounded mt-4 bg-neutral-100'>
                  <div className='md:grid grid-cols-[3fr_1fr]'>
                    <div className='px-4'>
                      <h1 className='text-2xl'>{item?.title}</h1>
                      <h2 className='text-xl'>{item?.author}</h2>
                      <h3 className='text-lg'>$ {item?.discountPrice}</h3>
                      <p className="text-justify">{item?.abstract}</p>
                      <div className='flex'>
                        <img style={{ width: "200px", height: "130" }} src="https://en.pimg.jp/111/006/006/1/111006006.jpg" alt="" />
                      </div>
                    </div>
                    <div className='px-4 mt-4 md:mt-0'>
                      <img className='w-full' src={item?.imageUrl} alt="" />
                    </div>
                  </div>
                </div>
              ))
              :
              <div className='flex justify-center items-center flex-col'>
                <img className='w-50 h-50'  src="https://media.tenor.com/3n-ASJF-Y9YAAAAj/reading-read.gif" alt="" />
                <p>books not purchased</p>
              </div>
          }
        </div>
      }

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

export default Profile