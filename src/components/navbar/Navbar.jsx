import React, {useState} from 'react'
import "./Navbar.css"
import logo from "../../assets/edbriz01-logo.png"
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";

function Navbar() {
  const [showDropDown, setShowDropDown] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
    {/*
<section className='nav-container'>
<div className='navbar'>
<a className='logo' href="/" ><img className='logo' src={logo} /></a>
<div className='navlist'>
    <ul>
        <li><a href=''>About us</a></li>
        <li><a href=''>FAQs</a></li>
        <li><a href=''>Contact us</a></li>
    </ul>
    <div class="dropdown">
  <p class="dropbtn" onClick={()=>setShowDropDown(!showDropDown)}>Courses <IoMdArrowDropdown /></p>
  <div class="dropdown-content" style={{display:showDropDown? 'flex':'none'}}>
    <a href="#">Microsoft office 2013</a>
    <a href="#">Product Design UI/UX</a>
    <a href="#">FrontEnd Development</a>
    <a href="#">BackEnd Development</a>
    <a href="#">Data Science</a>
    <a href="#">Computer Networking</a>
    <a href="#">Cyber Security</a>
    <a href="#">Cloud Computing</a>
    <a href="#">Digital Marketing</a>
  </div>
</div>
<div className='buttons'>
<button className='btn1'>Log In</button>
<button className='btn2'>Register</button>
</div>
</div>
<IoMdMenu  className='menuBar' onClick={()=>setShowMenu(!showMenu)}/>
<div className='nav-menu' style={{display:showMenu? 'flex':'none'}}>
<div className='navlists'>
    <ul>
        <li><a href=''>About us</a></li>
        <li><a href=''>FAQs</a></li>
        <li><a href=''>Contact us</a></li>
    </ul>
    <div class="dropdowns">
  <p class="dropbtns" >Courses <IoMdArrowDropdown /></p>
  <div class="dropdown-contents" style={{display:showDropDown? 'flex':'none'}}>
    <a href="#">Microsoft office 2013</a>
    <a href="#">Product Design UI/UX</a>
    <a href="#">FrontEnd Development</a>
    <a href="#">BackEnd Development</a>
    <a href="#">Data Science</a>
    <a href="#">Computer Networking</a>
    <a href="#">Cyber Security</a>
    <a href="#">Cloud Computing</a>
    <a href="#">Digital Marketing</a>
  </div>
</div>
</div>
<div className='buttons'>
<button className='btn1'>Log In</button>
<button className='btn2'>Register</button>
</div>
</div>
</div>
</section>
  */}
  <section className='nav-container'>
    <nav className='navbar'>
      <div>
      <a className='logo' href="/" ><img className='logo' src={logo} /></a>
      </div>
    <div class='navlist'>
    <ul>
        <li><a href=''>About us</a></li>
        <li><a href=''>FAQs</a></li>
        <li><a href=''>Contact us</a></li>
    </ul>
    <div className='dropdown'>
  <p className="dropbtn" onClick={()=>setShowDropDown(!showDropDown)}>Courses <IoMdArrowDropdown /></p>
  <div className="dropdown-content" style={{display:showDropDown? 'flex':'none'}}>
    <a href="#">Microsoft office 2013</a>
    <a href="#">Product Design UI/UX</a>
    <a href="#">FrontEnd Development</a>
    <a href="#">BackEnd Development</a>
    <a href="#">Data Science</a>
    <a href="#">Computer Networking</a>
    <a href="#">Cyber Security</a>
    <a href="#">Cloud Computing</a>
    <a href="#">Digital Marketing</a>
  </div>
    </div>
    <div className='buttons'>
<button className='btn1'>Log In</button>
<button className='btn2'>Register</button>
</div>
    </div>
    <IoMdMenu  className='menuBar' onClick={()=>setShowMenu(!showMenu)}/>
    <div className='nav-menu' style={{display:showMenu? 'flex':'none'}}>
    <ul>
        <li><a href=''>About us</a></li>
        <li><a href=''>FAQs</a></li>
        <li><a href=''>Contact us</a></li>
    </ul>
    <div className='dropdowns'>
  <p className="dropbtns" onClick={()=>setShowDropDown(!showDropDown)}>Courses <IoMdArrowDropdown /></p>
  <div className="dropdown-contents" style={{display:showDropDown? 'flex':'none'}}>
    <a href="#">Microsoft office 2013</a>
    <a href="#">Product Design UI/UX</a>
    <a href="#">FrontEnd Development</a>
    <a href="#">BackEnd Development</a>
    <a href="#">Data Science</a>
    <a href="#">Computer Networking</a>
    <a href="#">Cyber Security</a>
    <a href="#">Cloud Computing</a>
    <a href="#">Digital Marketing</a>
  </div>
    </div>
    <div className='button'>
<button className='btn1s'>Log In</button>
<button className='btn2s'>Register</button>
</div>
    </div>
    </nav>
  </section>
    </>
  )
}

export default Navbar