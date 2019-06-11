import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';

import TextArrowLink from '../TextArrowLink';

const styles = {
  root: {
    top: '176px',
    width: '80%',
    height: '400px',
    display: 'flex',
    position: 'absolute',
    textAlign: 'left',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
    '&:before': {
      content: '""',
      background: 'inherit',
      position: 'absolute',
      left: '-25px',
      top: '-25px',
      right: 0,
      bottom: 0,
      boxShadow: 'inset 0 0 0 3000px rgba(255,255,255,0.3)',
      filter: 'blur(4px)'
    }
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    padding: '30px'
  },
  title: {
    fontFamily: 'Oswald',
    fontSize: '45px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.11,
    letterSpacing: '0.6px',
    color: '#ffffff'
  },
  text: {
    width: '272px',
    height: '107px',
    opacity: 0.6,
    fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 2.08,
    letterSpacing: '0.5px',
    textAlign: 'justify',
    color: '#fff'
  },
  exploreMapParent: {
    display: 'flex',
    paddingTop: '4px',
    marginRight: '20px',
    justifyContent: 'flex-end'
  },
  exploreMapArrow: {
    marginTop: '5px'
  },
  exploreMapText: {
    fontFamily: 'Oswald',
    fontSize: '16px',
    fontWeight: 'bold',
    letterSpacing: '4.8px',
    textAlign: 'right',
    color: '#ffffff',
    paddingRight: '20px'
  }
};

function HeaderText({ classes }) {
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography variant="h1" gutterBottom className={classes.title}>
          Sea Sensors
        </Typography>
        <Typography variant="h1" gutterBottom className={classes.text}>
          Mapping fishing with explosives along the coast of East Africa Using
          cutting-edge underwater acoustic technology to document the occurrence
          of blast fishing.
        </Typography>
        <TextArrowLink
          border={false}
          href="https://alpha.seasensors.africa/map/"
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
