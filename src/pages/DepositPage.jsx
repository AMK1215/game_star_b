import React from 'react'

const DepositPage = () => {
  return (
    <div className='depositBg p-3'>
      <h5 className="fw-semibold text-center mb-4 text-center">Deposit</h5>
      <div className="mb-3">
                <small className="customInputTitle">Deposit Account</small>
                <select  className='w-full mt-2 rounded-2  py-1 px-2 customInput  text-black'>
                    <option value="">Kpay</option>
                    <option value="">Wave</option>
                </select>
            </div>
            <div className="mb-3">
                <small className="customInputTitle">Member Account Type</small>
                <select  className='w-full mt-2 rounded-2  py-1 px-2 customInput  text-black'>
                    <option value="">Kpay</option>
                    <option value="">Wave</option>
                </select>
            </div>
            <div className="mb-3">
                <small className="customInputTitle">Deposit Time</small>
                <input  type="date" className='w-full customInput' />
            </div>
            <div className="mb-3">
                <small className="customInputTitle">Deposit Amount</small>
                <input type="text" className='w-full customInput' />
            </div>
            <div className="mb-3">
                <small className="customInputTitle">Receipt Photo</small>
                <input type="file" className='w-full customInput' />
            </div>
            <button className="mt-4 py-2 text-white btn2 w-full rounded-5">
                Submit
            </button>
    </div>
  )
}

export default DepositPage
