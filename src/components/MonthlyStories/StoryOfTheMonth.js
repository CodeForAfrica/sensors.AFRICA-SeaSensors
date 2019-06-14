import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, Typography } from '@material-ui/core';

import TextArrowLink from '../TextArrowLink';

import defaultBackground from '../../assets/Snorkel2.png';

const styles = theme => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '31.25rem',
    backgroundImage: `url(${defaultBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: '2.9375rem',
    [theme.breakpoints.up('md')]: {
      height: '34.21875rem',
      marginTop: '3.25rem'
    }
  },
  background: {
    width: '88.9%',
    height: '18.40625rem',
    background: 'inherit',
    '-webkit-filter': 'blur(11.3px)',
    filter: 'blur(11.3px)',
    position: 'absolute',
    right: '0',
    bottom: '0',
    [theme.breakpoints.up('md')]: {
      width: '50%',
      height: '87.7%'
    }
  },
  story: {
    width: '88.9%',
    height: '18.40625rem',
    backgroundColor: 'rgba(255,255,255,0.2)',
    position: 'absolute',
    right: '0',
    bottom: '0',
    zIndex: '2',
    padding: '1.96875rem 1.875rem',
    [theme.breakpoints.up('md')]: {
      width: '50%',
      height: '87.7%',
      padding: '4.5625rem 2.8125rem'
    },
    [theme.breakpoints.up('lg')]: {
      padding: '4.5625rem 3.75rem'
    }
  },
  heading: {
    fontFamily: 'Oswald',
    fontSize: '0.5rem',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.88',
    letterSpacing: '4.3px',
    color: '#ffffff',
    [theme.breakpoints.up('md')]: {
      fontSize: '0.65625rem',
      lineHeight: '2.14',
      letterSpacing: '5.6px'
    }
  },
  summary: {
    height: '8.75rem',
    marginTop: '1.875rem',
    overflowY: 'auto',

    // Scrollbar: Firefox
    scrollbarColor: '#023256 #fff',
    scrollbarWidth: 'thin',
    // Scrollbar: Webkit
    '&::-webkit-scrollbar': {
      width: '5px',
      height: '8px',
      backgroundColor: '#fff'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#023256'
    },
    [theme.breakpoints.up('md')]: {
      height: '11.25rem',
      marginTop: '3.75rem'
    }
  },
  title: {
    fontFamily: 'Oswald',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.5',
    letterSpacing: '1.3px',
    color: '#ffffff',
    [theme.breakpoints.up('md')]: {
      fontSize: '2.8125rem',
      lineHeight: '1',
      letterSpacing: '3px'
    }
  },
  text: {
    marginTop: '0.625rem',
    fontFamily: 'Montserrat',
    fontSize: '0.75rem',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.79',
    letterSpacing: '0.8px',
    color: '#ffffff',
    [theme.breakpoints.up('md')]: {
      fontSize: '15px',
      lineHeight: '2.15',
      letterSpacing: '1px'
    }
  },
  readStory: {
    marginTop: '0.59375rem',
    [theme.breakpoints.up('md')]: {
      marginTop: '2.8625rem'
    }
  },
  readStoryLink: {
    boxShadow: 'none',
    paddingLeft: 0
  }
});

function StoryOfTheMonth({ classes, story: { image, title, text, link } }) {
  return (
    <div className={classes.root} style={{ backgroundImage: `url(${image})` }}>
      <div className={classes.background} />
      <div className={classes.story}>
        <Typography variant="subtitle2" className={classes.heading}>
          STORY OF THE MONTH
        </Typography>
        <div className={classes.summary}>
          <Typography component="h3" variant="h3" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="body1" className={classes.text}>
            {text}
          </Typography>
        </div>
        <div className={classes.readStory}>
          <TextArrowLink
            text="READ STORY"
            href={link}
            border={false}
            classes={{ root: classes.readStoryLink }}
          />
        </div>
      </div>
    </div>
  );
}

StoryOfTheMonth.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  story: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(styles)(StoryOfTheMonth);
