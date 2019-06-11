import React from 'react';
import PropTypes from 'prop-types';

import { Carousel } from 'react-responsive-carousel';

import { withStyles } from '@material-ui/core';

import HeaderText from './HeaderText';
import Wave from './Wave';

import map from '../../assets/map.png';
import HeaderImage2 from '../../assets/HeaderImage2.png';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const styles = theme => ({
  root: {
    height: '100vh',
    '& .carousel-slider, .slider-wrapper, .slider': {
      height: '100%'
    },
    [theme.breakpoints.up('md')]: {
      height: '800px'
    }
  },
  slide1: {
    backgroundImage: `url(${map})`,
    backgroundPosition: '-350px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    height: '100%',
    '& img': {
      objectFit: 'cover',
      height: '100%'
    },
    [theme.breakpoints.up('md')]: {
      backgroundPosition: 'unset'
    }
  },
  slide2: {
    backgroundImage: `url(${HeaderImage2})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    height: '100%',
    '& img': {
      objectFit: 'cover',
      height: '100%'
    }
  },
  grid: {
    position: 'absolute',
    bottom: '32em',
    right: '7%'
  },
  parentSlider: {
    display: 'flex',
    justifyContent: 'flex-start',
    position: 'absolute',
    color: '#ffffff',
    zIndex: '999',
    top: '40rem',
    left: '3rem'
  },
  firstSlider: {
    marginRight: '8.5em'
  },
  waving: {
    display: 'block !important',
    position: 'absolute !important',
    userSelect: 'none !important',
    height: '60% !important',
    width: '100% !important',
    bottom: '1em !important'
  }
});

function SliderCarousel(props) {
  const { classes } = props;
  return (
    <Carousel className={classes.root} showStatus={false}>
      {/* First Slide */}
      <div className={classes.slide1}>
        <HeaderText />
        <div className={classes.parentSlider}>
          <div className={classes.firstSlider}>01</div>
          <div>02</div>
        </div>
      </div>
      {/* Second Slide */}
      <div className={classes.slide2}>
        <Wave />
        <img alt="" />
        <div className={classes.parentSlider}>
          <div className={classes.firstSlider}>01</div>
          <div>02</div>
        </div>
      </div>
    </Carousel>
  );
}

SliderCarousel.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(SliderCarousel);
