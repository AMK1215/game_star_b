import React, { useState } from 'react'
import '../assets/css/auth.css'
import ph from '../assets/images/inputPhone.png'
import acc from '../assets/images/inputAccount.png'
import pw from '../assets/images/inputPw.png'


const AuthPage = () => {
    const [selectedTab,setSelectedTab]=useState(1);
  return (
    <div className='h-screen py-4 '>
      <div className="authContainer gradientBg rounded-3">
        <div className="row authContainerHeader cursor-pointer">
            <div onClick={()=>setSelectedTab(1)} className={`col-6 py-3 px-2 text-center ${selectedTab!==1 && 'authTabBg' } `}>
                <p className='fw-semibold'>Register</p>
            </div>
            <div onClick={()=>setSelectedTab(2)} className={`col-6 py-3  px-2 text-center ${selectedTab!==2 && 'authTabBg' } `}>
                <p className='fw-semibold' >Login</p>
            </div>
        </div>
        <div className="p-2">
            {selectedTab===1 && <>
                <div className="mb-3">
                    <small className='mb-2 d-block'>
                        <span className="text-danger">*</span> Phone Number
                        </small>
                    <div className="d-flex items-center gap-2 py-1 px-2 rounded-3 customInput">
                        <img src={ph} className='inputImg mt-1' />
                        <input type="text" />
                    </div>
                </div>
                <div className="mb-3">
                    <small className='mb-2 d-block'>
                        <span className="text-danger">*</span> Username
                        </small>
                    <div className="d-flex items-center gap-2 py-1 px-2 rounded-3 customInput">
                        <img src={acc} className='inputImg mt-1' />
                        <input type="text" />
                    </div>
                </div>
                <div className="mb-3">
                    <small className='mb-2 d-block'>
                        <span className="text-danger">*</span> Password
                        </small>
                    <div className="d-flex items-center gap-2 py-1 px-2 rounded-3 customInput">
                        <img src={pw} className='inputImg mt-1' />
                        <input type="password" />
                    </div>
                </div>
                <button className="btn2 fw-semibold mt-3 text-white w-full py-2 text-center rounded-3">
                    Create Account
                </button>
             </>}
             {selectedTab===2 && <>
                {/* <div className="mb-3">
                    <small className='mb-2 d-block'>
                        <span className="text-danger">*</span> Phone Number
                        </small>
                    <div className="d-flex items-center gap-2 py-1 px-2 rounded-3 customInput">
                        <img src={ph} className='inputImg mt-1' />
                        <input type="text" />
                    </div>
                </div> */}
                <div className="mb-3">
                    <small className='mb-2 d-block'>
                        <span className="text-danger">*</span> Username
                        </small>
                    <div className="d-flex items-center gap-2 py-1 px-2 rounded-3 customInput">
                        <img src={acc} className='inputImg mt-1' />
                        <input type="text" />
                    </div>
                </div>
                <div className="mb-3">
                    <small className='mb-2 d-block'>
                        <span className="text-danger">*</span> Password
                        </small>
                    <div className="d-flex items-center gap-2 py-1 px-2 rounded-3 customInput">
                        <img src={pw} className='inputImg mt-1' />
                        <input type="password" />
                    </div>
                </div>
                <button className="btn2 fw-semibold mt-3 text-white w-full py-2 text-center rounded-3">
                   Login
                </button>
             </>}
        </div>
      </div>
    </div>
  )
}

export default AuthPage
