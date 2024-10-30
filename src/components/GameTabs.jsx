import React from 'react'
import hot from '../assets/images/hot.png'
import slot from '../assets/images/slot.png'
import sport from '../assets/images/sport.png'
import casino from '../assets/images/casino.png'
import fishing from '../assets/images/fishing.png'
import '../assets/css/gameTabs.css'
import { Link } from 'react-router-dom'

import HotGames from './HotGames'

const GameTabs = () => {
    const tabs=[
        // {img:hot,name:"Hot",value:'hot'},
        {img:slot,name:"Slot",value:'slot'},
        {img:casino,name:"Live Casino",value:'casino'},
        {img:fishing,name:"Fishing",value:'fishing'},
        {img:sport,name:"Sport",value:'sport'},
    ]
  return (
    <div className='px-2 py-3'>
      <div className="gameTabsHeading d-flex align-items-center gap-2">
            {tabs.map((tab,index)=>{
                return <Link to={'/games?type='+tab.value} key={index} className='cursor-pointer rounded-5 py-1 px-2 text-center gameTab d-flex align-items-center' >
                    <img src={tab.img} className='gameTabImg' />
                    <small className='ms-1 gameTabName'>{tab.name}</small>
                </Link>
            })}
      </div>
      {/* <HotGames /> */}
    </div>
  )
}

export default GameTabs
