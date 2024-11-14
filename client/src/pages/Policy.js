import React from 'react'
import Layout from '../components/Layout/Layout'
const Policy = () => {
  return (
    <Layout title={'Privacy Policy'}>
    <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacypolicy.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 style={{textAlign:'center'}}>Policies</h1>
          <p>Privacy Policy 1</p>
          <p>Privacy Policy 2</p>
          <p>Privacy Policy 3</p>
          <p>Privacy Policy 4</p>
          <p>Privacy Policy 5</p>
      
        </div>
      </div>
    </Layout>
  )
}

export default Policy