import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';
import Tabletop from 'tabletop';

import PropTypes from 'prop-types';

import Line from '../Line';

import MediaCard from './MediaCard';

const stateStories = [];

const styles = theme => ({
  root: {
    alignItems: 'center',
    padding: '102.2px 0',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.05)'
  },
  stories: {
    width: '100%',
    padding: '30px',
    marginTop: '78.5px',

    display: 'flex',
    flexDirection: 'column',

    alignItems: 'center',
    scrollbarWidth: 'none',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '78.5px',
      flexDirection: 'row',
      overflow: 'scroll'
    }
  },
  title: {
    fontFamily: 'Oswald',
    fontSize: '52px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: '0.7 px',
    color: ' #023256',
    marginLeft: '70px'
  }
});

class Stories extends Component {
  constructor(props) {
    super(props);

    this.state = { stories: stateStories };
  }

  componentDidMount() {
    Tabletop.init({
      key: '187vzJU3uqHqlyk_UkpQIT2MwRp5tE5eS9UYWo5kf9R0',
      callback: (data, tabletop) => {
        this.processData(tabletop.sheets('Sea Sensors Stories').all());
      }
    });
  }

  processData(data) {
    const newData = [...data];

    for (let i = 0; i < newData.length; i += 1) {
      newData[i].id = i;
    }
    this.setState({ stories: newData });
  }

  sortByDates() {
    const { stories } = this.state;
    const dateArray = [...stories];

    const compareDates = (firstDate, secondDate) => {
      let comparison = 0;
      if (new Date(firstDate.date) > new Date(secondDate.date)) {
        comparison = -1;
      } else if (new Date(firstDate.date) < new Date(secondDate.date)) {
        comparison = 1;
      }
      return comparison;
    };

    const sortedDatesArray = dateArray.sort(compareDates);
    return sortedDatesArray;
  }

  render() {
    const { classes } = this.props;
    const sortedStories = this.sortByDates();

    return (
      <div className={classes.root}>
        <Typography variant="h2" gutterBottom className={classes.title}>
          Sea Sensors Stories.
          <Line />
        </Typography>
        <div className={classes.stories}>
          {sortedStories.map(story => (
            <MediaCard
              key={story.id}
              title={story.title}
              image={story.image}
              date={story.date}
              link={story.link}
            />
          ))}
        </div>
      </div>
    );
  }
}

Stories.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(Stories);
