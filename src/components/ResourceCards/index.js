import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import ResourceCards from './ResourceCards';

const resourceCardContent = [
  {
    title: 'Data',
    text: 'Lorem ipsum dolor sit amet conc tetur adipi scing elit lorem.',
    link: 'Data Link 1'
  },
  {
    title: 'Video',
    text: 'Consec tetur adipisc ing elit lorem ipsum.',
    link: 'Video Link 1',
    link2: 'Video Link 2'
  },
  {
    title: 'Research',
    text: 'Lorem ipsum dolor sit amet conc tetur adipi scing elit',
    link: 'Link to Gill’s research'
  },
  {
    title: 'Visualisations',
    text: 'Lorem ipsum dolor sit amet conse ctetur.',
    link: 'Visualisation Link'
  }
];

const styles = theme => ({
  cardStyle: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#ffffff',
    boxShadow: 'none',
    marginTop: '95px',
    marginBottom: '65px',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      alignContent: 'space-between'
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

class ResourceVideos extends Component {
  constructor(props) {
    super(props);

    this.state = { resourceVideos: resourceCardContent };
  }

  render() {
    const { resourceVideos } = this.state;
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.parentCard}>
          <div className={classes.cardStyle}>
            {resourceVideos.map(resource => (
              <ResourceCards
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

ResourceVideos.propTypes = {
  classes: PropTypes.shape().isRequired
};
export default withStyles(styles)(ResourceVideos);
