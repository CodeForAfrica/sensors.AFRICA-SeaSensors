import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Typography, withStyles, ButtonBase } from '@material-ui/core';

import Line from '../Line';
import BlastVisual from './BlastVisual';

import arrowDown from '../../assets/icons/arrow-down.svg';

const styles = theme => ({
  root: {
    width: '100%',
    margin: '0 auto',
    backgroundColor: '#fff',
    padding: '1.875rem',
    [theme.breakpoints.up('md')]: {
      padding: '5.8125rem 7.3438rem'
    }
  },
  info: {},
  visualInfo: {
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      marginTop: '-14rem'
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '-25.625rem'
    }
  },
  infoTitle: {
    fontFamily: 'Oswald, sans-serif',
    fontSize: '2.1875rem',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1',
    letterSpacing: '0.0437rem',
    color: '#023256',
    display: 'inline-block',
    [theme.breakpoints.up('md')]: {
      fontSize: '3.25rem'
    }
  },
  infoDescription: {
    opacity: '0.6',
    fontFamily: 'Montserrat',
    fontSize: '0.75rem',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2.5',
    letterSpacing: '0.0313rem',
    textAlign: 'justify',
    color: '#023256',

    marginTop: '1.5rem',
    [theme.breakpoints.up('md')]: {
      marginTop: '3.125rem',

      width: '13.375rem',
      fontSize: '0.9375rem',
      letterSpacing: '0.0437rem'
    }
  },
  blastImageInfo: {
    position: 'relative',
    bottom: '5em',
    right: '18.73em'
  },
  blastGridText: {
    position: 'absolute',
    bottom: '19em',
    left: '24em'
  },
  currentTime: {
    left: '19.6em',
    bottom: '1.5em',
    display: 'flex',
    position: 'absolute'
  },
  lastUploadedText: {
    opacity: '0.6',
    fontFamily: 'Oswald',
    fontSize: '1.2em',
    fontWeight: '300',
    lineHeight: '1.2',
    textAlign: 'left',
    color: '#023256'
  },
  lastUpload: {
    display: 'flex',
    left: '31.5em',
    top: '6.2em',
    position: 'absolute'
  },
  Timings: {
    right: '6.8em',
    bottom: '7em',
    position: 'relative'
  },
  dateTime: {
    fontFamily: 'Oswald',
    fontSize: '3rem',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'condensed',
    lineHeight: 'normal',
    letterSpacing: '0.075rem',
    color: '#023256'
  },
  learnMoreParent: {
    display: 'flex',
    position: 'relative',
    top: '8em',
    fontFamily: 'Oswald',
    fontSize: '1.25rem',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.69',
    letterSpacing: '0.0625rem',
    color: '#023256'
  },
  learnMoreText: {
    marginTop: '1.5em',
    marginLeft: '1em',
    fontFamily: 'Oswald',
    fontSize: '1rem',
    fontWeight: '600',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.97',
    letterSpacing: '0.0375rem',
    color: '#023256'
  },
  lastUploadPointer: {
    marginTop: '2.375rem'
  },
  currentTimePointer: {
    marginTop: '5.625rem'
  },
  socialsParent: {
    display: 'flex'
  },
  shareIcons: {
    position: 'relative',
    left: '2em',
    top: '20em'
  },
  socials: {
    width: '5.0625rem',
    height: '5.0625rem',
    border: '0.0625rem #00a5dc solid',
    paddingLeft: '1.5rem',
    paddingTop: '1.5rem',
    marginRight: '0.8125rem',
    color: '#00a5dc',
    '&:hover': {
      backgroundColor: '#00a5dc',
      color: '#fff',
      cursor: 'pointer'
    }
  },
  twitterIcon: {
    marginTop: '1.1875rem',
    marginLeft: '1.625rem'
  },
  shareText: {
    fontFamily: 'Oswald',
    fontSize: '1.25rem',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.69',
    letterSpacing: '0.0625rem',
    color: '#00a5dc'
  },
  socialIcon: {
    marginTop: '1.25rem',
    marginLeft: '1.25rem'
  },
  shareIconStyle: {
    outline: 'none',
    '&:focus': {
      outline: 'none'
    }
  },
  learnMore: {
    position: 'absolute',
    display: 'none',
    bottom: 0,

    '& img': {
      marginRight: '1.875rem'
    },
    '& p': {
      fontFamily: 'Oswald',
      fontSize: '1.375rem',
      fontWeight: 600,
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 1.91,
      letterSpacing: '0.0563rem',
      color: '#023256'
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  }
});

function Blasts({ classes }) {
  return (
    <Fragment>
      <div className={classes.root}>
        <div className={classes.info}>
          <Typography
            component="h3"
            variant="h3"
            gutterBottom
            className={classes.infoTitle}
          >
            Blasts Recorded
          </Typography>
          <Line />
          <Typography
            variant="body1"
            gutterBottom
            className={classes.infoDescription}
          >
            Blast data is collected every 4 months, analysed, and uploaded to
            the map.
          </Typography>
        </div>
        <div className={classes.visualInfo}>
          <BlastVisual />
          <ButtonBase
            disableRipple
            disableTouchRipple
            className={classes.learnMore}
          >
            <img alt="" src={arrowDown} />
            <Typography>Learn More</Typography>
          </ButtonBase>
        </div>
      </div>
    </Fragment>
  );
}

Blasts.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(Blasts);
