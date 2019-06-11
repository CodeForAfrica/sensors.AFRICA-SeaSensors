import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import turtleResourceImage from '../assets/Turtle.jpg';

import SharedHeader from './SharedHeader';

const styles = {
  resourceImage: {
    backgroundImage: `url(${turtleResourceImage})`
  }
};

function ResourcesHeader({ classes }) {
  return (
    <SharedHeader
      classes={classes}
      mediaResources="Resources."
      subTitle="Lorem Ipsum"
    />
  );
}

ResourcesHeader.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(ResourcesHeader);
