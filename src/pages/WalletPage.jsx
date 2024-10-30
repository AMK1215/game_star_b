import React, { useContext, useState } from 'react'
import '../assets/css/wallet.css'
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import useFetch from '../hooks/useFetch';
import BASE_URL from '../hooks/baseUrl';


const WalletPage = () => {
  const { user } = useContext(AuthContext);
  const [selectedTab, setSelectedTab] = useState(1);
  const tabs = [
    { name: 'Deposit', value: 1 },
    { name: 'Withdraw', value: 2 },
  ];
  const { data: deposit } = useFetch(BASE_URL + "/transaction/deposit-log");
  const { data: withdraw } = useFetch(BASE_URL + "/transaction/withdraw-log");
  // console.log(withdraw);


  return (
    <div className=''>
      <div className="gradientBg text-center pt-4 pb-5">
        <small className="d-block b-2">Wallet Balance</small>
        <h2 className="fw-semibold">K {user?.balance}</h2>
        <div className="row mt-3">
          <div className="col-6 px-2">
            <Link to={'/deposit'} className="rounded-5 depositBtn text-center py-2 px-4">
              Deposit
            </Link>
          </div>
          <div className="col-6 px-2">
            <Link to={'/with-draw'} className="rounded-5 border border-white withDrawBtn text-center py-2 px-4">
              Withdraw
            </Link>
          </div>
        </div>
      </div>
      <div className="profileBg rounded-5 p-3">
        <p className="d-block text-white mb-3">Transaction History</p>
        <div className="d-flex align-items-center flex-wrap gap-1 text-white mb-3">
          {tabs.map((tab, index) => {
            return <div key={index} onClick={() => setSelectedTab(tab.value)} className={`  py-2 px-2 ${selectedTab === tab.value ? 'activeBg' : ''}`}>
              <p className="px-1 px-sm-2 filterTime">{tab.name}</p>
            </div>
          })}

        </div>
        <div className="tableContainer">
          {selectedTab === 1 && (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Acc Name</th>
                  <th>Bank</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {deposit && deposit.map((item, index) => (
                  <tr key={index}>
                    <td>{++index}</td>
                    <td>{item.account_name}</td>
                    <td>{item.payment_type}</td>
                    <td className='text-success'>
                      Deposit
                    </td>
                    <td>{item.amount}</td>
                    <td className={`${item.status == "Reject" ? "text-danger" : item.status == "Pending" ? "text-warning" : "text-success"}`}>
                      {item.status}
                    </td>
                    <td>{item.datetime}</td>
                  </tr>
                ))}

              </tbody>
            </Table>
          )}
          {selectedTab === 2 && (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Acc Name</th>
                  <th>Bank</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {withdraw && withdraw.map((item, index) => (
                  <tr key={index}>
                    <td>{++index}</td>
                    <td>{item.account_name}</td>
                    <td>{item.payment_type}</td>
                    <td className='text-danger'>
                      Withdraw
                    </td>
                    <td>{item.amount}</td>
                    <td className={`${item.status == "Reject" ? "text-danger" : item.status == "Pending" ? "text-warning" : "text-success"}`}>
                      {item.status}
                    </td>
                    <td>{item.datetime}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}

        </div>
      </div>
    </div>
  )
}

export default WalletPage
