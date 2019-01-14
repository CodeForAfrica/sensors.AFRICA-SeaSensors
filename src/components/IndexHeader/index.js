import React, { Component } from 'react';
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  View,
  Mask,
} from 'mdbreact';
import { withStyles } from '@material-ui/core';
import HeaderImage1 from '../../assets/map.png';
import HeaderImage2 from '../../assets/HeaderImage2.png';
import gridImage from '../../assets/grid.png';
import NavBar from '../NavBar';
import IndexHeaderText from '../IndexHeaderText';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const styles = {
  carouselParent: {
    height: '615px',
    maxHeight: '615px',
    width: '100%',
  },
  headerImage: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    width: '100%',
  },
  grid: {
    position: 'absolute',
    bottom: '23em',
    left: '65em',
  },
  parentSlider: {
    display: 'flex',
    justifyContent: 'flex-start',
    position: 'absolute',
    color: '#ffffff',
    top: '34.6em',
    zIndex: '999',
    left: '3.1em',
  },
  firstSlider: {
    marginRight: '7em',
  },
};

const Image = () => (
  <div>
    <img
      src={gridImage}
      style={{
        height: '8em',
      }}
      alt="grid"
    />
  </div>
);

class IndexHeaderCarousel extends Component {
  componentDidMount() {
    this.toggleCarouselControls();
  }

    toggleCarouselControls = () => {
      if (document.querySelector('.carousel-control-next-icon') !== null) {
        const button = document.querySelector('.carousel-control-next-icon');
        const indicator1 = document.querySelector('.carousel-indicators li:nth-child(1)');
        const indicator2 = document.querySelector('.carousel-indicators li:nth-child(2)');

        button.onclick = () => {
          if (button.classList.contains('arrow-left')) {
            button.classList.remove('arrow-left');
          } else {
            button.classList.add('arrow-left');
          }
        };
        indicator1.onclick = () => {
          button.classList.remove('arrow-left');
        };
        indicator2.onclick = () => {
          button.classList.add('arrow-left');
        };
      }
    };

    render() {
      const { classes } = this.props;
      const {
        headerImage,
        grid,
        firstSlider,
        parentSlider,
      } = classes;
      return (
        <div className="carousel-parent">
          <MDBCarousel
            activeItem={1}
            length={2}
            showControls
            showIndicators
            interval={18000000}
            className="z-depth-1"
          >
            <div className={parentSlider}>
              <div className={firstSlider}>01</div>
              <div>02</div>
            </div>
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <View>
                  <img
                    className={headerImage}
                    src={HeaderImage1}
                    alt="First slide"
                  />
                  <Mask overlay="black-light" />
                </View>
                <MDBCarouselCaption>
                  <NavBar />
                  <IndexHeaderText />
                </MDBCarouselCaption>
                <MDBCarouselCaption>
                  <div className={grid}><Image /></div>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <View>
                  <img
                    className={headerImage}
                    src={HeaderImage2}
                    alt="Second slide"
                  />
                </View>
                <MDBCarouselCaption>
                  <NavBar />
                </MDBCarouselCaption>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </div>
      );
    }
}

export default withStyles(styles)(IndexHeaderCarousel);
