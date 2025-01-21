import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import all from '../assets/images/all.png'
import useFetch from '../hooks/useFetch';
import BASE_URL from '../hooks/baseUrl';
import { Spinner } from 'react-bootstrap';
import launchGame from '../hooks/LaunchGame';
import Filter from '../components/Filter';
import Games from '../components/Games';

const GamesPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [type, setType] = useState(1);
  const [providers, setProviders] = useState([]);
  const [gameLists, setGameLists] = useState([]);
  const [filter, setFilter] = useState('');
  let provider = searchParams.get('provider') ?? "";
  let gameType = searchParams.get('type');
  const { data } = useFetch(BASE_URL + '/gameTypeProducts/' + type);
  let gameProviders = data?.products;

  const [selectedTab, setSelectedTab] = useState('');

  const handleFilter = (value) => {
    setFilter(value);
  }

  let game_names = [];
  const { data: games, loading } = useFetch(BASE_URL + '/gamelist/' + selectedTab + '/' + type + '?name=' + filter);
  game_names = games?.map((game) => game.game_name);

  const { data: hotGames } = useFetch(BASE_URL + '/hotgamelist');
  const { data: fishingGames } = useFetch(BASE_URL + '/slotfishgamelist/4/2');
  console.log(fishingGames);
  

  const selectProvider = (id) => {
    setSelectedTab(id);
    navigate('/games?type=' + gameType + '&provider=' + id);
  }

  useEffect(() => {
    if (gameType === 'hot') {
      setType(1);
      setGameLists(hotGames);
    } else if (gameType === 'fishing') {
      setType(0);
      setGameLists(fishingGames);
    }else if (gameType === 'slot') {
      setType(2);
      setProviders(gameProviders);
    } else if (gameType === 'arcade') {
      setType(4);
      setProviders(gameProviders);
    } else if (gameType === 'table') {
      setType(5);
      setProviders(gameProviders);
    } else if (gameType === 'casino') {
      setType(6);
      setProviders(gameProviders);
    } else if (gameType === 'lottery') {
      setType(8);
      setProviders(gameProviders);
    } else if (gameType === 'bingo') {
      setType(9);
      setProviders(gameProviders);
    }

    if (gameProviders?.length > 0) {
      setSelectedTab(gameProviders[0].id);
    }
  }, [searchParams, gameProviders, gameType, hotGames, fishingGames]);

  useEffect(() => {
    if (provider) {
      setSelectedTab(provider);
    }
  }, [provider, selectedTab]);



  return (
    <div className='pt-4 px-2 pb-5' style={{ overflow: 'hidden' }}>
      <h5>{type == 0 ? 'Fishing' : type == 1 ? 'Hot Games' : type == 2 ? 'Slot Games' : type == 4 ? 'Arcade Games' : type == 5 ? 'Table Games' : type == 6 ? 'Casino Games' : type == 8 ? 'Lottery Games' : type == 9 ? 'Bingo Games' : ''}</h5>
      <div className="cursor-pointer d-flex align-items-center gap-2 gameProviders">
        {providers?.map((item, index) => {
          return <div onClick={() => selectProvider(item.id)} key={index} className={` btn1 ${selectedTab == item.id && 'activeProviderTab'} py-1 px-2 rounded-2 d-flex align-items-center gap-2`}>
            {/* <img src={item.providerImg} className='providerImg' /> */}
            <small className='providerText'>{item.provider_code}</small>
          </div>
        })}
      </div>
      {gameType !== 'hot' && gameType !== 'fishing' && (
        <div className='d-flex justify-content-end pt-3 px-2'>
          <Filter game_names={game_names} handleFilter={handleFilter} />
        </div>
      )}

      <div className="row my-4">
        {
          loading ? <Spinner /> : (
            games && games?.map((game, index) => (
              <div className='col-3 mb-2 mb-sm-3 cursor-pointer' key={index} onClick={launchGame(game.game_code)}>
                <img src={game.image_url} className='img-fluid rounded-4 w-100' />
                <small className='d-block text-center mt-2' style={{ fontSize: '10px' }}>{game.game_name}</small>
              </div>
            ))
          )
        }
        { type == 0 && <Games games={fishingGames} /> }
        { type == 1 && <Games games={hotGames} /> }
      </div>
    </div>
  )
}

export default GamesPage
