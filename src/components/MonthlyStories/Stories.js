import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import { withStyles } from '@material-ui/core';

import NewsCard from './NewsCard';

const styles = theme => ({
  root: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  stories: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      boxShadow: 'none',
      marginTop: '5.9375rem',
      marginBottom: '4.0625rem'
    }
  },
  newsCard: {
    [theme.breakpoints.up('md')]: {
      width: '33.1%',
      flex: '1 1 0'
    }
  },
  newsCardMargin: {
    [theme.breakpoints.up('md')]: {
      marginLeft: '2.109375rem' // .75 of lg
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: '2.8125rem'
    }
  }
});

function Stories({ classes, stories }) {
  return (
    <div className={classes.root}>
      <div className={classes.stories}>
        {stories.map((story, index) => (
          <NewsCard
            key={story.title}
            title={story.title}
            image={story.image}
            date={story.date}
            link={story.link}
            classes={{
              root: classNames(classes.newsCard, {
                [classes.newsCardMargin]: index > 0
              })
            }}
          />
        ))}
      </div>
    </div>
  );
}

Stories.propTypes = {
  classes: PropTypes.shape().isRequired,
  stories: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default withStyles(styles)(Stories);
