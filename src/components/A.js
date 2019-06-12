import React from 'react';
import PropTypes from 'prop-types';

import { Link } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    color: '#fff'
  }
});

function A({ classes, children, href, variant, underline, ...props }) {
  return (
    <Link
      className={classes.root}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      underline={underline}
      variant={variant}
      {...props}
    >
      {children}
    </Link>
  );
}
A.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  href: PropTypes.string.isRequired,
  underline: PropTypes.oneOf(['none', 'hover', 'always']),
  variant: PropTypes.string
};

A.defaultProps = {
  children: null,
  underline: 'none',
  variant: 'inherit'
};

export default withStyles(styles)(A);
