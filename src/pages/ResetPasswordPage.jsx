import React from 'react'

const ResetPasswordPage = () => {
  return (
    <div className='depositBg p-3'>
      <h5 className="fw-semibold text-center mb-4 text-center">Reset Password</h5>
      <div className="mb-3">
                <small className="customInputTitle">Old Password</small>
                <input type="password" className='w-full customInput' />
            </div>
            <div className="mb-3">
                <small className="customInputTitle">New Password</small>
                <input type="password" className='w-full customInput' />
            </div>
            <div className="mb-3">
                <small className="customInputTitle">Confirm Password</small>
                <input type="password" className='w-full customInput' />
            </div>
            <button className="mt-4 py-2 text-white btn2 w-full rounded-5">
                Submit
            </button>
    </div>
  )
}

export default ResetPasswordPage
