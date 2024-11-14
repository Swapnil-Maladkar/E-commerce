import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={'About FilpZON'}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img className='aboutus'
            src="/images/aboutus.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div>

    </Layout>
    
  )
};

Layout.defaultProps={
  title:'FlipZon',
  description:'MERN STACK',
  keywords:'Mern, Express, MongoDB, ReactJS',
  author:'Swapnil'
  
}

export default About