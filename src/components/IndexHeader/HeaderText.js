import React from 'react';
import { withStyles, Typography } from '@material-ui/core';

const styles = {
  content: {
    width: '750px',
    padding: '4.5em',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    position: 'relative',
    bottom: '5.8em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
  },
  contentHeader: {
    width: '500.3px',
    fontFamily: 'Oswald',
    fontSize: '65px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.27',
    letterSpacing: '0.8px',
    color: '#ffffff',
  },
  contentSubHeader: {
    width: '500.3px',
    fontFamily: 'Oswald',
    fontSize: '41px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.27',
    letterSpacing: '0.8px',
    color: '#ffffff',
  },
  contentText: {
    width: '412px',
    opacity: '0.6',
    fontFamily: 'Montserrat',
    fontSize: '15px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2.25',
    letterSpacing: '0.7px',
    marginRight: '5.2em',
    color: '#ffffff',
  },
};

function HeaderText({ classes }) {
  return (
    <div className={classes.content}>
      <Typography component="h2" variant="h1" gutterBottom className={classes.contentHeader}>
        Sea Sensors
      </Typography>
      <Typography component="h3" variant="h1" gutterBottom className={classes.contentSubHeader}>
        Mapping fishing with explosives along the coast of East Africa
        <br />
      </Typography>
      <Typography variant="body1" gutterBottom className={classes.contentText}>
        Environmentally destructive fishing
        using explosives has been conducted illegally along the coast of Tanzania for
        decades.
      </Typography>
    </div>
  );
}
export default withStyles(styles)(HeaderText);
