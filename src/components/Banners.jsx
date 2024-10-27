import React from 'react'
import { Carousel } from 'react-bootstrap'

const Banners = () => {
    const banners=[
        'https://www.burma368.net/cms-profile/file/2024/07/18/B590..236_20240718151456A035.png',
        'https://www.burma368.net/cms-profile/file/2024/07/16/B%20590..236_20240716175451A004.png',
        'https://www.burma368.net/cms-profile/file/2024/07/16/B%20%20590..236_20240716175435A003.png',
        'https://www.burma368.net/cms-profile/file/2024/07/18/590..236_20240718152300A041.png'
    ]
  return (
    <div>
       <Carousel>
        {banners.map((banner,index)=>{
            return  <Carousel.Item key={index} > 
                <img src={banner} className='img-fluid' />
            </Carousel.Item>
        })}
      </Carousel>
    </div>
  )
}

export default Banners
