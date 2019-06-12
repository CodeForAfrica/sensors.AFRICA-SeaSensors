import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography, Grid } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FacebookShareButton, TwitterShareButton } from 'react-share';

import hud from '../../assets/hud.svg';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    height: '38.4375rem',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      height: '52.1875rem'
    }
  },
  hud: {
    width: '100%',
    marginLeft: '-150px',
    position: 'relative',
    display: 'grid',
    [theme.breakpoints.up('md')]: {
      marginLeft: 'unset',
      width: '80%'
    }
  },
  hudImage: {
    width: '100%',
    gridRowStart: 1,
    gridColumnStart: 1
  },
  hudCore: {
    zIndex: 1,
    boxShadow: '0 0 2.1875rem 0 rgba(2, 50, 86, 0.1)',
    backgroundColor: 'white',
    borderRadius: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    alignSelf: 'center',
    justifySelf: 'center',

    position: 'absolute',
    top: '32%',
    left: '43%',
    right: '15%',
    bottom: '30%',

    gridRowStart: 1,
    gridColumnStart: 1
  },
  currentTimeLine: {
    display: 'none',
    height: '0.0625rem',
    width: '6.25rem',
    marginLeft: '-1.5rem',
    backgroundColor: '#979797',
    [theme.breakpoints.up('md')]: {
      display: 'block'
    }
  },
  lastUpdateTimeLine: {
    display: 'none',
    height: '3.125rem',
    width: '3.125rem',
    marginTop: '15.25rem',
    marginLeft: '-6rem',
    borderBottom: '0.0625rem solid #979797',
    borderLeft: '0.0625rem solid #979797',
    transform: 'skew(45deg)',
    [theme.breakpoints.up('md')]: {
      display: 'block'
    }
  },
  title: {
    fontFamily: 'Oswald',
    fontSize: '3.75rem',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'condensed',
    letterSpacing: '0.05rem',
    textAlign: 'center',
    color: '#023256',
    [theme.breakpoints.up('md')]: {
      fontSize: '7.5rem'
    }
  },
  socialText: {
    opacity: '0.6',
    fontFamily: 'Oswald',
    fontSize: '0.75rem',
    fontWeight: 300,
    lineHeight: 1.67,
    lineSpacing: '0.0375rem',
    textAlign: 'center',
    color: '#00a5dc',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5625rem'
    }
  },
  text: {
    fontFamily: 'Oswald',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'condensed',
    letterSpacing: '0.05rem',
    textAlign: 'center',
    color: '#023256',
    [theme.breakpoints.up('md')]: {
      fontSize: '3.75rem'
    }
  },
  caption: {
    opacity: '0.6',
    fontFamily: 'Oswald',
    fontSize: '0.75rem',
    fontWeight: '300',
    lineHeight: '1.2',
    textAlign: 'center',
    color: '#023256',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5625rem'
    }
  },
  outerDetails: {
    width: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'column',
      position: 'absolute',
      left: '37.5rem',
      top: '40%',
      bottom: 0
    }
  },
  timeDetails: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      order: 1
    }
  },
  socialDetails: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      order: 2
    }
  },
  socialDetailsIcons: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row'
    }
  },
  shareIconStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '5.0625rem',
    height: '5.0625rem',
    marginRight: '0.8125rem',
    color: '#00a5dc',
    outline: 'none',
    '&:focus': {
      outline: 'none'
    },
    [theme.breakpoints.up('md')]: {
      border: '0.0625rem #00a5dc solid',
      '&:hover': {
        backgroundColor: '#00a5dc',
        color: '#fff',
        cursor: 'pointer'
      }
    }
  }
});

function BlastVisual({ classes }) {
  return (
    <div className={classes.root}>
      <div className={classes.hud}>
        <img alt="" src={hud} className={classes.hudImage} />
        <div className={classes.hudCore}>
          <Typography className={classes.title}>12 562</Typography>
          <Typography className={classes.caption}>Recorded Blasts</Typography>
        </div>
      </div>
      <div className={classes.currentTimeLine} />
      <div className={classes.lastUpdateTimeLine} />
      <div className={classes.outerDetails}>
        <div className={classes.socialDetails}>
          <Typography gutterBottom className={classes.socialText}>
            Share
          </Typography>
          <div className={classes.socialDetailsIcons}>
            <TwitterShareButton
              className={classes.shareIconStyle}
              url="https://alpha.seasensors.africa"
              title="Mapping blast fishing along the coast of East Africa"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </TwitterShareButton>
            <FacebookShareButton
              title="Sea Sensors Africa"
              className={classes.shareIconStyle}
              url="https://alpha.seasensors.africa"
              quote="Mapping blast fishing along the coast of East Africa"
            >
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </FacebookShareButton>
          </div>
        </div>
        <div className={classes.timeDetails}>
          <Grid container direction="column" alignItems="flex-start">
            <Typography className={classes.text}>16:06</Typography>
            <Typography className={classes.caption}>Current Time</Typography>
          </Grid>
          <Grid container direction="column" alignItems="flex-start">
            <Typography className={classes.text}>20.10.18</Typography>
            <Typography className={classes.caption}>Last Uploaded</Typography>
          </Grid>
        </div>
      </div>
    </div>
  );
}

BlastVisual.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(BlastVisual);
