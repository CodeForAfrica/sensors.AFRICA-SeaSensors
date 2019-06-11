import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import TextArrowLink from './TextArrowLink';

const styles = {
  root: {
    flexGrow: 1
  },
  allStoriesContainer: {
    height: '292px',
    position: 'relative',
    paddingTop: '150px'
  }
};

function AllStoriesButton({ classes }) {
  return (
    <div className={classes.allStoriesContainer}>
      <TextArrowLink
        blue
        text="ALL STORIES"
        href="https://medium.com/seasensors-africa"
      />
    </div>
  );
}

AllStoriesButton.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(AllStoriesButton);
