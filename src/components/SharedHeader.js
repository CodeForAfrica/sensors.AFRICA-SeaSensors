import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';

import arrowBack from '../assets/arrowWhite.png';

import Navigation from './Navigation';

const styles = theme => ({
  parentHeaderText: {
    position: 'relative',
    top: '30%',
    padding: '0 5%'
  },
  subtitleRule: {
    width: '22.5px',
    height: '2px',
    backgroundColor: '#ffffff',
    marginRight: '20px'
  },
  mediaResources: {
    height: '115.5px',
    fontFamily: 'Oswald',
    fontSize: '88px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: '0.8px',
    color: '#ffffff',
    marginBottom: '2em',
    [theme.breakpoints.down('xs')]: {
      fontSize: '70px',
      width: '30px',
      marginBottom: '3.5em'
    }
  },
  arrowBack: {
    transform: 'rotate(180deg)',
    display: 'flex',
    position: 'relative',
    justifyContent: 'flex-end'
  }
});

function SharedHeader(props) {
  const { mediaResources, classes, link } = props;
  return (
    <div className={classes.resourceImage}>
      <Navigation />
      <div className={classes.parentHeaderText}>
        <Typography
          variant="body1"
          gutterBottom
          className={classes.mediaResources}
        >
          {mediaResources}
        </Typography>
        <div className={classes.arrowBack}>
          <a href={link}>
            <img src={arrowBack} alt="Arrow back" />
          </a>
        </div>
      </div>
    </div>
  );
}

SharedHeader.propTypes = {
  classes: PropTypes.shape().isRequired,
  mediaResources: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default withStyles(styles)(SharedHeader);
