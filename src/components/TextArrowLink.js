import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import className from 'classnames';
import whiteArrow from '../assets/arrowWhite.png';
import blueArrow from '../assets/arrowBlueRight.png';

const styles = {
  root: {
    height: '3.75rem',
    width: 'fit-content',
    border: '0.1875rem #fff solid',
    padding: '16px',
    boxShadow: '0 1.4375rem 3.75rem 0 rgba(0, 0, 0, 0.05)',
    display: 'flex',
    alignItmes: 'center',
    textDecoration: 'none',
    color: '#fff'
  },
  blue: {
    border: '0.1875rem #023256 solid',
    color: '#023256'
  },
  text: {
    height: '1.5rem',
    fontFamily: 'Oswald',
    fontSize: '1rem',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.2rem',
    marginRight: '3.5em'
  },
  arrow: {}
};

function TextArrowLink({ classes, href, text, blue }) {
  return (
    <a
      className={className(classes.root, { [classes.blue]: blue })}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={classes.text}>{text}</span>
      <img
        className={classes.arrow}
        src={blue ? blueArrow : whiteArrow}
        alt="Arrow"
      />
    </a>
  );
}

TextArrowLink.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  blue: PropTypes.bool
};

TextArrowLink.defaultProps = {
  blue: false
};

export default withStyles(styles)(TextArrowLink);
