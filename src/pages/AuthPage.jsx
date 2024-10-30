import React, { useState } from 'react'
import '../assets/css/auth.css'
import ph from '../assets/images/inputPhone.png'
import acc from '../assets/images/inputAccount.png'
import pw from '../assets/images/inputPw.png'
import useLogin from "../hooks/useLogin";
import BASE_URL from '../hooks/baseUrl'
import { Spinner } from 'react-bootstrap'


const AuthPage = () => {
    const [selectedTab,setSelectedTab]=useState(1);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const { login, loading, error, errMsg } = useLogin();
    const handleSubmit = async (e) => {
        e.preventDefault();
        let inputData = { 
            user_name: name, 
            password
         };
         console.log(inputData);
         
        let url = BASE_URL + '/login';
        await login(url, inputData);
      };

    
  return (
    <div className='h-screen py-4 '>
      <div className="authContainer gradientBg rounded-3">
        <div className="row authContainerHeader cursor-pointer">
            {/* <div onClick={()=>setSelectedTab(2)} className={`col-6 py-3 px-2 text-center ${selectedTab!==1 && 'authTabBg' } `}>
                <p className='fw-semibold'>Register</p>
            </div> */}
            <div onClick={()=>setSelectedTab(1)} className={`col-6 py-3  px-2 text-center ${selectedTab!==2 && 'authTabBg' } `}>
                <p className='fw-semibold' >Login</p>
            </div>
        </div>
        <div className="p-4">
            {selectedTab===2 && <>
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
             {selectedTab===1 && <>
                {/* <div className="mb-3">
                    <small className='mb-2 d-block'>
                        <span className="text-danger">*</span> Phone Number
                        </small>
                    <div className="d-flex items-center gap-2 py-1 px-2 rounded-3 customInput">
                        <img src={ph} className='inputImg mt-1' />
                        <input type="text" />
                    </div>
                </div> */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <small className='mb-2 d-block'>
                            <span className="text-danger">*</span> Username
                        </small>
                        <div className="d-flex items-center gap-2 py-1 px-2 rounded-3 customInput">
                            <img src={acc} className='inputImg mt-1' />
                            <input type="text" 
                            onChange={e => setName(e.target.value)}
                            value={name}
                            />
                        </div>
                        {error && error.user_name && <span className='text-danger'>*{error.user_name}</span>}
                        {errMsg && <span className='text-danger'>*{errMsg}</span>}
                    </div>
                    <div className="mb-4">
                        <small className='mb-2 d-block'>
                            <span className="text-danger">*</span> Password
                            </small>
                        <div className="d-flex items-center gap-2 py-1 px-2 rounded-3 customInput">
                            <img src={pw} className='inputImg mt-1' />
                            <input type="password" 
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            />
                        </div>
                        {error && error.password && <span className='text-danger'>*{error.password}</span>}
                    </div>
                    <button type='submit' className="btn2 fw-semibold mt-3 text-white w-full py-2 text-center rounded-3">
                    {loading ? <Spinner className='me-1' animation="border" size="sm" /> : ""}
                    Login
                    </button>
                </form>
             </>}
        </div>
      </div>
    </div>
  )
}

export default AuthPage
