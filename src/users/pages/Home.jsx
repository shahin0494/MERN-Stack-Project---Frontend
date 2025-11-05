import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { getHomeBooksApi } from '../../services/allAPI'
import { ToastContainer, toast } from 'react-toastify'
import { searchBookContext } from '../../contextAPI/ContextShare'


function Home() {


  const [homeBooks, setHomeBooks] = useState([])
  const navigate = useNavigate()
  const { searchKey, setSearchKey } = useContext(searchBookContext)

  useEffect(() => {
    setSearchKey("")
    getHomeBooks()
  }, [])

  //console.log(homeBooks);

  const searchBook = (bookTitle) => {
    if (!searchKey) {
      toast.warning("Please provide a Book Title")
    } else if (!sessionStorage.getItem("token")) {
      toast.warning("please login to search books !!")
      setTimeout(() => {
        navigate("/login")
      }, 2500);
    } else if (sessionStorage.getItem("token") && searchKey){
      navigate("/all-books")
    }else {
      toast.error("something went wrong 🥸")
    }
  }

  const getHomeBooks = async () => {
    try {
      const result = await getHomeBooksApi()
      if (result.status == 200) {
        setHomeBooks(result.data)
      }
    } catch (error) {
      console.log(error);

    }
  }


  return (
    <>
      <Header />
      {/* landing */}
      <div className="flex flex-col h-150 justify-center items-center bg-[url(/bg.jpg)] bg-cover bg-center text-white">
        <h1 className=' text-3xl md:text-5xl text-shadow-lg font-bold'>Wonderful Gifts</h1>
        <p className='text-shadow-lg '>Give your family and friends a book !</p>
        <div className='mt-9 w-75  md:w-100 py-2 rounded-3xl ps-3 flex flex-cols px-3 justify-center items-center   bg-white'>
          <input onChange={e=>setSearchKey(e.target.value)} className='w-100 border-none outline-0  h-10 text-black me-2' type="text" placeholder='Search Books' /> 
           <FontAwesomeIcon className='text-black' onClick={searchBook} icon={faMagnifyingGlass} />
        </div>
      </div>
      {/* arrival */}
      <section className='md:px-40 p-5 flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold' >NEW ARIVALS</h1>
        <h1 className='text-3xl'>Explore Our Latest Collections</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full mt-5">

          {
            homeBooks.length > 0 ?
              homeBooks?.map((book, index) => (
                <div key={index} className="shadow p-3 flex  flex-col rounded">
                  <img className='rounded' width={'100%'} height={'300px'} src={book?.imageUrl} alt="book" />
                  <div className="flex justify-center flex-col items-center ">
                    <p className="text-blue-700 font-bold text-lg">{book?.author}</p>
                    <p >{book?.title}</p>
                    <p>$ {book?.discountPrice}</p>

                  </div>
                </div>
              ))

              :
              <p>Loading</p>
          }

        </div>
        <div className="text-center my-5">
          <Link to={'/all-books'} className='bg-blue-600 border hover:bg-white rounded hover:text-blue-600 text-white p-3 transition-all duration-200' >Explore More...</Link>
        </div>
      </section>
      {/* author */}
      <section className="md:grid grid-cols-2 items-center gap-10 my-5 md:px-40 p-5">
        <div className='text-center'>
          <h1 className='text-lg font-medium'>Featured Authors</h1>
          <h1 className='text-xl'>Captivates with every word</h1>
          <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita a recusandae similique voluptates commodi. Omnis, consectetur quisquam ullam molestias doloribus consequuntur aliquam consequatur saepe architecto enim at nobis asperiores aperiam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quo delectus corporis nisi animi nobis aperiam ullam consequatur alias nulla fugit sunt maxime natus rerum, soluta culpa provident accusantium eligendi?
          </p>
          <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita a recusandae similique voluptates commodi. Omnis, consectetur quisquam ullam molestias doloribus consequuntur aliquam consequatur saepe architecto enim at nobis asperiores aperiam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quo delectus corporis nisi animi nobis aperiam ullam consequatur alias nulla fugit sunt maxime natus rerum, soluta culpa provident accusantium eligendi?
          </p>
        </div>
        <div className='p-5 flex justify-center items-center'><img className='w-100' src="https://media.zencastr.com/image-files/5d68389a6c26f3001c79252c/5c87d9e0-2a54-42f7-94ca-973ec9b648b5.jpg" alt="" /></div>
      </section>
      {/* testimony */}
      <section className="md:px-40 p-5 flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold">TESTIMONIALS</h1>
        <h1 className="text-3xl">See What others are saying</h1>
        <div className="flex my-5 flex-col justify-center items-center">
          <img width={'300px'} height={'300px'} style={{ borderRadius: "5%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgjHEh5IgC_05IrKTRGgBjPNNtfIkrMMajSQ&s" alt="" />
          <h1 className="my-3">ALexander the great</h1>
          <p className='text-justify font-bold '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, architecto placeat beatae dolor quidem odit omnis incidunt asperiores. Sit quae deleniti facere minima accusamus vitae quidem asperiores facilis iure adipisci! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt suscipit distinctio praesentium non consequatur omnis quasi, minus tempore cum ipsam nobis sit labore perferendis facilis! Dolore est doloribus hic corrupti! </p>
        </div>
      </section>
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

export default Home