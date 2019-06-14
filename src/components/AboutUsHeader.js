import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import HeaderImage from '../assets/AboutImage2.jpg';

import ResourceAboutHeader from './SharedHeader';

const styles = {
  resourceImage: {
    backgroundImage: `url(${HeaderImage})`
  }
};

function AboutUsHeader({ classes }) {
  return (
    <ResourceAboutHeader
      classes={classes}
      mediaResources="About Sea Sensors."
      subTitle="Lorem Ipsum"
      link="/news"
      activeNav={2}
    />
  );
}

AboutUsHeader.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(AboutUsHeader);
