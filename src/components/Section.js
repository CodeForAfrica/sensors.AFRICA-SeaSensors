import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%'
  },
  content: {
    margin: '5.125rem 1.875rem 4.9375rem',
    [theme.breakpoints.up('md')]: {
      // .75 of lg width
      width: '87.5%',
      margin: '7.875rem 4.171875rem 12.46875rem'
    },
    [theme.breakpoints.up('lg')]: {
      margin: '7.875rem 5.5625rem 12.46875rem'
    }
  }
});

function Section({ classes, children }) {
  return (
    <div className={classes.root}>
      <div className={classes.content}>{children}</div>
    </div>
  );
}

Section.propTypes = {
  classes: PropTypes.shape().isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Section.defaultProps = {
  children: null
};

export default withStyles(styles)(Section);
