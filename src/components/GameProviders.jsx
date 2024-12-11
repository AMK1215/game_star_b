import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function GameProviders({providers, type}) {
    const navigate = useNavigate();
    const getGameList = (gameType, provider) => {
        let type = gameType === 2 ? 'slot' : gameType === 6 ? "casino" : "";
        navigate('/games?type=' + type + '&provider=' + provider);
        // console.log(provider);
    }
    
    return (
        <div>
            <div className="homeGamesContainer py-2 d-flex align-items-center gap-2 flex-nowrap cursor-pointer">
                {providers && providers.map((game, index) => {
                    return <Link key={index} className='homeGame cursor-pointer' onClick={() => getGameList(type, game.id)}
                    >
                        <img src={game.imgUrl} className='homeGameImg img-fluid  rounded-4 '/>
                        <small className='gameName text-center d-block'>{game.provider_name}</small>
                    </Link>
                })}
            </div>
        </div>
    )
}
