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
      height: '50rem'
    },
    '& .control-dots': {
      display: 'flex',
      width: '15.625rem',
      [theme.breakpoints.up('md')]: {
        width: '21.875rem'
      }
    },
    '& .carousel .control-dots .dot': {
      borderRadius: '0.0625rem',
      width: '50%',
      height: '0.25rem'
    },
    '& .carousel.carousel-slider .control-arrow': {
      top: 'initial',
      bottom: '9.5%',
      background: '#fff',
      padding: '1.25rem',
      [theme.breakpoints.up('md')]: {
        top: '40%',
        bottom: 'initial'
      }
    }
  },
  slide1: {
    height: '100%',
    backgroundImage: `url(${map})`,
    backgroundPosition: '-40.625rem',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    [theme.breakpoints.up('md')]: {
      backgroundPosition: '-18.75rem'
    }
  },
  slide2: {
    backgroundImage: `url(${HeaderImage2})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    height: '100%'
  },
  indicator: {
    fontFamily: 'Oswald',
    fontSize: '0.6875rem',
    fontWeight: 'bold',
    letterSpacing: '0.0313rem',
    textAlign: 'justify',
    display: 'flex',
    position: 'absolute',
    color: '#fff',
    bottom: '5rem',
    left: '3rem',
    '& > :first-child': {
      marginRight: '6rem',
      [theme.breakpoints.up('md')]: {
        marginRight: '9rem'
      }
    }
  }
});

function SliderCarousel(props) {
  const { classes } = props;
  return (
    <Carousel className={classes.root} showStatus={false}>
      {/* First Slide */}
      <div className={classes.slide1}>
        <HeaderText />
        <div className={classes.indicator}>
          <div>01</div>
          <div>02</div>
        </div>
      </div>
      {/* Second Slide */}
      <div className={classes.slide2}>
        <Wave />
        <img alt="" />
        <div className={classes.indicator}>
          <div>01</div>
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
