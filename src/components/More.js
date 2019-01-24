import React from 'react';
import { Grid, Typography, withStyles } from '@material-ui/core';
import TextArrowButton from './TextArrowButton';
import arrow from '../assets/arrow_2.png';

const styles = {
  root: {
    flexGrow: 1,
  },
  moreContainer: {
    width: 'auto',
    height: '30em',
    backgroundColor: '#ffffff',
  },
  moreText: {
    width: '563.3px',
    height: '174px',
    opacity: '0.6',
    fontFamily: 'Montserrat',
    fontSize: '15px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2.5',
    letterSpacing: '0.7px',
    textAlign: 'justify',
    color: '#023256',
    marginTop: '125px',
    marginLeft: '113px',
  },
  readMore: {
    width: '292.5px',
    height: '75px',
    boxShadow: '0 23px 60px 0 rgba(0, 0, 0, 0.05)',
  },
  textArrowButtonParent: {
    width: '244.5px',
    height: '45px',
    border: '3px #023256 solid',
    paddingLeft: '1rem',
    boxShadow: '0 23px 60px 0 rgba(0, 0, 0, 0.05)',
    display: 'flex',
    position: 'relative',
    top: '22em',
    left: '8em',
  },
  textArrowButtonText: {
    width: '144px',
    height: '24px',
    fontFamily: 'Oswald',
    fontSize: '16px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '3.2px',
    color: '#023256',
    marginTop: '0.3em',
  },
  textArrowButtonArrow: {
    marginTop: '0.3em',
  },
};

function More({ classes }) {
  return (
    <div className={classes.moreContainer}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" className={classes.moreText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextArrowButton
            className={classes}
            text="FIND OUT MORE"
            image={arrow}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(More);
