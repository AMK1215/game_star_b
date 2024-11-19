import React, { useContext } from 'react'
import '../assets/css/home.css'
import Banners from '../components/Banners'
import Marquee from '../components/Marquee'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { FaRegBell, FaRegCommentDots } from 'react-icons/fa6'
import deposit from '../assets/images/deposit.png'
import withdraw from '../assets/images/withdraw.png'
import GameTabs from '../components/GameTabs'
import { Link } from 'react-router-dom'
import AdsBanner from '../components/AdsBanner'
import { LanguageContext } from '../contexts/LanguageContext'
import { BiDownload } from 'react-icons/bi'

 const HomePage = () => {
  const { content } = useContext(LanguageContext);

  return (
    <div>
      <AdsBanner/>
      <div className="cursor-pointer px-2 py-2 d-flex align-items-center justify-content-between">
        <div className='d-flex align-items-center gap-4'>
            <Link to={'/deposit'} className="d-flex align-items-center gap-1">
              <img src={deposit} className='moneyImg' />
              <small>{content?.wallet?.deposit}</small>
            </Link>
            <Link to={'/with-draw'} className="d-flex align-items-center gap-1">
              <img src={withdraw} className='moneyImg' />
              <small>{content?.wallet?.withdraw}</small>
            </Link>
        </div>
        <Link to={'https://gamestar77.online/game_star.apk'} target='_blank' className='d-flex align-items-center gap-3'>
          <BiDownload size={22} />
          <small>
            {content?.nav?.download}
          </small>
          {/* <FaRegCommentDots size={22} /> */}
          {/* <FaRegBell size={22} /> */}
        </Link>
      </div>
      <Banners/>
      <Marquee/>
      <GameTabs/>
    </div>
  )
}

export default HomePage
