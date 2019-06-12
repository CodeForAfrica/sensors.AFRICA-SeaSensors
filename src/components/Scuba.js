import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import equipmentImage from '../assets/equipment.jpg';

const styles = theme => ({
  root: {
    height: '444px',
    [theme.breakpoints.up('md')]: {
      padding: '88px',
      height: '783px'
    }
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    [theme.breakpoints.up('md')]: {
      backgroundPositionX: 'unset'
    }
  }
});

function Scuba({ classes }) {
  return (
    <div className={classes.root}>
      <img alt="" className={classes.image} src={equipmentImage} />
    </div>
  );
}

Scuba.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(Scuba);
