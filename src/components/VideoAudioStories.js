import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
  },
  description: {
    opacity: 0.6,
    fontFamily: 'Montserrat',
    fontSize: '0.525rem',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 2.08,
    letterSpacing: '0.4px',
    textAlign: 'center',
    color: ' #023256',
    marginBottom: '0.4375rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '0.9375rem',
      lineHeight: 2.5,
      letterSpacing: '0.7px',
      textAlign: 'left',
      marginBottom: '0.9375rem'
    }
  },
  iframeContainer: {
    marginTop: '1.875rem',
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '56.25%',
    [theme.breakpoints.up('md')]: {
      marginTop: '2.8125rem'
    }
  },
  iframeContainerLeft: {
    [theme.breakpoints.up('md')]: {
      marginRight: '1.40625rem'
    }
  },
  iframeContainerRight: {
    [theme.breakpoints.up('md')]: {
      marginLeft: '1.40625rem'
    }
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 0
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
      <Typography variant="body1" className={classes.description}>
        Lorem ipsum dolor sit amet, consecong init.
      </Typography>
      <Grid container className={classes.stories} spacing={45}>
        <Grid item xs={12} md={6}>
          <div
            className={classNames(
              classes.iframeContainer,
              classes.iframeContainerLeft
            )}
          >
            <iframe
              id="ytplayer"
              title="Installing acoustic sensors onto the sea bed, Tanzania"
              type="text/html"
              width="100%"
              height="100%"
              src={`https://www.youtube-nocookie.com/embed/gUJqdCq50EE?origin=${origin}`}
              frameBorder="0"
              allowFullScreen
              className={classes.iframe}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div
            className={classNames(
              classes.iframeContainer,
              classes.iframeContainerRight
            )}
          >
            <iframe
              id="ytplayer"
              title="Installing acoustic sensors onto the sea bed, Tanzania"
              type="text/html"
              width="100%"
              height="100%"
              src={`https://www.youtube-nocookie.com/embed/pxfIEDxbJdk?origin=${origin}`}
              frameBorder="0"
              allowFullScreen
              className={classes.iframe}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div
            className={classNames(
              classes.iframeContainer,
              classes.iframeContainerLeft
            )}
          >
            <iframe
              id="ytplayer"
              title="Installing acoustic sensors onto the sea bed, Tanzania"
              type="text/html"
              width="100%"
              height="100%"
              src={`https://www.youtube-nocookie.com/embed/gUJqdCq50EE?origin=${origin}`}
              frameBorder="0"
              allowFullScreen
              className={classes.iframe}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div
            className={classNames(
              classes.iframeContainer,
              classes.iframeContainerRight
            )}
          >
            <iframe
              id="ytplayer"
              title="Installing acoustic sensors onto the sea bed, Tanzania"
              type="text/html"
              width="100%"
              height="100%"
              src={`https://www.youtube-nocookie.com/embed/pxfIEDxbJdk?origin=${origin}`}
              frameBorder="0"
              allowFullScreen
              className={classes.iframe}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

VideoAudioStories.propTypes = {
  classes: PropTypes.shape().isRequired,
  origin: PropTypes.string.isRequired
};

export default withStyles(styles)(VideoAudioStories);
