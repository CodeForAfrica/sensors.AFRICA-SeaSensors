import React, {Component} from 'react'
import {withStyles, createStyles} from '@material-ui/styles'
import HeaderImage1 from '../../assets/map.png'
import HeaderImage2 from '../../assets/HeaderImage2.png'
import grid from '../../assets/grid.png'
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

const Image = () => <div><img src={grid} alt="grid"/></div>

const styles = createStyles({
    carouselParent: {
        height: "615px",
        maxHeight: "615px",
        width: "100%"
    },
    headerImage: {
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
    }
})

function HeaderCarousel(props) {
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
                                className={props.classes.headerImage}
                                src={HeaderImage1}
                                alt="First slide"/>
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
                                className={props.classes.headerImage}
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

export default withStyles(styles)(HeaderCarousel);