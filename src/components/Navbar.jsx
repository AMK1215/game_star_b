import React from 'react'
import logo from '../assets/images/logo.png'
import profile from '../assets/images/profile.png'
 import { Link } from 'react-router-dom'
import { AiOutlineDollar } from 'react-icons/ai'
import { IoMdRefreshCircle } from 'react-icons/io'

const Navbar = () => {
  return (
    <div className='nav d-flex align-items-center justify-content-between py-2 px-2'>
      <Link to={'/'}>
      <img src={logo} className='logo' />
      </Link>
      {/* <div className="d-flex align-items-center gap-2">
        <Link to={'/auth'} className="btn1  text-white rounded-2 px-3">
            <small>Register</small>
        </Link>
        <Link to={'/auth'} className="btn2  text-white rounded-2 px-3">
            <small>Login</small>
        </Link>
      </div> */}
      <div className="d-flex align-items-center gap-sm-2">
        <div>
          <p className='fw-semibold'>user@123</p>
          <div  className="d-flex align-items-center gap-2">
          <div className="d-flex align-items-center gap-1">
            <AiOutlineDollar size={22} color='#FECB00' />
            <small className="fw-semibold">0.00</small>
          </div>
          <IoMdRefreshCircle size={26} color='#00EF2C' />
          </div>
        </div>
       <Link to={'/profile'}>
       <img src={profile} className='navProfile' />
       </Link>
      </div>
    </div>
  )
}

export default Navbar
