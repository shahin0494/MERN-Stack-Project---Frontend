import React, { useEffect, useState, useContext } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { getAllBooksAPI } from '../../services/allAPI'
import { searchBookContext } from '../../contextAPI/ContextShare'

function AllBooks() {

  const [listStatus, setListStatus] = useState(false)
  const [token, setToken] = useState("")
  const [books, setBooks] = useState([])
  const [tempBooks, setTempBooks] = useState([])
  const [allCategories, setAllCategories] = useState([])
  const { searchKey, setSearchKey } = useContext(searchBookContext)

  console.log(books);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      getALLBooks(userToken)
    }
  }, [searchKey])

  const getALLBooks = async (userToken) => {
    console.log(userToken);

    const reqHeader = {
      "Authorization": `Bearer ${userToken}`
    }
    try {
      const result = await getAllBooksAPI(searchKey, reqHeader)
      if (result.status == 200) {
        setBooks(result.data)
        setTempBooks(result.data)
        const tempCategory = result.data.map(item => item.category)
        //console.log(tempCategory);
        const tempArray = [...new Set(tempCategory)]
        //console.log(tempArray);
        setAllCategories(tempArray)
      } else {
        console.log(result);
        toast.warning(result.response.data)
      }
    } catch (err) {
      console.log(err);

    }
  }

  // filtering according to book category
  const filterBooks = (category) => {
    if (category == "No-Filter") {
      setBooks(tempBooks)
    } else {
      setBooks(tempBooks?.filter(item => item.category.toLowerCase() == category.toLowerCase()))
    }
  }

  return (
    <>
      <Header />
      {
        token ?
          <>
            <div className="flex justify-center flex-col my-5 items-center">
              <h1 className="text-3xl">Collections </h1>
              <div className="flex my-5">
                <input type="text" className="p-2 rounded border border-gray-400 md:w-100 text-black placeholder-gray-700" placeholder='Search by Title' value={searchKey} onChange={e => setSearchKey(e.target.value)} />
                <button className='bg-blue-400 ms-2 rounded w-15 md:w-20'>Search</button>
              </div>

            </div>
            {/* grid */}
            <div className="md:grid grid-cols-4 md:px-20 p-5">
              {/* filter */}
              <div className="col-span-1">
                <div className='flex justify-between'>
                  <h1 className='text-2xl font-semibold'>Filters</h1>
                  <button onClick={() => setListStatus(!listStatus)} className='text-2xl md:hidden'><FontAwesomeIcon icon={faBars} /></button>
                </div>
                <div className={listStatus ? "block" : "md:block hidden"}>
                  {
                    allCategories?.length > 0 &&
                    allCategories?.map((category, index) => (
                      <div key={index} className='mt-3'>
                        <input type="radio" id={category} name='filter' onClick={() => filterBooks(category)} />
                        <label className='ms-3' htmlFor={category}>{category}</label>
                      </div>
                    ))

                  }
                  <div className='mt-3'>
                    <input type="radio" id='noFilter' name='filter' onClick={() => filterBooks("No-Filter")} />
                    <label className='ms-3' htmlFor="noFilter">No Filter</label>
                  </div>
                </div>
              </div>
              {/* books */}

              <div className='col-span-3'>
                <div className='md:grid grid-cols-4 mt-5 md:mt-0'>
                  {
                    books.length > 0 ?
                      books.map(book => (
                        <div key={book?._id} className='shadow-md bg-neutral-100/50 p-3 rounded mx-2' hidden={book?.status == "pending" || book?.status == "sold"}>
                          <img width={'100%'} style={{ height: '350px' }} src={book?.imageUrl} alt="" />
                          <div className='flex justify-center flex-col items-center'>
                            <p className='text-blue-400 text-lg'>{book?.author.slice(0, 20)}</p>
                            <p>{book?.title.slice(0, 20)}</p>
                            <Link to={`/books/${book?._id}/view`} className='px-5 py-3 bg-blue-600 text-white rounded my-3' >View Book</Link>
                          </div>
                        </div>
                      ))
                      :
                      <p>no books</p>
                  }
                </div>
              </div>

            </div>
          </>
          :
          <div className='my-10 flex justify-center items-center flex-col min-h-100vh'>
            <img className='w-73' src="https://cdn.dribbble.com/userupload/20385903/file/original-f73ab63cabefa9633131d8179db7a3a9.gif" alt="lock" />
            <p className='font-semibold text-lg'>Please <Link to={"/login"} className='text-cyan-600 font-semibold underline'>Login</Link> to Explore More ....</p>
          </div>
      }
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2500}
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

export default AllBooks