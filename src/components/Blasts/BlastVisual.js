import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
// import { FacebookShareButton, TwitterShareButton } from 'react-share';

// import creatTime from '../../assets/currentTime.png';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    height: '33.125rem',
    '& div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    [theme.breakpoints.up('md')]: {
      height: '62.25rem'
    }
  },
  centerLine: {
    position: 'absolute',
    height: '33.125rem',
    width: '0.0625rem',
    backgroundColor: '#02325626',
    [theme.breakpoints.up('md')]: {
      marginTop: '-9.4375rem',
      height: '62.25rem'
    }
  },
  outerRing: {
    marginTop: '0.625rem',
    width: '19.6875rem',
    height: '19.6875rem',
    padding: '4.15%',
    borderRadius: '100%',
    border: '0.0313rem solid #77064c0D',
    [theme.breakpoints.up('md')]: {
      width: '42.1875rem',
      height: '42.1875rem'
    }
  },
  dottedRing: {
    width: '100%',
    height: '100%',
    padding: '4.8%',
    borderRadius: '100%',
    border: '0.3125rem dotted #023256'
  },
  innerRing: {
    width: '100%',
    height: '100%',
    padding: '5.1%',
    borderRadius: '100%',
    border: '0.0313rem solid #77064c33'
  },
  solidRing: {
    width: '100%',
    height: '100%',
    borderRadius: '100%',
    padding: '9%',
    border: '0.0938rem solid #77064c'
  },
  core: {
    zIndex: 1,
    width: '100%',
    height: '100%',
    boxShadow: '0 0 2.1875rem 0 rgba(2, 50, 86, 0.1)',
    backgroundColor: 'white',
    borderRadius: '100%',
    flexDirection: 'column'
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
      fontSize: '4.4375rem'
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
  }
});

function BlastVisual({ classes }) {
  return (
    <div className={classes.root}>
      <div className={classes.centerLine} />
      <div className={classes.outerRing}>
        <div className={classes.dottedRing}>
          <div className={classes.innerRing}>
            <div className={classes.solidRing}>
              <div className={classes.core}>
                <Typography className={classes.title}>12 562</Typography>
                <Typography className={classes.caption}>
                  Recorded Blasts
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

BlastVisual.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(BlastVisual);
