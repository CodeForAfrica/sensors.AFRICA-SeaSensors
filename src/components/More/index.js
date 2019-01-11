import React from 'react';
import { Grid, Typography, withStyles } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
  moreContainer: {
    width: 'auto',
    height: 'auto',
    backgroundColor: '#ffffff',
  },
  moreText: {
    width: '563.3px',
    height: '174px',
    opacity: '0.6',
    fontFamily: 'Montserrat',
    fontSize: '15px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2.5',
    letterSpacing: '0.7px',
    textAlign: 'justify',
    color: '#023256',
    marginTop: '125px',
    marginLeft: '113px',
  },
  readMore: {
    width: '292.5px',
    height: '75px',
    boxShadow: '0 23px 60px 0 rgba(0, 0, 0, 0.05)',
  },
};

function More({ classes }) {
  return (
    <div className={classes.moreContainer}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" className={classes.moreText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <span className={classes.readMore}>
                        Read More
          </span>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(More);
