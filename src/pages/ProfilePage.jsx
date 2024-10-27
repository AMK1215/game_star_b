import React from 'react'
import user from '../assets/images/profile.png'
import '../assets/css/profile.css'

const ProfilePage = () => {
  return (
    <div >
      <div className="gradientBg py-5 text-center">
      <img src={user} className='profileImg' />
      </div>
      <div className='profileBg rounded-top-5 p-3'>
            <div className="mb-3">
                <small className="customInputTitle">User Name</small>
                <input value={'user123'} type="text" className='w-full customInput' />
            </div>
            <div className="mb-3">
                <small className="customInputTitle">Phone Number</small>
                <input value={'0912345689'} type="text" className='w-full customInput' />
            </div>
            <button className="mt-4 py-2 text-white btn2 w-full rounded-5">
                Save
            </button>
      </div>
    </div>
  )
}

export default ProfilePage
