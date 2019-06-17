import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';

import TextArrowLink from '../TextArrowLink';

const styles = theme => ({
  root: {
    top: '11rem',
    width: '20.9375rem',
    height: '21.25rem',
    position: 'absolute',
    textAlign: 'left',
    overflow: 'hidden',
    background: 'inherit',
    '&:before': {
      content: '""',
      background: 'inherit',
      position: 'absolute',
      left: '-1.5625rem',
      top: '-1.5625rem',
      right: 0,
      bottom: 0,
      boxShadow: 'inset 0 0 0 187.5rem rgba(255,255,255,0.3)',
      filter: 'blur(0.25rem)'
    },
    [theme.breakpoints.up('md')]: {
      height: '26.25rem',
      width: '46.875rem'
    }
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    padding: '1.875rem',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      paddingLeft: '5.5313rem',
      paddingTop: '3.0187rem',
      paddingRight: '3.5125rem'
    }
  },
  title: {
    fontFamily: 'Oswald',
    fontSize: '2.8125rem',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.11,
    letterSpacing: '0.0375rem',
    color: '#ffffff',
    [theme.breakpoints.up('md')]: {
      fontSize: '4.0625rem'
    }
  },
  text: {
    opacity: 0.6,
    fontFamily: 'Montserrat',
    fontSize: '0.75rem',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 2.08,
    letterSpacing: '0.0313rem',
    textAlign: 'justify',
    color: '#fff',
    [theme.breakpoints.up('md')]: {
      fontSize: '0.9375rem'
    }
  },
  arrowLink: {
    display: 'flex',
    alignSelf: 'flex-end',
    justifySelf: 'end',
    marginTop: '1.25rem',
    boxShadow: 'unset',
    '& span': {
      marginRight: '0.625rem'
    },
    // Carousel overrides
    '& img': {
      width: 'unset !important',
      verticalAlign: 'unset !important',
      border: 'unset !important',
      display: 'unset !important',
      pointerEvents: 'unset !important'
    }
  }
});

function HeaderText({ classes }) {
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography gutterBottom className={classes.title}>
          Sea Sensors
        </Typography>
        <Typography gutterBottom className={classes.text}>
          Mapping fishing with explosives along the coast of East Africa Using
          cutting-edge underwater acoustic technology to document the occurrence
          of blast fishing.
        </Typography>
        <TextArrowLink
          classes={{ root: classes.arrowLink }}
          border={false}
          href="https://map.seasensors.africa/"
          text="EXPLORE MAP"
        />
      </div>
    </div>
  );
}

HeaderText.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(HeaderText);
