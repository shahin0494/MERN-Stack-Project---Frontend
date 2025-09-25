import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faPaperPlane } from '@fortawesome/free-regular-svg-icons'

function Contact() {
  return (
    <>
      <Header />
      <div className='flex flex-col items-center justify-center px-10 py-10'>
        <h1 className='text-2xl'>Contacts</h1>
        <p className='mt-5 text-justify md:text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repudiandae ullam, maxime quibusdam temporibus, placeat, minima sed non asperiores assumenda libero ipsa harum quisquam saepe rem earum sit! Qui, quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iste nobis eum ipsa facere quam placeat laborum, sunt iusto odit ipsum dolorem adipisci nisi, vitae, qui provident? Accusantium, et distinctio.</p>

        {/* contact details */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 border border-gray-200 rounded px-10 py-5 gap-6 text-center md:text-left">

          {/* Address */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200">
              <FontAwesomeIcon icon={faLocationDot} className="text-black text-xl" />
            </div>
            <p className='text-justify'>123 Main Street, Apt 4B,  Anytown, CA 91234</p>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center md:ms-10 w-12 h-12 rounded-full bg-gray-200">
              <FontAwesomeIcon icon={faPhone} className="text-black text-xl" />
            </div>
            <p>+91 9874561230</p>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200">
              <FontAwesomeIcon icon={faEnvelope} className="text-black text-xl" />
            </div>
            <p>Bookstore@gmail.com</p>
          </div>
        </div>
        {/* map and feedback */}
        <div className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 text-center  '>
          {/* feedback */}
          <div className='flex items-center space-x-6'>
            <div className='w-100 border border-slate-200 py-5 px-5 rounded bg-gray-200 h-105'>
              <h1>Send Me a Message</h1>
              <input type="text" placeholder='Name' className=' mt-5 w-full bg-white px-2 py-2 rounded' />
              <input type="text" placeholder='Email id' className=' mt-5 w-full bg-white px-2 py-2 rounded' />
              <textarea type="text" placeholder='Message' className=' mt-5 w-full  bg-white px-2 py-2 rounded' rows={"5"} />
              <button className='mt-5 bg-cyan-800 text-white w-full py-2 rounded ' >Send <FontAwesomeIcon icon={faPaperPlane} /></button>
            </div>
          </div>
          {/* map */}
          <div className='flex items-center space-x-6'>
            <div className="w-full h-105 flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.17923431664!2d76.33978861479302!3d10.015861992837733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d1e3e6a3a7f%3A0x4e8c8bb6c3a1f3af!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1634902473889!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact