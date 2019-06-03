import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from '@material-ui/core';

import arrow from '../assets/arrowBlueRight.png';

import TextArrowButton from './TextArrowButton';

const styles = {
  root: {
    flexGrow: 1
  },
  moreContainer: {
    width: 'auto',
    height: '30em',
    backgroundColor: '#ffffff'
  },
  moreText: {
    opacity: '0.6',
    fontFamily: 'Montserrat',
    fontSize: '15px',
    lineHeight: '2.5',
    letterSpacing: '0.7px',
    textAlign: 'justify',
    color: '#023256',
    marginTop: '125px',
    marginLeft: '118.8px'
  },
  linkText: {
    fontFamily: 'Montserrat',
    fontSize: '15px',
    color: '#023256',
    fontWeight: 'bold'
  },
  readMore: {
    width: '292.5px',
    height: '75px',
    boxShadow: '0 23px 60px 0 rgba(0, 0, 0, 0.05)'
  },
  textArrowButtonParent: {
    width: '255px',
    height: '60px',
    border: '3px #023256 solid',
    paddingLeft: '1rem',
    boxShadow: '0 23px 60px 0 rgba(0, 0, 0, 0.05)',
    display: 'flex',
    position: 'relative',
    top: '12em',
    left: '17em'
  },
  textArrowButtonText: {
    fontFamily: 'Oswald',
    fontSize: '16px',
    fontWeight: 'bold',
    letterSpacing: '3.2px',
    color: '#023256',
    marginTop: '1em',
    paddingRight: '8px'
  },
  textArrowButtonArrow: {
    marginTop: '1em'
  },
  arrowLink: {
    textDecoration: 'none'
  }
};

function More({ classes }) {
  return (
    <div className={classes.moreContainer}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" className={classes.moreText}>
            The acoustic equipment is recording all sounds in the marine
            environment not just blasts, therefore to extract the blasts from
            the many weeks of data automated computer algorithms are required.
            All short, loud, low frequency sounds are extracted from the data by
            the open source program{' '}
            <a
              href="https://www.pamguard.org/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.linkText}
            >
              PamGuard
            </a>
            , producing thousands of clips.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <a
            href="https://alpha.seasensors.africa/about/"
            className={classes.arrowLink}
          >
            <TextArrowButton
              className={classes}
              text="FIND OUT MORE"
              image={arrow}
            />
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

More.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(More);
