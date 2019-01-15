import React from 'react';
import { Grid, Typography, withStyles } from '@material-ui/core';
import TextArrowButton from '../ReusableComponents/TextArrowButton';
import arrow from '../../assets/arrow_4.png';
import topStoryImage from '../../assets/topStory.png';

const styles = {
  root: {
    flexGrow: 1,
  },
  parentContainer: {
    width: '100%',
    height: '615px',
    backgroundImage: `url(${topStoryImage})`,
    backgroundSize: 'cover',
    opacity: '1',
  },
  topStoryTitle: {
    width: '294px',
    height: '24px',
    fontFamily: 'Oswald',
    fontSize: '10px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.65',
    letterSpacing: '3px',
    color: '#ffffff',
    marginTop: '223px',
    marginLeft: '134px',
  },
  topStorySubTitle: {
    width: '600px',
    height: '153px',
    fontFamily: 'Oswald',
    fontSize: '35px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.13',
    letterSpacing: '0.7px',
    color: '#ffffff',
    marginTop: '0px',
    marginLeft: '3em ',
  },
  topStoryText: {
    width: '480px',
    height: '219.8px',
    fontFamily: 'Montserrat',
    fontSize: '15px',
    fontWeight: '600',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2.5',
    letterSpacing: '0.7px',
    textAlign: 'justify',
    color: ' #f9f8f8',
    marginTop: '136.5px',
    marginRight: '120px',
    marginBottom: '4.5em',
  },
  textArrowButtonParent: {
    width: '244.5px',
    height: '45px',
    border: '3px #ffffff solid',
    paddingLeft: '1rem',
    boxShadow: '0 23px 60px 0 rgba(0, 0, 0, 0.05)',
    display: 'flex',
  },
  textArrowButtonText: {
    height: '24px',
    fontFamily: 'Oswald',
    fontSize: '16px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '3.2px',
    color: '#ffffff',
    marginTop: '0.3em',
    marginRight: '3.5em',
  },
  textArrowButtonArrow: {
    color: '#ffffff',
    marginTop: '0.3em',
  },
};

function TopStory({ classes }) {
  return (
    <div className={classes.parentContainer}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Typography variant="caption" className={classes.topStoryTitle}>
              SEA SENSORS TOP STORY
          </Typography>
          <Typography variant="h4" className={classes.topStorySubTitle}>
            The effects of blast fishing
            <br />
            on the local community.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="caption" className={classes.topStoryText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna.
          </Typography>
          <TextArrowButton
            className={classes}
            text="READ MORE"
            image={arrow}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(TopStory);
