import React, {Component} from 'react'
import map from '../../assets/map.png'
import HeaderImage2 from '../../assets/HeaderImage2.png'
import grid from '../../assets/grid.png'
import seaLogoImg from '../../assets/SeaSensors_Logo-10.png';
import NavBar from '../MenuBar/NavBar.js';
import HeaderText from '../HeaderText/HeaderText';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
    MDBCarousel,
    MDBCarouselCaption,
    MDBCarouselInner,
    MDBCarouselItem,
    View,
    Mask
} from "mdbreact";
import './Header.css'

const Image = () => <div><img src={grid}/></div>

class HeaderCarousel extends Component {
    render() {
        return (
            <div className="carousel-parent">
                <MDBCarousel
                    activeItem={1}
                    length={2}
                    showControls={true}
                    showIndicators={true}
                    interval={18000000}
                    className="z-depth-1">
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                            <View>
                                <img className="d-block w-100" src={map} alt="First slide"/>
                                <Mask overlay="black-light"/>
                            </View>
                            <MDBCarouselCaption>
                                <NavBar/>
                                <HeaderText/>
                            </MDBCarouselCaption>
                            <MDBCarouselCaption>
                                <Image/>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <View>
                                <img
                                    className="d-block w-100"
                                    src={HeaderImage2}
                                    alt="Second slide"
                                    style={{
                                    width: "100%"
                                }}/>
                            </View>
                            <MDBCarouselCaption>
                                <NavBar/>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </div>
        );
    }
}

export default HeaderCarousel