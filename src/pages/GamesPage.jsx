import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import all from '../assets/images/all.png'
import useFetch from '../hooks/useFetch';
import BASE_URL from '../hooks/baseUrl';
import { Spinner } from 'react-bootstrap';
import launchGame from '../hooks/LaunchGame';

const GamesPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [type, setType] = useState(1);
  const [providers, setProviders] = useState([]);
  const [gameLists, setGameLists] = useState([]);
  let provider = searchParams.get('provider') ?? "";
  let gameType = searchParams.get('type');
  const { data } = useFetch(BASE_URL + '/gameTypeProducts/' + type);
  let gameProviders = data?.products;
  
  const [selectedTab, setSelectedTab] = useState('');
  
  const {data: games, loading} = useFetch(BASE_URL + '/gamelist/' + selectedTab + '/' + type);
  const {data: hotGames} = useFetch(BASE_URL + '/hotgamelist');

  const selectProvider = (id) => {
    setSelectedTab(id);
    navigate('/games?type='+gameType+'&provider='+id);
  }
  
  useEffect(() => {
    if (gameType === 'hot') {
      setType(1);
      setGameLists(hotGames);
    } else if (gameType === 'slot') {
      setType(2);
      setProviders(gameProviders);
    } else if (gameType === 'casino') {
      setType(6);
      setProviders(gameProviders);
    }
  
    if (gameProviders?.length > 0) {
      setSelectedTab(gameProviders[0].id);
    }
  }, [searchParams, gameProviders, gameType, hotGames]);
  
  useEffect(() => {
    if (provider) {
      setSelectedTab(provider);
    }
  }, [provider, selectedTab]);
  
  

  return (
    <div className='pt-4 px-4 pb-5' style={{ overflow: 'hidden' }}>
      <h5>{type == 1 ? 'Hot Games' : type == 2 ? 'Slot Games' : type == 6 ? 'Casino Games' : ''}</h5>
      <div className="cursor-pointer d-flex align-items-center gap-2 gameProviders">
        {providers?.map((item, index) => {
          return <div onClick={() => selectProvider(item.id)} key={index} className={` btn1 ${selectedTab == item.id && 'activeProviderTab'} py-1 px-2 rounded-2 d-flex align-items-center gap-2`}>
            {/* <img src={item.providerImg} className='providerImg' /> */}
            <small className='providerText'>{item.provider_code}</small>
          </div>
        })}
      </div>
      <div className="row my-4">
        {
          loading ? <Spinner /> : (
            games && games?.map((game,index)=>(
              <div className='col-3 mb-2 mb-sm-3 cursor-pointer' key={index} onClick={launchGame(game.game_code)}>
                <img src={game.image_url} className='img-fluid rounded-4 w-100' style={{ minHeight: '80px'}} />
                <small className='d-block text-center gameName'>{game.game_name}</small>
              </div>
            ))
          )
        }
        {
          type == 1 && hotGames && hotGames?.map((game, index) => (
              <div className='col-3 px-1 px-sm-2 mb-2 mb-sm-3 cursor-pointer' key={index} onClick={launchGame(game.game_type_id, game.product_code, game.code)}>
                <img src={game.image_url} className='img-fluid rounded-4 gameImg' />
                {/* <small className='d-block text-center gameName' style={{ fontSize: '9px' }}>{game.game_name}</small> */}
              </div>
          ))
        }
      </div> 
    </div>
  )
}

export default GamesPage
