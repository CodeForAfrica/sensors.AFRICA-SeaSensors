import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import NewsHeaderImage from '../assets/JellyFish.jpg';

import SharedHeader from './SharedHeader';

const styles = {
  resourceImage: {
    backgroundImage: `url(${NewsHeaderImage})`
  }
};

function NewsHeader({ classes }) {
  return (
    <SharedHeader
      classes={classes}
      mediaResources="News Showcase Page."
      subTitle="Lorem Ipsum"
      activeNav={1}
    />
  );
}

NewsHeader.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(NewsHeader);
