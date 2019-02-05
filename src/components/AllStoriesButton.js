import React from 'react';
import { withStyles } from '@material-ui/core';
import TextArrowButton from './TextArrowButton';
import arrow from '../assets/arrow_2.png';

const styles = {
  root: {
    flexGrow: 1,
  },
  allStoriesContainer: {
    height: '292px',
    position: 'relative',
  },
  textArrowButtonParent: {
    width: '293px',
    height: '75px',
    border: '3px #023256 solid',
    paddingLeft: '1rem',
    boxShadow: '0 23px 60px 0 rgba(0, 0, 0, 0.05)',
    display: 'flex',
    position: 'relative',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
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
    color: '#023256',
    marginTop: '22px',
    marginRight: '45px',
  },
  textArrowButtonArrow: {
    marginTop: '22px',
  },
};

function AllStoriesButton({ classes }) {
  return (
    <div className={classes.allStoriesContainer}>
      <TextArrowButton
        className={classes}
        text="ALL STORIES"
        image={arrow}
      />
    </div>
  );
}

export default withStyles(styles)(AllStoriesButton);
