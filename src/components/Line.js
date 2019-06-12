import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = {
  root: {
    width: '80px',
    height: '2px',
    background: 'lightgrey',
    marginTop: '20px',
    borderLeft: 'solid #023256 20px'
  }
};

function Line({ classes }) {
  return <div className={classes.root} />;
}

Line.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(Line);
