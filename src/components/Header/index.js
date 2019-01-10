import React, {Component} from 'react'
import {withStyles} from '@material-ui/core'
import HeaderImage1 from '../../assets/map.png'
import HeaderImage2 from '../../assets/HeaderImage2.png'
import grid from '../../assets/grid.png'
import NavBar from '../NavBar';
import HeaderText from '../HeaderText';
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

const styles = {
    carouselParent: {
        height: "615px",
        maxHeight: "615px",
        width: "100%"
    },
    headerImage: {
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        width: "100%"
    },
    grid: {
        position: "absolute",
        bottom: "23em",
        left: "65em"
    }
}

const Image = () => <div><img src={grid} style={{
    height: "8em"
}} alt="grid"/></div>

class HeaderCarousel extends Component {
    componentDidMount() {
        this.toggleCarouselControls();
    }

    toggleCarouselControls = () => {
        if (document.querySelector('.carousel-control-next-icon') !== null) {
            let button = document.querySelector('.carousel-control-next-icon');
            let indicator1 = document.querySelector('.carousel-indicators li:nth-child(1)');
            let indicator2 = document.querySelector('.carousel-indicators li:nth-child(2)');

            button.onclick = () => {
                if (button.classList.contains("arrow-left")) {
                    button
                        .classList
                        .remove("arrow-left");
                } else {
                    button
                        .classList
                        .add("arrow-left");
                }
            }
            indicator1.onclick = () => {
                button
                    .classList
                    .remove("arrow-left");
            }
            indicator2.onclick = () => {
                button
                    .classList
                    .add("arrow-left");
            }
        }
    };

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
                                <img
                                    className={this.props.classes.headerImage}
                                    src={HeaderImage1}
                                    alt="First slide"/>
                                <Mask overlay="black-light"/>
                            </View>
                            <MDBCarouselCaption>
                                <NavBar/>
                                <HeaderText/>
                            </MDBCarouselCaption>
                            <MDBCarouselCaption>
                                <div className={this.props.classes.grid}><Image/></div>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <View>
                                <img
                                    className={this.props.classes.headerImage}
                                    src={HeaderImage2}
                                    alt="Second slide"/>
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

export default withStyles(styles)(HeaderCarousel);
