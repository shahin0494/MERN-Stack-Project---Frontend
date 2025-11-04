import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'

function PaymentSucess() {
    return (
        <>
            <Header />
            <div className='container my-10'>
                <div className='md:grid grid-cols-2 px-20 justify-center items-center'>
                    <div>
                        <h1 className='md:text-5xl text-emerald-500'>Congratulations</h1>
                        <p className='text-2xl my-4'>Thank You for Purchasing w/Bookstore. Hope you had a good time w/us ❤️ </p>
                        <Link to={"/all-books"} className='bg-teal-600 px-4 py-3 text-amber-50 my-5 rounded-xl'><FontAwesomeIcon icon={faBackward} />Explore More Books</Link>
                    </div>
                    <div className='flex justify-end items-center'>
                        <img  src="https://i.pinimg.com/originals/f0/2a/f5/f02af5201c305c0960eea6d4f297fcbf.gif" alt="success" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PaymentSucess