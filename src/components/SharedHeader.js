import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';

import arrowBack from '../assets/arrowWhite.png';

import Navigation from './Navigation';

const styles = theme => ({
  resourceImage: {
    width: '100%',
    height: '480px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 35%',
    top: '0',
    left: '0',
    [theme.breakpoints.up('md')]: {
      height: '786px'
    }
  },

  parentHeaderText: {
    position: 'absolute',
    top: '20%',
    padding: '0 5%',
    [theme.breakpoints.up('md')]: {
      top: '30%'
    }
  },
  subtitleRule: {
    width: '22.5px',
    height: '2px',
    backgroundColor: '#ffffff',
    marginRight: '20px'
  },
  mediaResources: {
    height: '142px',
    fontFamily: 'Oswald',
    fontSize: '45px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: '0.6px',
    lineHeight: '1.1',
    color: '#ffffff',
    marginBottom: '2em',
    [theme.breakpoints.up('md')]: {
      fontSize: '88px',
      height: '115.5px',
      letterSpacing: '0.8px'
    }
  },
  arrowBack: {
    transform: 'rotate(180deg)',
    display: 'flex',
    position: 'relative',
    justifyContent: 'flex-end'
  },
  arrowStyle: {
    width: '40px',
    height: '8px'
  },
  subText: {
    textTransform: 'uppercase',
    color: '#ffffff',
    fontFamily: 'Oswald',
    fontSize: '8px',
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: '2.75',
    letterSpacing: '4.8px'
  }
});

function SharedHeader(props) {
  const { mediaResources, classes, link, subTitle } = props;
  return (
    <div className={classes.resourceImage}>
      <Navigation />
      <div className={classes.parentHeaderText}>
        {subTitle.length > 0 && (
          <Typography className={classes.subText}>{subTitle}</Typography>
        )}
        <Typography
          variant="body1"
          gutterBottom
          className={classes.mediaResources}
        >
          {mediaResources}
        </Typography>
        <div className={classes.arrowBack}>
          <a href={link}>
            <img
              src={arrowBack}
              alt="Arrow back"
              className={classes.arrowStyle}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

SharedHeader.defaultProps = {
  subTitle: ''
};

SharedHeader.propTypes = {
  classes: PropTypes.shape().isRequired,
  mediaResources: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  subTitle: PropTypes.string
};

export default withStyles(styles)(SharedHeader);
