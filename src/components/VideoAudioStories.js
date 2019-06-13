import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, Grid, Hidden, Typography } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import SectionTitle from './SectionTitle';

const styles = theme => ({
  root: {
    backgroundColor: '#F0F0F0',
    padding: '5.125rem 1.875rem 4.9375rem',
    [theme.breakpoints.up('md')]: {
      padding: '7.875rem 5.5625rem 12.46875rem'
    }
  },
  cardInfo: {
    width: '390px',
    height: '337.5px',
    backgroundColor: '#ffffff',
    boxShadow: '0 30px 60px 0 rgba(0, 0, 0, 0.05)',
    flex: '1',
    textAlign: 'center',
    margin: '10px 40px'
  },
  flexGrid: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 0 20px 0'
  },
  backgroundVideo: {
    height: '337.5px',
    width: '100%',
    float: 'left',
    top: '0',
    padding: 'none',
    background: 'cover'
  },
  channel: {
    display: 'flex',
    alignItems: 'center'
  },
  channelCallToAction: {
    fontFamily: 'Oswald',
    fontSize: '0.9375rem',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 4,
    letterSpacing: '0.8px',
    color: ' #023256',
    marginRight: '1.8125rem'
  },
  channelName: {
    textDecoration: 'underline'
  }
});

function VideoAudioStories(props) {
  const { classes, origin } = props;

  return (
    <div className={classes.root}>
      <Grid container justify="space-between" className={classes.title}>
        <Grid item>
          <SectionTitle subtitle="Video & Audio Stories">
            Video & Audio Stories
          </SectionTitle>
        </Grid>
        <Hidden smDown>
          <Grid item>
            <div className={classes.channel}>
              <Typography
                variant="subtitle2"
                className={classes.channelCallToAction}
              >
                Visit our <span className={classes.channelName}>Youtube</span>{' '}
                channel.
              </Typography>
              <FontAwesomeIcon icon={faYoutube} color="#023256" size="2x" />
              <div />
            </div>
          </Grid>
        </Hidden>
      </Grid>
      <div className={classes.parentContainer}>
        <div className={classes.flexGrid}>
          <div className={classes.cardInfo}>
            <iframe
              id="ytplayer"
              title="Installing acoustic sensors onto the sea bed, Tanzania"
              type="text/html"
              width="100%"
              height="100%"
              src={`https://www.youtube-nocookie.com/embed/gUJqdCq50EE?origin=${origin}`}
              frameBorder="0"
              allowFullScreen
              className={classes.backgroundVideo}
            />
          </div>
          <div className={classes.cardInfo}>
            <iframe
              id="ytplayer"
              title="Installing acoustic sensors onto the sea bed, Tanzania"
              type="text/html"
              width="100%"
              height="100%"
              src={`https://www.youtube-nocookie.com/embed/pxfIEDxbJdk?origin=${origin}`}
              frameBorder="0"
              allowFullScreen
              className={classes.backgroundVideo}
            />
          </div>
        </div>
        <div className={classes.flexGrid}>
          <div className={classes.cardInfo}>
            <iframe
              id="ytplayer"
              title="Installing acoustic sensors onto the sea bed, Tanzania"
              type="text/html"
              width="100%"
              height="100%"
              src={`https://www.youtube-nocookie.com/embed/gUJqdCq50EE?origin=${origin}`}
              frameBorder="0"
              allowFullScreen
              className={classes.backgroundVideo}
            />
          </div>
          <div className={classes.cardInfo}>
            <iframe
              id="ytplayer"
              title="Installing acoustic sensors onto the sea bed, Tanzania"
              type="text/html"
              width="100%"
              height="100%"
              src={`https://www.youtube-nocookie.com/embed/pxfIEDxbJdk?origin=${origin}`}
              frameBorder="0"
              allowFullScreen
              className={classes.backgroundVideo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

VideoAudioStories.propTypes = {
  classes: PropTypes.shape().isRequired,
  origin: PropTypes.string.isRequired
};

export default withStyles(styles)(VideoAudioStories);
