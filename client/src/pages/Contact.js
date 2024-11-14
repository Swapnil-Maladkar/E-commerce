import React from 'react'
import Layout from '../components/Layout/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from 'react-icons/bi'
const Contact = () => {
  return (
    <Layout title={'Contact Us -FlipZon'}>
        <div className='row contactus'>
          <div className='col-md-6'>
            <img
              src="/images/contactus.jpg"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query or info about product, feel free to contact us anytime we are avaialible 24x7
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@flipzon.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 362361662
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-1800-1800 (toll free)
          </p>
          </div>
        </div>
    </Layout>
  )
}

export default Contact