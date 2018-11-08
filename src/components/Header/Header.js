import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  { Carousel } from 'react-responsive-carousel'
import  map  from '../../assets/map.png'
import './Header.css'

const HeaderCarousel = () => {
    return (
        <div>
        
        <Carousel showArrows={true} showThumbs={false} className=
        'carousel'>
            <div>
                <img src= {map}/>
            </div>
            <div>
                <img src= {map}/>
            </div>
        </Carousel>
        </div>
    )
}

export default HeaderCarousel