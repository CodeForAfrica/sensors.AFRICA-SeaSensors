import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = {
  backgroundVideo: {
    height: '644px !important',
    width: '100% !important',
    float: 'left',
    top: '0',
    padding: 'none',
    background: 'cover'
  }
};

function Video({ classes, origin }) {
  return (
    <iframe
      id="ytplayer"
      title="Installing acoustic sensors onto the sea bed, Tanzania"
      type="text/html"
      width="100%"
      height="644"
      src={`https://www.youtube-nocookie.com/embed/mTKAZVcI0P8?origin=${origin}`}
      frameBorder="0"
      allowFullScreen
      className={classes.backgroundVideo}
    />
  );
}

Video.propTypes = {
  classes: PropTypes.shape().isRequired,
  origin: PropTypes.string.isRequired
};

export default withStyles(styles)(Video);
