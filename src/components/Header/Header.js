import React, {Component} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'
import map from '../../assets/map.png'
import grid from '../../assets/grid.png'
import SimpleTabs from '../MenuBar/MenuBar'
import HeaderText from '../HeaderText/HeaderText';
import './Header.css'

class HeaderCarousel extends Component {
    render() {
        return <div>
            <Carousel showArrows={true} showThumbs={false} className='carousel'>
                <div>
                    <div className="gridParent">
                        <img src={map} alt=""/>
                    </div>
                    <div className="gridSize">
                        <img src={grid}/>
                    </div>
                </div>
                <div>
                    <img src={map} alt="" className="carousel-2"/>
                </div>
            </Carousel>
        </div>
    }

}

export default HeaderCarousel