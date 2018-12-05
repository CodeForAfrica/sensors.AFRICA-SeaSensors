import React, {Component} from 'react'
import Slider from "react-slick";
import './Carousel.css'

class HeaderCarousel2 extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
            </Slider>
        );
    }
}

export default HeaderCarousel2;