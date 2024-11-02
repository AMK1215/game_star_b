import React, { useState } from 'react'
import '../assets/css/auth.css'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'


const AuthPage = () => {
    const [selectedTab,setSelectedTab]=useState(1);

  return (
    <div className='h-screen py-4 '>
      <div className="authContainer gradientBg rounded-3">
        <div className="row authContainerHeader cursor-pointer">
            <div onClick={()=>setSelectedTab(2)} className={`col-6 py-3 px-2 text-center ${selectedTab!==1 && 'authTabBg' } `}>
                <p className='fw-semibold'>Register</p>
            </div>
            <div onClick={()=>setSelectedTab(1)} className={`col-6 py-3  px-2 text-center ${selectedTab!==2 && 'authTabBg' } `}>
                <p className='fw-semibold' >Login</p>
            </div>
        </div>
        <div className="p-4">
            {selectedTab===2 && <>
                <Register />
             </>}
             {selectedTab===1 && <>
                <Login />
             </>}
        </div>
      </div>
    </div>
  )
}

export default AuthPage
