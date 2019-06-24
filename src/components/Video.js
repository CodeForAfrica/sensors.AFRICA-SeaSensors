import React from 'react';
import PropTypes from 'prop-types';

import { Grid, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  backgroundVideo: {
    height: '250px !important',
    width: '100% !important',
    float: 'left',
    top: '0',
    padding: 'none',
    background: 'cover',
    [theme.breakpoints.up('sm')]: {
      height: '400px !important'
    },
    [theme.breakpoints.up('md')]: {
      height: '644px !important'
    }
  }
});

function Video({ classes, origin }) {
  return (
    <Grid className={classes.root}>
      <iframe
        id="ytplayer"
        title="Installing acoustic sensors onto the sea bed, Tanzania"
        type="text/html"
        width="100%"
        src={`https://www.youtube-nocookie.com/embed/mTKAZVcI0P8?origin=${origin}`}
        frameBorder="0"
        allowFullScreen
        className={classes.backgroundVideo}
      />
    </Grid>
  );
}

Video.propTypes = {
  classes: PropTypes.shape().isRequired,
  origin: PropTypes.string.isRequired
};

export default withStyles(styles)(Video);
