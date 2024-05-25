import React from 'react'
import "./Hero.css"
import pic1 from "../../assets/pic12.jpeg"
import pic2 from "../../assets/pic22.png"
import pic3 from "../../assets/pic9.jpeg"
import pic4 from "../../assets/pic21.jpg"

function Hero() {
  return (
    <>
    <section className='hero-container'>
        <div className='hero'>
<div className='hero-intro'>
    <div>
    <span>Unleash Your Potential In </span><br/>
    <span>Technology today.</span>
    <p>Elevate your career and develop into a Proficient Tech Expert<br /> By Joining <span className='hero-target'>Edbriz.</span></p>
    </div>
    <div className='hero-btn'>
        <button className='btn1'>Our Services</button>
        <button className='btn2'>Explore Courses</button>
    </div>
    
</div>
<div className='hero-images'>
<img src={pic1} alt='hero-img1' className='pic1' />
<img src={pic2} alt='hero-img2' className='pic2'/>
<img src={pic3} alt='hero-img3' className='pic3'/>
 <img src={pic4} alt='hero-img4' className='pic4'/>
</div>
</div>
    </section>
    </>
  )
}

export default Hero