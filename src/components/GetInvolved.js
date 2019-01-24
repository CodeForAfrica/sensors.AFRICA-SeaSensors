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
    marginTop: '38px',
    marginLeft: '113px',
  },
  getINvolvedTitle: {
    width: '673.5px',
    height: '108px',
    fontFamily: 'Oswald',
    fontSize: '60px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.8px',
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
    top: '14em',
    left: '16em',
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

function GetInvolved({ classes }) {
  return (
    <div className={classes.moreContainer}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Typography component="h2" variant="h1" gutterBottom className={classes.getINvolvedTitle}>
            How to get involved
          </Typography>
          <Typography variant="body2" className={classes.moreText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextArrowButton
            className={classes}
            text="TAKE ACTION"
            image={arrow}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(GetInvolved);
