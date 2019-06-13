import React from 'react';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';

import boat from '../assets/boat.png';
import scubaDive from '../assets/ScubaDive.png';

const styles = theme => ({
  parentContainer: {
    marginTop: '68px',
    marginLeft: 0,
    [theme.breakpoints.up('md')]: {
      marginLeft: '90px',
      marginTop: '104.3px'
    }
  },
  date: {
    width: '229.5px',
    height: '37.5px',
    opacity: '0.58',
    fontFamily: 'Oswald',
    fontSize: '15px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '4.75',
    letterSpacing: '6px',
    color: ' #ffffff',
    marginBottom: '0.6rem'
  },
  blastDeploymentText: {
    opacity: '0.6',
    fontFamily: 'Montserrat !important',
    fontSize: '15px !important',
    fontWeight: 'normal !important',
    fontStyle: 'normal !important',
    fontStretch: 'normal',
    lineHeight: '2.5 !important',
    letterSpacing: '0.7px !important',
    textAlign: 'justify',
    color: '#023256 !important'
  },
  recordersText: {
    width: '120.4px',
    fontFamily: 'Oswald',
    fontSize: '16px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.5',
    letterSpacing: '0.6px',
    color: '#ffffff',
    [theme.breakpoints.up('md')]: {
      letterSpacing: '1.2px',
      fontSize: '30px',
      width: '225.8px'
    }
  },
  scubaDive: {
    width: '100%',
    position: 'relative',
    height: '467px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '80%',
    top: '0',
    left: '0',
    backgroundImage: `url(${scubaDive})`,
    [theme.breakpoints.up('md')]: {
      height: '720px',
      backgroundPosition: '50% 35%'
    }
  },
  boat: {
    position: 'relative',
    height: '378px',
    left: 0,
    width: '306px',
    marginTop: '-60px',
    [theme.breakpoints.up('md')]: {
      height: '630px',
      left: '-150px',
      width: '510px',
      top: '580.5px',
      position: 'absolute',
      bottom: '300px'
    }
  },
  recordDeploy: {
    right: '30px',
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
    paddingLeft: '30px',
    paddingRight: '30px',
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
