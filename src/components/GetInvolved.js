import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from '@material-ui/core';

import TextArrowLink from './TextArrowLink';
import Line from './Line';

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    padding: '3.125rem 1.875rem',
    paddingBottom: '6.75rem',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      minHeight: '31.25rem',

      padding: '0 7.425rem',
      paddingBottom: '5.0187rem',

      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  },
  text: {
    opacity: 0.6,
    fontFamily: 'Montserrat',
    fontSize: '0.75rem',
    color: '#023256',
    lineHeight: '2.08',
    textAlign: 'justify',
    letterSpacing: '0.03125rem',
    marginBottom: '2.5rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '0.9375rem',
      lineHeight: 2.5,
      letterSpacing: '0.0437rem'
    }
  },
  linkText: {
    fontFamily: 'Montserrat',
    fontSize: '0.75rem',
    color: '#023256',
    fontWeight: 'bold',
    lineHeight: '2.08',
    letterSpacing: '0.03125rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '0.9375rem'
    }
  },
  takeAction: {
    [theme.breakpoints.up('md')]: {
      alignSelf: 'center'
    }
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '3.1875rem'
  },
  title: {
    fontFamily: 'Oswald',
    fontSize: '2.1875rem',
    fontWeight: 'bold',
    letterSpacing: '0.025rem',
    color: '#023256',
    [theme.breakpoints.up('md')]: {
      fontSize: '3.75rem',
      letterSpacing: '0.05rem'
    }
  }
});

function GetInvolved({ classes }) {
  return (
    <div className={classes.root}>
      <Grid item xs={12} md={6}>
        <div className={classes.header}>
          <Typography className={classes.title}>How to get involved</Typography>
          <Line />
        </div>
        <Typography variant="body2" className={classes.text}>
          If you’re interested in the project or the data, please contact us.
          You can also help us document blasts. If you hear or see a dynamite
          blast in Tanzania, please record the date, time and location, and send
          the information to us. Record the date, time and location, by clicking
          on this link.
        </Typography>
      </Grid>
      <TextArrowLink
        classes={{ root: classes.takeAction }}
        href="https://forms.gle/c7bZEipCRX5xe4SMA"
        text="TAKE ACTION"
        blue
      />
    </div>
  );
}

GetInvolved.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(GetInvolved);
