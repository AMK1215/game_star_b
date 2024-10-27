import React, { useState } from 'react'
import '../assets/css/wallet.css'
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const GameLogsPage = () => {
    const [selectedTab,setSelectedTab]=useState(1);
    const tabs=[
        {name:'Today',value:1},
         {name:'Yesterday',value:2},
          {name:'This Week',value:3}, 
          {name:'Last Week',value:4},
    ]
  return (
    <div className=''>
      <div className="gradientBg text-center pt-4 pb-5">
            <small className="d-block b-2">Wallet Balance</small>
            <h2 className="fw-semibold">K 0.00</h2>
           
       </div>
       <div className="profileBg rounded-5 p-3">
            <p className="d-block text-white mb-3">Game Logs</p>
            <div className="d-flex align-items-center flex-wrap gap-1 text-white mb-3">
       {tabs.map((tab,index)=>{
        return  <div key={index} onClick={()=>setSelectedTab(tab.value)} className={`  py-2 px-2 ${selectedTab===tab.value ? 'activeBg' :''}`}>
        <p className="px-1 px-sm-2 filterTime">{tab.name}</p>
    </div>
       })}

       </div>
    <div className="tableContainer">
    <Table className='mb-5' striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Game Result</th>
          <th>Balance</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Win</td>
          <td>1000</td>
          <td>{new Date().toDateString()}</td>
        </tr>

      </tbody>
    </Table>
    </div>
        </div>
    </div>
  )
}

export default GameLogsPage
