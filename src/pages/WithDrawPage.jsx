import React from 'react'

const WithDrawPage = () => {
  return (
    <div className='depositBg p-3'>
      <h5 className="fw-semibold text-center mb-4 text-center">With Draw</h5>
      <div className="mb-3">
                <small className="customInputTitle">With Draw Amount</small>
                <input type="text" className='w-full customInput' />
            </div>
      <div className="mb-3">
                <small className="customInputTitle">Bank Account</small>
                <select  className='w-full mt-2 rounded-2  py-1 px-2 customInput  text-black'>
                    <option value="">Kpay - 0912345689</option>
                    <option value="">Wave  - 0912345689</option>
                </select>
            </div>
             <div className="mb-3">
                <small className="customInputTitle">Remark</small>
                <input type="text" className='w-full customInput' />
            </div>
            <button className="mt-4 py-2 text-white btn2 w-full rounded-5">
                Submit
            </button>
    </div>
  )
}

export default WithDrawPage
