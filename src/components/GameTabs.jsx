import React from 'react'
import hot from '../assets/images/hot.png'
import slot from '../assets/images/slot.png'
import sport from '../assets/images/sport.png'
import casino from '../assets/images/casino.png'
import fishing from '../assets/images/fishing.png'
import '../assets/css/gameTabs.css'
import { Link } from 'react-router-dom'
import { casinoAllGames, fishAllGames, hotAllGames, slotAllGames, sportAllGames } from '../const/data'

const GameTabs = () => {
    const tabs=[
        {img:hot,name:"Hot",value:'hot'},
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
      <div className='mb-4'>
        <h5 className='fw-semibold mt-3 mb-2'>Popular Games We Love</h5>
        <div className="homeGamesContainer py-2 d-flex align-items-center gap-2 flex-nowrap cursor-pointer">
          {hotAllGames.map((game,index)=>{
            return <div key={index} className='homeGame'>
               <img src={game.img} className='homeGameImg img-fluid  rounded-4 '   />
              <small className='gameName text-center d-block'>{game.name}</small>
            </div>
          })}
        </div>
      </div>
      <div className='mb-4'>
        <h5 className='fw-semibold mt-3 mb-2'>Best Slot Games</h5>
        <div className="homeGamesContainer py-2 d-flex align-items-center gap-2 flex-nowrap cursor-pointer">
          {slotAllGames.map((game,index)=>{
            return <div key={index} className='homeGame'>
               <img src={game.img} className='homeGameImg img-fluid  rounded-4 '   />
              <small className='gameName text-center d-block'>{game.name}</small>
            </div>
          })}
        </div>
      </div>
      <div className='mb-4'>
        <h5 className='fw-semibold mt-3 mb-2'>Best Casino Games</h5>
        <div className="homeGamesContainer py-2 d-flex align-items-center gap-2 flex-nowrap cursor-pointer">
          {casinoAllGames.map((game,index)=>{
            return <div key={index} className='homeGame'>
               <img src={game.img} className='homeGameImg img-fluid  rounded-4 '   />
              <small className='gameName text-center d-block'>{game.name}</small>
            </div>
          })}
        </div>
      </div>
      <div className='mb-4'>
        <h5 className='fw-semibold mt-3 mb-2'>Best Fishing Games</h5>
        <div className="homeGamesContainer py-2 d-flex align-items-center gap-2 flex-nowrap cursor-pointer">
          {fishAllGames.map((game,index)=>{
            return <div key={index} className='homeGame'>
               <img src={game.img} className='homeGameImg img-fluid  rounded-4 '   />
              <small className='gameName text-center d-block'>{game.name}</small>
            </div>
          })}
        </div>
      </div>
      <div className='mb-4'>
        <h5 className='fw-semibold mt-3 mb-2'>Best Sport Games</h5>
        <div className="homeGamesContainer py-2 d-flex align-items-center gap-2 flex-nowrap cursor-pointer">
          {sportAllGames.map((game,index)=>{
            return <div key={index} className='homeGame'>
               <img src={game.img} className='homeGameImg img-fluid  rounded-4 '   />
              <small className='gameName text-center d-block'>{game.name}</small>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default GameTabs
