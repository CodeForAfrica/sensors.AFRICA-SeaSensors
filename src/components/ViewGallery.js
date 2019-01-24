import React from 'react';
import { withStyles } from '@material-ui/core';
import galleryImage1 from '../assets/_MGL0793.png';

const styles = {
  galleryParent: {
    width: '100%',
    display: 'block',
    overflow: 'auto',
    margin: '0 auto',
    whiteSpace: 'nowrap',
  },
  galleryImage: {
    width: '20%',
    backgroundSize: 'cover',
    display: 'inline-block',
    backgroundImage: `url(${galleryImage1})`,
    height: '400px',
    margin: '0 2%',
  },
};

function ViewGallery({ classes }) {
  return (
    <div className={classes.galleryParent}>
      <div className={classes.galleryImage} />
      <div className={classes.galleryImage} />
      <div className={classes.galleryImage} />
      <div className={classes.galleryImage} />
      <div className={classes.galleryImage} />
    </div>
  );
}

export default withStyles(styles)(ViewGallery);
