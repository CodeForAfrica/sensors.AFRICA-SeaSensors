import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Tabletop from 'tabletop';

import Line from '../Line';

import MediaCard from './MediaCard';

const stateStories = [];

const styles = {
  mask: {
    height: '760px',
    paddingLeft: '90px',
    paddingTop: '30px',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.05)'
  },
  card: {
    display: 'inline-flex',
    boxShadow: 'none',
    marginTop: '50px',
    overflowX: 'scroll',
    width: '100%'
  },
  seaSensorsStories: {
    fontFamily: 'Oswald',
    fontSize: '52px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: '0.7 px',
    color: ' #023256',
    marginLeft: '70px'
  }
};

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
    const sortedStories = this.sortByDates();

    return (
      <React.Fragment>
        <div style={styles.mask}>
          <Typography
            component="h2"
            variant="h2"
            gutterBottom
            style={styles.seaSensorsStories}
          >
            Sea Sensors Stories.
            <Line />
          </Typography>
          <div style={styles.card}>
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
      </React.Fragment>
    );
  }
}

export default Stories;
