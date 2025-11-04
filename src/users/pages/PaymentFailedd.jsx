import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'

function PaymentFailedd() {
  return (
    <>
    <Header />
            <div className='container my-10'>
                <div className='md:grid grid-cols-2 px-20 justify-center items-center'>
                    <div>
                        <h1 className='md:text-5xl text-red-500'>Sorry! Your Payment is unsuccessfull 😕</h1>
                        <p className='text-2xl my-4'>We apologize for the inconvenience and Apprecieate you visit Bookstore ❤️ </p>
                        <Link to={"/all-books"} className='bg-teal-600 px-4 py-3 text-amber-50 my-5 rounded-xl'><FontAwesomeIcon icon={faBackward} />Explore More Books</Link>
                    </div>
                    <div className='flex justify-end items-center'>
                        <img className='rounded-2xl ' src="https://i.pinimg.com/originals/9d/16/7e/9d167e72839894c971c90f60ab00d916.gif" alt="success" />
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default PaymentFailedd