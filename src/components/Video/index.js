import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = {
  backgroundVideo: {
    height: '644px !important',
    width: '100% !important',
    float: 'left',
    top: '0',
    padding: 'none',
    background: 'cover',
  },
};

function Video({ classes, origin }) {
  return (
    <iframe
      id="ytplayer"
      title="Installing acoustic sensors onto the sea bed, Tanzania"
      type="text/html"
      width="100%"
      height="644"
      src={`https://www.youtube.com/embed/gUJqdCq50EE?origin=${origin}`}
      frameBorder="0"
      className={classes.backgroundVideo}
    />
  );
}

export default withStyles(styles)(Video);
