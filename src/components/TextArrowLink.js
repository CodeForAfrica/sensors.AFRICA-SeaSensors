import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import className from 'classnames';
import whiteArrow from '../assets/arrowWhite.png';
import blueArrow from '../assets/arrowBlueRight.png';

const styles = theme => ({
  root: {
    height: '3.75rem',
    width: 'fit-content',
    padding: '16px',
    boxShadow: '0 0.75rem 2rem 0 rgba(0, 0, 0, 0.05)',
    border: '0.125rem #fff solid',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#fff',
    [theme.breakpoints.up('md')]: {
      height: '4.6875rem',
      boxShadow: '0 1.4375rem 3.75rem 0 rgba(0, 0, 0, 0.05)',
      border: '0.1875rem #fff solid'
    }
  },
  noBorder: {
    border: 'unset'
  },
  blue: {
    border: '0.125rem #023256 solid',
    color: '#023256',
    [theme.breakpoints.up('md')]: {
      border: '0.1875rem #023256 solid'
    }
  },
  text: {
    height: '1.5rem',
    fontFamily: 'Oswald',
    fontSize: '0.8125rem',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '3.3px',
    marginRight: '3.5em',
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
      letterSpacing: '3.2px'
    }
  },
  arrow: {
    width: '2.5rem',
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      width: 'auto'
    }
  }
});

function TextArrowLink({ classes, href, text, blue, border }) {
  return (
    <a
      className={className(classes.root, {
        [classes.blue]: blue,
        [classes.noBorder]: !border
      })}
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
  blue: PropTypes.bool,
  border: PropTypes.bool
};

TextArrowLink.defaultProps = {
  blue: false,
  border: true
};

export default withStyles(styles)(TextArrowLink);
