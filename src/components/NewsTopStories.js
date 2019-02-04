import React from 'react';
import { withStyles, Typography } from '@material-ui/core';

const styles = {
  titleContent: {
    display: 'flex',
    position: 'relative',
    left: '163px',
    marginTop: '145px',
  },
  titleRule: {
    width: '22.5px',
    height: '1px',
    opacity: '0.3',
    background: '#023256',
    marginRight: '15px',
  },
  titleText: {
    width: '216.8px',
    height: '24px',
    opacity: '0.4',
    fontFamily: 'Oswald',
    fontSize: '9px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.83px',
    letterSpacing: '5.4px',
    color: '#023256',
  },
  topStoriesTitle: {
    width: '529.5px',
    height: '102px',
    fontFamily: 'Oswald',
    fontSize: '52px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.7px',
    marginLeft: '163px',
    color: '#023256',
  },
  storiesBody: {
    width: '724px',
    height: '102px',
    opacity: '0.6',
    fontFamily: 'Montserrat',
    fontSize: '15px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: '0.7px',
    color: '#023256',
    marginLeft: '163px',
    lineHeight: 2.5,
  },
};

function NewsTopStories({ classes }) {
  return (
    <div>
      <div className={classes.titleContent}>
        <div className={classes.titleRule} />
        <Typography variant="body1" gutterBottom className={classes.titleText}>TOP STORIES</Typography>
      </div>
      <Typography variant="h1" gutterBottom className={classes.topStoriesTitle}>Our Top Stories.</Typography>
      <Typography variant="body1" className={classes.storiesBody}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        <br />
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </Typography>
    </div>
  );
}

export default withStyles(styles)(NewsTopStories);
