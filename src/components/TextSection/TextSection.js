import React from 'react';
import { Grid, Typography, withStyles } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
  textGrid: {
    height: '28em',
    backgroundColor: '#ffffff',
    width: '100%',
  },
  blastFishsingTitle: {
    width: '495.9px',
    height: '153px',
    fontFamily: 'Oswald',
    fontSize: '52px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.13',
    letterSpacing: '0.7px',
    color: '#023256',
    marginTop: '125px',
    marginLeft: '123px',
  },
  blastFishingText: {
    width: '600.1px ',
    height: '25em',
    opacity: '0.6',
    fontFamily: 'Montserrat',
    fontSize: '14px ',
    fontWeight: 'normal',
    fontStyle: ' normal',
    fontStretch: 'normal',
    lineHeight: '2.5',
    letterSpacing: '0.7px',
    textAlign: 'justify',
    color: '#023256',
    marginTop: '5em',
  },
};

function TextSection(props) {
  const { classes, title, text } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h1" className={classes.blastFishsingTitle}>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" className={classes.blastFishingText}>
            {text}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(TextSection);
