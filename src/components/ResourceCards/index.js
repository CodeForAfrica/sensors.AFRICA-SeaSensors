import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MediaCard from './ResourceCards';


const resourceCardContent = [
  {
    title: 'Data',
    text: 'Lorem ipsum dolor sit amet conc tetur adipi scing elit lorem.',
    link: 'Data Link 1',
  }, {
    title: 'Video',
    text: 'Consec tetur adipisc ing elit lorem ipsum.',
    link: 'Video Link 1',
    link2: 'Video Link 2',
  }, {
    title: 'Research',
    text: 'Lorem ipsum dolor sit amet conc tetur adipi scing elit',
    link: 'Link to Gill’s research',
  },
  {
    title: 'Visualisations',
    text: 'Lorem ipsum dolor sit amet conse ctetur.',
    link: 'Visualisation Link',
  },
];

const styles = {
  cardStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#ffffff',
    boxShadow: 'none',
    marginTop: '95px',
    marginBottom: '65px',
  },
  parentCard: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '102.2px',
    backgroundColor: '#ffffff',
  },
};

class ResourceVideos extends Component {
    state = {
      resourceVideos: resourceCardContent,
    }

    render() {
      const { resourceVideos } = this.state;
      return (
        <React.Fragment>
          <CssBaseline />
          <div className={styles.parentCard}>
            <div style={styles.cardStyle}>
              {resourceVideos
                .map(resource => (
                  <MediaCard
                    key={resource.title}
                    title={resource.title}
                    text={resource.text}
                    link={resource.link}
                    link2={resource.link2}
                  />
                ))}
            </div>
          </div>
        </React.Fragment>
      );
    }
}

export default ResourceVideos;
