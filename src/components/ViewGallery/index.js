import React from 'react';
import PropTypes from 'prop-types';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import { withStyles, Typography, GridList } from '@material-ui/core';

import galleryImage1 from '../../assets/galleryImage1.jpg';
import galleryImage2 from '../../assets/galleryImage2.jpg';
import galleryImage3 from '../../assets/galleryImage3.jpg';
import galleryImage4 from '../../assets/galleryImage4.jpg';
import galleryImage5 from '../../assets/galleryImage5.jpg';
import galleryImage6 from '../../assets/galleryImage6.jpg';
import galleryImage7 from '../../assets/galleryImage7.jpg';
import galleryImage8 from '../../assets/galleryImage8.jpg';
import galleryImage9 from '../../assets/galleryImage9.jpg';
import galleryImage10 from '../../assets/galleryImage10.jpg';
import galleryImage11 from '../../assets/galleryImage-11.jpg';
import galleryImage12 from '../../assets/galleryImage12.jpg';
import galleryImage13 from '../../assets/galleryImage13.jpg';
import galleryImage14 from '../../assets/galleryImage14.jpg';
import galleryImage15 from '../../assets/galleryImage15.jpg';
import galleryImage16 from '../../assets/galleryImage16.jpg';
import galleryImage17 from '../../assets/galleryImage17.jpg';
import galleryImage18 from '../../assets/galleryImage18.jpg';
import galleryImage19 from '../../assets/galleryImage19.jpg';
import galleryImage20 from '../../assets/galleryImage20.jpg';

import GalleryContainer from './GalleryContainer';
import Line from '../Line';

const galleryContent = [
  {
    id: 1,
    image: galleryImage1
  },
  {
    id: 2,
    image: galleryImage2
  },
  {
    id: 3,
    image: galleryImage3
  },
  {
    id: 4,
    image: galleryImage4
  },
  {
    id: 5,
    image: galleryImage5
  },
  {
    id: 6,
    image: galleryImage6
  },
  {
    id: 7,
    image: galleryImage7
  },
  {
    id: 8,
    image: galleryImage8
  },
  {
    id: 9,
    image: galleryImage9
  },
  {
    id: 10,
    image: galleryImage10
  },
  {
    id: 11,
    image: galleryImage11
  },
  {
    id: 12,
    image: galleryImage12
  },
  {
    id: 13,
    image: galleryImage13
  },
  {
    id: 14,
    image: galleryImage14
  },
  {
    id: 15,
    image: galleryImage15
  },
  {
    id: 16,
    image: galleryImage16
  },
  {
    id: 17,
    image: galleryImage17
  },
  {
    id: 18,
    image: galleryImage18
  },
  {
    id: 19,
    image: galleryImage19
  },
  {
    id: 20,
    image: galleryImage20
  }
];
const styles = theme => ({
  parentContainer: {
    marginLeft: '1.875rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    [theme.breakpoints.up('md')]: {
      marginLeft: '7.5rem',
      marginBottom: '4rem'
    }
  },
  card: {
    boxShadow: 'none',
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    scrollbarColor: '#023256',
    scrollbarWidth: 'thin',
    '&::-webkit-scrollbar': {
      height: '0.15rem'
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'lightgrey',
      marginRight: '2rem',
      color: 'lightgrey'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#023256',
      color: '#023256',
      border: '1px solid #023256',
      height: '0.2rem'
    }
  },
  viewGallery: {
    width: '447px',
    fontFamily: 'Oswald',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.9625rem',
    color: '#023256',
    [theme.breakpoints.up('md')]: {
      fontSize: '0.9375rem',
      letterSpacing: '1.03125rem'
    }
  },
  viewParent: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '1.875rem',
    marginBottom: '3.16rem',
    [theme.breakpoints.up('md')]: {
      marginLeft: '240px',
      marginBottom: '5.16rem'
    }
  },
  bottomLine: {
    borderLeftWidth: '120px',
    width: '90%',
    margin: '2.875rem auto 0px'
  },
  viewCard: {}
});

function ViewGallery({ classes, width }) {
  let cards = 4;
  let cellHeight = 400;
  if (isWidthDown('md', width)) {
    cards = 1.5;
    cellHeight = 300;
  }
  if (isWidthDown('sm', width)) {
    cards = 1.5;
    cellHeight = 300;
  }
  return (
    <React.Fragment>
      <div className={classes.viewParent}>
        <Typography
          component="h2"
          variant="body1"
          gutterBottom
          className={classes.viewGallery}
        >
          VIEW GALLERY
        </Typography>
        <Line />
      </div>
      <div className={classes.parentContainer}>
        <GridList
          className={classes.card}
          cols={cards}
          spacing={12}
          cellHeight={cellHeight}
        >
          {galleryContent.map(picture => (
            <div className={classes.viewCard} key={picture.id}>
              <GalleryContainer image={picture.image} />
            </div>
          ))}
        </GridList>
      </div>
    </React.Fragment>
  );
}

ViewGallery.propTypes = {
  classes: PropTypes.shape().isRequired,
  width: PropTypes.string.isRequired
};

export default withWidth()(withStyles(styles)(ViewGallery));
