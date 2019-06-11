import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from '@material-ui/core';

import topStoryImage from '../../assets/topStory.jpg';
import TextArrowLink from '../TextArrowLink';

const styles = theme => ({
  root: {
    flexGrow: 1,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    padding: '60px 30px',
    '& > :first-child': {
      marginBottom: '35px'
    },

    backgroundSize: 'cover',
    backgroundImage: `url(${topStoryImage})`,
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      padding: '89.3px',
      '& > :first-child': {
        marginRight: '150.8px'
      }
    }
  },
  topStoryTitle: {
    fontFamily: 'Oswald',
    fontSize: '10px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.65',
    letterSpacing: '3px',
    color: '#ffffff'
  },
  topStorySubTitle: {
    fontFamily: 'Oswald',
    fontSize: '52px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.13',
    letterSpacing: '0.7px',
    color: '#ffffff'
  },
  topStoryText: {
    fontFamily: 'Montserrat',
    fontSize: '15px',
    fontWeight: '600',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2.5',
    letterSpacing: '0.7px',
    textAlign: 'justify',
    color: '#f9f8f8',
    marginBottom: '44px',
    [theme.breakpoints.up('md')]: {
      marginBottom: '52.5px'
    }
  },
  subtitleRule: {
    width: '30px',
    height: '0.8px',
    marginRight: '22.5px',
    backgroundColor: '#fff'
  },
  titleContainer: {
    display: 'flex'
  }
});

function TopStory({ classes, blogTitle, blogText, blogLink }) {
  return (
    <div className={classes.root}>
      <Grid container item xs={12} md={6}>
        <Grid container item alignItems="center">
          <div className={classes.subtitleRule} />
          <Typography variant="caption" className={classes.topStoryTitle}>
            SEA SENSORS TOP STORY
          </Typography>
        </Grid>
        <Typography variant="h4" className={classes.topStorySubTitle}>
          {blogTitle}
        </Typography>
      </Grid>
      <Grid container item xs={12} md={6}>
        <Typography variant="caption" className={classes.topStoryText}>
          {blogText}
        </Typography>
        <TextArrowLink
          text="READ MORE"
          href={blogLink}
          target="_blank"
          rel="noopener noreferrer"
        />
      </Grid>
    </div>
  );
}

TopStory.propTypes = {
  classes: PropTypes.shape().isRequired,
  blogTitle: PropTypes.string.isRequired,
  blogText: PropTypes.string.isRequired,
  blogLink: PropTypes.string.isRequired
};

export default withStyles(styles)(TopStory);
