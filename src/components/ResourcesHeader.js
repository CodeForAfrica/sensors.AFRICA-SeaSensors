import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import turtleResourceImage from '../assets/Turtle.jpg';

import SharedHeader from './SharedHeader';

const styles = theme => ({
  resourceImage: {
    width: '100%',
    height: '786px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${turtleResourceImage})`,
    minWidth: '1024px',
    backgroundPosition: '50% 35%',
    top: '0',
    left: '0'
  },
  [theme.breakpoints.down('sm')]: {
    width: '50%'
  }
});

function ResourcesHeader({ classes }) {
  return (
    <SharedHeader
      classes={classes}
      mediaResources="Media Resources"
      subTitle="Resources"
      link="/about"
      activeNav={3}
    />
  );
}

ResourcesHeader.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(ResourcesHeader);
