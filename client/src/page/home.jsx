import React from 'react'
import Header from '../component/header.jsx' 
import Steps from '../component/steps.jsx'
import Description from '../component/description.jsx'
import Testimonial from '../component/testimonial.jsx'

const home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <Description />
      <Testimonial />
    </div>
  )
}

export default home
