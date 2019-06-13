import React from 'react';
import { withStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {},
  subtitle: {
    display: 'flex',
    alignItems: 'center'
  },
  subtitleRule: {
    width: '0.9375rem',
    height: '1px',
    marginRight: '1.5625rem',
    opacity: '0.3',
    background: '#023256',
    [theme.breakpoints.up('md')]: {
      width: '1.40625rem',
      marginRight: '1.40625rem'
    }
  },
  subtitleText: {
    opacity: '0.4',
    fontFamily: 'Oswald',
    fontSize: '0.5rem',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 2.75,
    letterSpacing: '4.8px',
    color: '#023256',
    textTransform: 'uppercase',
    [theme.breakpoints.up('md')]: {
      fontSize: '0.5625rem',
      lineHeight: 1.83,
      letterSpacing: '5.4px'
    }
  },
  topStoriesTitle: {
    width: '529.5px',
    height: '102px',
    fontFamily: 'Oswald',
    fontSize: '52px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.7px',
    marginLeft: '163px',
    color: '#023256'
  }
});

function NewsTitleText(props) {
  const { classes, subtitle, topStoriesTitle } = props;

  return (
    <div className={classes.root}>
      {subtitle && subtitle.length > 0 && (
        <div className={classes.subtitle}>
          <div className={classes.subtitleRule} />
          <Typography
            variant="subtitle1"
            className={classes.subtitleText}
            component="span"
          >
            {subtitle}
          </Typography>
        </div>
      )}
      <Typography variant="h2" gutterBottom className={classes.topStoriesTitle}>
        {topStoriesTitle}
      </Typography>
    </div>
  );
}

NewsTitleText.propTypes = {
  classes: PropTypes.shape().isRequired,
  subtitle: PropTypes.string.isRequired,
  topStoriesTitle: PropTypes.string.isRequired
};

export default withStyles(styles)(NewsTitleText);
