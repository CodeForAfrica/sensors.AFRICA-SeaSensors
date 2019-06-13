import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';

import NewsCard from './NewsCard';

const styles = theme => ({
  cardStyle: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      boxShadow: 'none',
      marginTop: '95px',
      marginBottom: '65px',
      marginRight: '74px'
    }
  },
  parentCard: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  }
});

function Stories({ classes, stories }) {
  return (
    <React.Fragment>
      <div className={classes.parentCard}>
        <div className={classes.cardStyle}>
          {stories.map(story => (
            <NewsCard
              key={story.title}
              title={story.title}
              image={story.image}
              date={story.date}
              link={story.link}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

Stories.propTypes = {
  classes: PropTypes.shape().isRequired,
  stories: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default withStyles(styles)(Stories);
