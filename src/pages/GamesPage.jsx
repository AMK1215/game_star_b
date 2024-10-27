import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { casinoAllGames, casinoGames, fishAllGames, fishGames, hotAllGames, hotGames, slotAllGames, slotGames, sportAllGames, sportGames } from '../const/data';
import all from '../assets/images/all.png'

const GamesPage = () => {
  const [selectedTab,setSelectedTab]=useState('All')
    const [searchParams]=useSearchParams();
    let  games;
    if(searchParams.get('type')==='slot'){
      games=slotGames
    }
    if(searchParams.get('type')==='casino'){
      games=casinoGames
    }
    if(searchParams.get('type')==='fishing'){
      games=fishGames
    }
    if(searchParams.get('type')==='sport'){
      games=sportGames
    }
    if(searchParams.get('type')==='hot'){
      games=hotGames
    }
    let filteredGames ;
    if(selectedTab=='All' && searchParams.get('type')==='slot') filteredGames=[...slotAllGames]
      if(selectedTab!=='All' && searchParams.get('type')==='slot')
    filteredGames=slotGames.filter((games)=>games.providerName===selectedTab)[0]?.games
      if(selectedTab=='All' && searchParams.get('type')==='casino') filteredGames=[...casinoAllGames]
      if(selectedTab!=='All' && searchParams.get('type')==='casino')
        filteredGames=casinoGames.filter((games)=>games.providerName===selectedTab)[0]?.games
      if(selectedTab=='All' && searchParams.get('type')==='fishing') filteredGames=[...fishAllGames]
      if(selectedTab!=='All' && searchParams.get('type')==='fishing')
        filteredGames=fishGames.filter((games)=>games.providerName===selectedTab)[0]?.games
      if(selectedTab=='All' && searchParams.get('type')==='sport') filteredGames=[...sportAllGames]
      if(selectedTab!=='All' && searchParams.get('type')==='sport')
        filteredGames=sportGames.filter((games)=>games.providerName===selectedTab)[0]?.games
      if(selectedTab=='All' && searchParams.get('type')==='hot') filteredGames=[...hotAllGames]
      if(selectedTab!=='All' && searchParams.get('type')==='hot')
        filteredGames=hotGames.filter((games)=>games.providerName===selectedTab)[0]?.games
  console.log('filteredGames',filteredGames)
  return (
    <div className='p-3'>
      {/* {searchParams.get('type')} {selectedTab} */}
      <div className="cursor-pointer d-flex align-items-center gap-2 gameProviders">
      <div  onClick={()=>setSelectedTab('All')}   className={` btn1 ${selectedTab==='All' && 'activeProviderTab' } py-1 px-2 rounded-2 d-flex align-items-center gap-2`}>
            <img src={all} className='providerImg ' />
            <small className='providerText'>All</small>
          </div>
        {games?.map((item,index)=>{
          return <div onClick={()=>setSelectedTab(item.providerName)} key={index} className={` btn1 ${selectedTab===item.providerName && 'activeProviderTab' } py-1 px-2 rounded-2 d-flex align-items-center gap-2`}>
            <img src={item.providerImg} className='providerImg' />
            <small className='providerText'>{item.providerName}</small>
          </div>
        })}
      </div>
       <div className="row my-4">
        {filteredGames?.map((game,index)=>{
          return <div className='col-3 px-1 px-sm-2 mb-2 mb-sm-3' key={index}>
            <img src={game.img} className='img-fluid rounded-4 gameImg' />
            <small className='d-block text-center gameName'>{game.name}</small>
          </div>
        })}
      </div> 
    </div>
  )
}

export default GamesPage
