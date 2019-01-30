import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { withStyles } from '@material-ui/core';
import HeaderImage1 from '../../assets/map.png';
import HeaderImage2 from '../../assets/HeaderImage2.png';
import gridImage from '../../assets/grid.png';
import Navigation from './Navigation';
import HeaderText from './HeaderText';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const styles = {
  headerImage: {
    backgroundSize: 'contain',
  },
  grid: {
    position: 'absolute',
    bottom: '32em',
    right: '7%',
  },
  parentSlider: {
    display: 'flex',
    justifyContent: 'flex-start',
    position: 'absolute',
    color: '#ffffff',
    top: '43em',
    zIndex: '999',
    left: '3.1em',
  },
  firstSlider: {
    marginRight: '8.5em',
  },
};

const Image = () => (
  <div>
    <img
      src={gridImage}
      style={{
        height: 164,
        width: 112,
        position: 'fixed',
        top: '8em',
        right: '6em',
      }}
      alt="grid"
    />
  </div>
);

class SliderCarousel extends Component {
  render() {
    const { classes } = this.props;
    const {
      headerImage,
      grid,
      parentSlider,
      firstSlider,
    } = classes;
    return (
      <Carousel
        showStatus={false}
      >
        <div>
          <img src={HeaderImage1} alt="First Slide" className={headerImage} />
          <Navigation />
          <HeaderText />
          <div className={grid}><Image /></div>
          <div className={parentSlider}>
            <div className={firstSlider}>01</div>
            <div>02</div>
          </div>
        </div>
        <div>
          <img src={HeaderImage2} alt="Second Slide" />
          <Navigation />
          <div className={parentSlider}>
            <div className={firstSlider}>01</div>
            <div>02</div>
          </div>
        </div>
      </Carousel>
    );
  }
}

export default withStyles(styles)(SliderCarousel);
