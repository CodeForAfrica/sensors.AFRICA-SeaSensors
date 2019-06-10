import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from '@material-ui/core';

import Line from '../Line';

const styles = theme => ({
  root: {
    flexGrow: 1,

    '& > div > :first-child': {
      marginBottom: '2.5rem'
    },

    padding: '3.8125rem 1.875rem',
    [theme.breakpoints.up('md')]: {
      padding: '8.0563rem 7.0625rem'
    }
  },
  blastFishsingTitle: {
    fontFamily: 'Oswald',
    fontSize: '3.25rem',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.13',
    letterSpacing: '0.0437rem',
    color: '#023256'
  },
  blastFishingText: {
    opacity: '0.6',
    fontFamily: 'Montserrat',
    fontSize: '0.875rem ',
    fontWeight: 'normal',
    fontStyle: ' normal',
    fontStretch: 'normal',
    lineHeight: '2.5',
    letterSpacing: '0.0437rem',
    textAlign: 'justify',
    color: '#023256'
  }
});

function TextSection({ classes, title, text }) {
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} md={6}>
          <Typography variant="h1" className={classes.blastFishsingTitle}>
            {title}
          </Typography>
          <Line />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body2" className={classes.blastFishingText}>
            {text}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

TextSection.propTypes = {
  classes: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default withStyles(styles)(TextSection);
