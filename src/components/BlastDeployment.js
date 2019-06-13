import React from 'react';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';

import boat from '../assets/boat.png';
import scubaDive from '../assets/ScubaDive.png';

const styles = theme => ({
  parentContainer: {
    marginTop: '4.25rem',
    marginLeft: 0,
    [theme.breakpoints.up('md')]: {
      marginLeft: '5.625rem',
      marginTop: '6.51875rem'
    }
  },
  date: {
    width: '14.34375rem',
    height: '2.34375rem',
    opacity: '0.58',
    fontFamily: 'Oswald',
    fontSize: '0.9375rem',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '4.75',
    letterSpacing: '0.375rem',
    color: ' #ffffff',
    marginBottom: '0.6rem'
  },
  blastDeploymentText: {
    opacity: '0.6',
    fontFamily: 'Montserrat !important',
    fontSize: '0.9375rem !important',
    fontWeight: 'normal !important',
    fontStyle: 'normal !important',
    fontStretch: 'normal',
    lineHeight: '2.5 !important',
    letterSpacing: '0.04375rem !important',
    textAlign: 'justify',
    color: '#023256 !important'
  },
  recordersText: {
    width: '7.525rem',
    fontFamily: 'Oswald',
    fontSize: '1rem',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.5',
    letterSpacing: '0.0375rem',
    color: '#ffffff',
    [theme.breakpoints.up('md')]: {
      letterSpacing: '0.075rem',
      fontSize: '1.875rem',
      width: '14.1125rem'
    }
  },
  scubaDive: {
    width: '100%',
    position: 'relative',
    height: '29.1875rem',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '80%',
    top: '0',
    left: '0',
    backgroundImage: `url(${scubaDive})`,
    [theme.breakpoints.up('md')]: {
      height: '45rem',
      backgroundPosition: '50% 35%'
    }
  },
  boat: {
    position: 'relative',
    height: '23.625rem',
    left: 0,
    width: '19.125rem',
    marginTop: '-3.75rem',
    [theme.breakpoints.up('md')]: {
      height: '39.375rem',
      left: '-150px',
      width: '510px',
      top: '580.5px',
      position: 'absolute',
      bottom: '18.75rem'
    }
  },
  recordDeploy: {
    right: '1.875rem',
    bottom: '120px',
    position: 'absolute',
    width: '115px',
    [theme.breakpoints.up('md')]: {
      right: '102px',
      width: '216.8px'
    }
  },
  scubaParent: {
    position: 'relative',
    width: '100%',
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '80%',
      marginLeft: '150px'
    }
  },
  textContainer: {
    paddingTop: '63px',
    paddingLeft: '1.875rem',
    paddingRight: '1.875rem',
    [theme.breakpoints.up('md')]: {
      paddingTop: '153px',
      marginLeft: '480px',
      position: 'relative'
    }
  }
});

function BlastDeployment({ classes }) {
  return (
    <div className={classes.parentContainer}>
      <div className={classes.scubaParent}>
        <div className={classes.scubaDive}>
          <div className={classes.recordDeploy}>
            <Typography variant="body1" gutterBottom className={classes.date}>
              24.09.2017
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              className={classes.recordersText}
            >
              Deployment of Blast Recorders
            </Typography>
          </div>
        </div>
        <img src={boat} alt="Boat" className={classes.boat} />
        <div className={classes.textContainer}>
          <Typography
            variant="body1"
            gutterBottom
            className={classes.blastDeploymentText}
          >
            The acoustic monitoring focuses on the two areas of Tanzania that
            are well known to have high levels of blasting activity over many
            years: Dar es Salaam, and Tanga. Equipment was constructed using
            local materials where possible. A triangular metal frame was welded
            by local craftsmen in Zanzibar, heavy weights to hold the acoustic
            equipment to the sea bed were used gerry cans that previously held
            cooking oil, that were filled with concrete.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            className={classes.blastDeploymentText}
          >
            The metal frame was wrapped in used bicycle inner tubes to prevent
            abrasion to the sensitive equipment (add photos). Finally the gear
            was transported via truck, high speed ferry, and boat to the
            deployment location
          </Typography>
        </div>
      </div>
    </div>
  );
}

BlastDeployment.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(BlastDeployment);
