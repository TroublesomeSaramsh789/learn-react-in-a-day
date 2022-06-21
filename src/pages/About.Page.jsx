import React from 'react'
import monalisa from "../../public/image/monalisa.webp"
const AboutPage = () => {
  return (
    <div className='container'>
      <h3>About Our Website</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, exercitationem obcaecati voluptatem unde eum aliquid repudiandae in rerum sunt nam?</p>
      <img src="/public/image/monalisa.webp" alt="monalisa" />
      <img src={monalisa} alt="monalisa" />
    </div>
  )
}

export default AboutPage