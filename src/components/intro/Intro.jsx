import React from 'react'
import pic1 from "../../assets/pic10.jpeg"
import pic2 from "../../assets/pic8.jpeg"
import pic3 from "../../assets/pic6.jpeg"
import "./intro.css"

function Intro() {
  return (
    <>
    <section className='intro-container'>
        <div className='intro'>
            <div className='intro-words'>
            <h4>Why Choose Edbriz</h4>
<h3>We prioritize our students and clients</h3>
<p>We aim to offer contemporary websites and software solutions tailored to your business needs, while also ensuring that students receive a comprehensive experience with
     additional support to help them excel in their chosen courses.</p>
    <a href='/' >Read More</a> 
            </div>

<div className='intro-focus'>
    <div className='focus1'>
<img src={pic1} alt='educators'/>
<h5>Skilled Educators</h5>
<p>Our instructors are professionals in their respective fields, chosen for their deep industry understanding and exceptional teaching skills. Our staff provides students with guidance and support in developing a standout portfolio 
    that will make a strong impression on prospective employers.</p>
    </div>
    <div className='focus1'>
<img src={pic2} alt='developers'/>
<h5>Professional Developers</h5>
<p>We provide the best Softwares that suit your niche with modern technology implementation to produce visually appealing
    website and Softwares that stands out.
</p>
    </div>
    <div className='focus1'>
<img src={pic3} alt='team-work'/>
<h5>Result Oriented And Team Work Mindset</h5>
<p>Our developers closely collaborate with clients to deliver the best results tailored to their preferences. Similarly, our educators work closely with students to provide detailed training, 
    enabling them to kickstart and explore their learning effectively.
</p> 
 </div> 
 </div>
        </div>
        </section>
        </>
  )
}

export default Intro