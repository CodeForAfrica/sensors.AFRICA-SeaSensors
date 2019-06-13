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
      boxShadow: 'none',
      marginTop: '95px',
      marginBottom: '65px',
      marginRight: '74px'
    }
  },
  newsCardMargin: {
    [theme.breakpoints.up('md')]: {
      marginLeft: '2.8125rem'
    }
  }
});

function Stories({ classes, stories }) {
  return (
    <div className={classes.root}>
      <div className={classes.stories}>
        {stories.slice(0, 3).map((story, index) => (
          <NewsCard
            key={story.title}
            title={story.title}
            image={story.image}
            date={story.date}
            link={story.link}
            classes={{
              root: classNames({ [classes.newsCardMargin]: index > 0 })
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
