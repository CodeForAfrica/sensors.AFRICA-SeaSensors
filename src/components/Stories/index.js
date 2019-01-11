import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MediaCard from './MediaCard';
import artem from '../../assets/artem.png';
import scuba from '../../assets/scuba.png';
import drone from '../../assets/drone.png';

const stateStories = [
  {
    title: 'Story Title 1',
    bodyField: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'Launch Site',
    image: scuba,
  }, {
    title: 'Story Title 2',
    bodyField: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'Launch Site',
    image: artem,
  }, {
    title: 'Story Title 3',
    bodyField: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'Launch Site',
    image: drone,
  },
];

const styles = {
  mask: {
    width: '100%',
    height: 'auto',
    padding: '35px',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '102.2px',
    backgroundColor: '#f2f2f2',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#f2f2f2',
    boxShadow: 'none',
  },
  seaSensorsStories: {
    width: '596.3 px',
    height: '112.5 px',
    fontFamily: 'Oswald',
    fontSize: '52 px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.7 px',
    color: ' #023256',
    marginLeft: '10 %',
  },

};

class Stories extends Component {
    state = {
      stories: stateStories,
    }

    render() {
      const { stories } = this.state;
      return (
        <React.Fragment>
          <CssBaseline />
          <div style={styles.mask}>
            <h1 style={styles.seaSensorsStories}>
                        Sea Sensors Stories.
            </h1>
            <div style={styles.card}>
              {stories
                .map(story => (
                  <MediaCard
                    key={story.title}
                    title={story.title}
                    image={story.image}
                    bodyField={story.bodyField}
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
