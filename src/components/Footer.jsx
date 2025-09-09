import React from 'react'
import Logo from '../assets/img/logo.png'

function Footer() {
  return (
    <>
      <footer className="d-flex justify-content-between header p-1 ">
        <div>
            <img src={Logo} alt="" srcset="" />
        </div>
        <div className='d-flex align-items-center justify-content-around' style={{color:"#fff", width:"50%"}}>
            <p>About</p>
            <p>Privacy Policy</p>
            <p>Licensing</p>
            <p>Contact</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
