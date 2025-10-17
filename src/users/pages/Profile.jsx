import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faSquarePlus } from '@fortawesome/free-regular-svg-icons'

function Profile() {

  const [sellBookStatus, setSellBookStatus] = useState("true")
  const [bookStatus, setBookStatus] = useState("false")
  const [purchaseStatus, setPurchaseStatus] = useState("false")
  const [bookDetails, setBookDetails] = useState({
    title: "", author: "", noOfPages: "", imageUrl: "", price: "", discountPrice: "", abstract: "", publisher: "", language: "", isbn: "", category: "", uploadImg: []
  })
  //console.log(bookDetails);
  const [preview, setPreview] = useState("")
  const [previewList, setPreviewList] = useState([])

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

  return (
    <>
      <Header />
      <div style={{ height: "200px" }} className='bg-neutral-900'></div>
      <div className='bg-white p-3' style={{ width: "230px", height: "230px", borderRadius: "50%", marginLeft: "70px", marginTop: "-130px" }}>
        <img style={{ width: "200px", height: "200px", borderRadius: "50%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" alt="" />
      </div>
      <div className='md:flex justify-between px-20 mt-5'>
        <div className='flex justify-center items-center '>
          <h1 className="font-bold text-5xl">Username</h1>
          <FontAwesomeIcon className='ms-2 text-2xl mt-1 text-red-700  ' icon={faCircleCheck} />
        </div>
        <div>Edit</div>
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
                  {!preview ? <img className='md:w-100 md:h-100 md:ms-0' src="https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Logo-Transparent-Free-PNG.png" alt="" />
                    :
                    <img className='md:w-100 md:h-100 md:ms-50' src={preview} alt="" />
                  }
                </label>
              </div>

              {preview && <div className='flex justify-center items-center '>
                {
                  previewList?.map(imageUrl=>(
                    <img src={imageUrl} alt="" width={"70px"} height={'70px'} className='mx-3' />
                  ))
                }

               {
               previewList.length<3 && 
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
            <button className='py-2 px-3 rounded bg-neutral-800 text-white'>Reset</button>
            <button className='py-2 px-3 rounded mx-2 bg-sky-600 text-white'>Submit</button>
          </div>
        </div>
      }

      {/* book status */}
      {
        bookStatus &&
        <div className='p-10 my-20 shadow rounded'>
          {/* duplicate div according to book */}
          <div className='p-5 rounded mt-4 bg-neutral-100'>
            <div className='md:grid grid-cols-[3fr_1fr]'>
              <div className='px-4'>
                <h1 className='text-2xl'>Book Title</h1>
                <h2 className='text-xl'>Author</h2>
                <h3 className='text-lg'>$ 300</h3>
                <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos fugit, deserunt nulla blanditiis aspernatur suscipit tempore autem asperiores ea, magnam a dolor aut labore maiores animi, iste fuga vero mollitia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repudiandae fugit cumque dolorum vitae hic eaque facere dolore! Consequatur sapiente maiores iusto tempora beatae? Nemo incidunt similique voluptatum unde cupiditate?</p>
                <div className='flex'>
                  <img style={{ width: "150px", height: "100px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjlag_31KJZKjPCyXpldwr3TGrBf1uFQmDLA&s" alt="" />
                  <img style={{ width: "150px", height: "100px" }} src="https://media.istockphoto.com/id/948531554/vector/approved-ink-stamp.jpg?s=612x612&w=0&k=20&c=kVKJxtXo1QOxDoqTvAdxHEjuVlcRvxGN-1f6qvyimRA=" alt="" />

                </div>
              </div>
              <div className='px-4 mt-4 md:mt-0'>
                <img className='w-full' src="./book.jpg" alt="" />
                <div className='mt-5'>
                  <button className='py-2 px-3 rounded bg-red-600 text-white ms-3 '>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }

      {/* purchase status */}
      {
        purchaseStatus &&
        <div className='p-10 my-20 shadow rounded'>
          {/* duplicate div according to book */}
          <div className='p-5 rounded mt-4 bg-neutral-100'>
            <div className='md:grid grid-cols-[3fr_1fr]'>
              <div className='px-4'>
                <h1 className='text-2xl'>Book Title</h1>
                <h2 className='text-xl'>Author</h2>
                <h3 className='text-lg'>$ 300</h3>
                <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos fugit, deserunt nulla blanditiis aspernatur suscipit tempore autem asperiores ea, magnam a dolor aut labore maiores animi, iste fuga vero mollitia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repudiandae fugit cumque dolorum vitae hic eaque facere dolore! Consequatur sapiente maiores iusto tempora beatae? Nemo incidunt similique voluptatum unde cupiditate?</p>
                <div className='flex'>
                  <img style={{ width: "full", height: "130" }} src="https://static.vecteezy.com/system/resources/previews/002/271/846/non_2x/red-sold-stamp-logo-vector.jpg" alt="" />


                </div>
              </div>
              <div className='px-4 mt-4 md:mt-0'>
                <img className='w-full' src="./book.jpg" alt="" />

              </div>
            </div>
          </div>
        </div>
      }

      <Footer />
    </>

  )
}

export default Profile