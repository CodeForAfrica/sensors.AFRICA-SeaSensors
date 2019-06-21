import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles, Grid } from '@material-ui/core';

import Section from './Section';
import SectionTitle from './SectionTitle';

const styles = theme => ({
  root: {
    backgroundColor: '#F0F0F0'
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
    marginRight: '1.359375rem', // .75 of lg
    [theme.breakpoints.up('lg')]: {
      marginRight: '1.8125rem'
    }
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
      marginRight: '1.0546875rem' // .75 of lg
    },
    [theme.breakpoints.up('lg')]: {
      marginRight: '1.40625rem'
    }
  },
  iframeContainerRight: {
    [theme.breakpoints.up('md')]: {
      marginLeft: '1.0546875rem' // .75 of lg
    },
    [theme.breakpoints.up('lg')]: {
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
    <Section classes={{ root: classes.root }}>
      <SectionTitle subtitle="Video & Audio Stories">
        Video & Audio Stories
      </SectionTitle>

      <Grid container className={classes.stories} spacing={40}>
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
              src={`https://www.youtube-nocookie.com/embed/gUJqdCq50EE?origin=${origin}`}
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
              src={`https://www.youtube-nocookie.com/embed/pxfIEDxbJdk?origin=${origin}`}
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
              src={`https://www.youtube-nocookie.com/embed/gUJqdCq50EE?origin=${origin}`}
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
              src={`https://www.youtube-nocookie.com/embed/pxfIEDxbJdk?origin=${origin}`}
              allowFullScreen
              className={classes.iframe}
            />
          </div>
        </Grid>
      </Grid>
    </Section>
  );
}

VideoAudioStories.propTypes = {
  classes: PropTypes.shape().isRequired,
  origin: PropTypes.string.isRequired
};

export default withStyles(styles)(VideoAudioStories);
