import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from '@material-ui/core';

import TextArrowLink from './TextArrowLink';

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    padding: '3.125rem 1.875rem',
    paddingBottom: '6.75rem',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      minHeight: '28.25rem',
      paddingTop: '3rem',
      padding: '0 7.425rem',
      paddingBottom: '5.0187rem',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  },
  text: {
    opacity: 0.6,
    fontFamily: 'Montserrat',
    fontSize: '0.9375rem',
    lineHeight: 2.5,
    letterSpacing: '0.0437rem',
    textAlign: 'justify',
    color: '#023256',
    marginBottom: '2.5rem'
  },
  linkText: {
    fontFamily: 'Montserrat',
    fontSize: '0.9375rem',
    color: '#023256',
    fontWeight: 'bold'
  },
  findOutMore: {
    [theme.breakpoints.up('md')]: {
      alignSelf: 'flex-end'
    }
  }
});

function More({ classes }) {
  return (
    <div className={classes.root}>
      <Grid item xs={12} md={6}>
        <Typography variant="body2" className={classes.text}>
          The acoustic equipment is recording all sounds in the marine
          environment not just blasts, therefore to extract the blasts from the
          many weeks of data automated computer algorithms are required. All
          short, loud, low frequency sounds are extracted from the data by the
          open source program{' '}
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
      <TextArrowLink
        classes={{ root: classes.findOutMore }}
        blue
        text="FIND OUT MORE"
        href="https://alpha.seasensors.africa/about/"
      />
    </div>
  );
}

More.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(More);
