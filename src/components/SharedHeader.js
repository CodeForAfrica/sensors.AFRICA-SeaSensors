import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import classNames from 'classnames';

import arrowBack from '../assets/arrowWhite.png';

import Navigation from './Navigation';

const styles = theme => ({
  resourceImage: {
    width: '100%',
    height: '480px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 35%',
    position: 'relative',
    top: '0',
    left: '0',
    [theme.breakpoints.up('md')]: {
      height: '608px'
    }
  },

  parentHeaderText: {
    position: 'absolute',
    top: '35%',
    padding: '0 8%',
    [theme.breakpoints.up('md')]: {
      top: '40%',
      padding: '0 5.3rem'
    }
  },
  subtitleRule: {
    width: '22.5px',
    height: '2px',
    backgroundColor: '#ffffff',
    marginRight: '20px'
  },
  mediaResources: {
    height: '142px',
    fontFamily: 'Oswald',
    fontSize: '45px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: '0.6px',
    lineHeight: '1.1',
    color: '#ffffff',
    marginBottom: '1.5em',
    [theme.breakpoints.up('md')]: {
      fontSize: '65px',
      height: '115.5px',
      letterSpacing: '0.8px'
    }
  },
  arrowBack: {
    transform: 'rotate(180deg)',
    display: 'flex',
    position: 'relative',
    justifyContent: 'flex-end'
  },
  arrowStyle: {
    width: '40px',
    height: '8px',
    [theme.breakpoints.up('md')]: {
      width: '62px',
      height: '13px'
    }
  },
  subText: {
    textTransform: 'uppercase',
    color: '#ffffff',
    fontFamily: 'Oswald',
    fontSize: '8px',
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: '2.75',
    letterSpacing: '4.8px',
    display: 'inline-block',
    marginLeft: '1rem'
  },
  lineBar: {
    display: 'inline-block',
    borderBottom: '1px solid rgba(255,255,255, 0.5)',
    marginBottom: '2px',
    marginLeft: '0.3rem',
    width: '1.4em'
  },
  bars: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      right: 0,
      bottom: 0,
      position: 'absolute',
      padding: '2.1875rem 3.7687rem'
    }
  },
  activelineBar: {
    borderBottom: '2px solid rgba(255,255,255)'
  }
});

function SharedHeader(props) {
  const { mediaResources, classes, subTitle, activeNav } = props;
  return (
    <div className={classes.resourceImage}>
      <Navigation activeNav={activeNav} />
      <div className={classes.parentHeaderText}>
        {subTitle.length > 0 && (
          <div>
            <div className={classes.lineBar} />
            <Typography className={classes.subText}>{subTitle}</Typography>
          </div>
        )}
        <Typography
          variant="body1"
          gutterBottom
          className={classes.mediaResources}
        >
          {mediaResources}
        </Typography>
        <div className={classes.arrowBack}>
          <a href="#link">
            <img
              src={arrowBack}
              alt="Arrow back"
              className={classes.arrowStyle}
            />
          </a>
        </div>
      </div>
      <div className={classes.bars}>
        {[1, 2, 3].map(index => (
          <div
            key={index}
            className={classNames(classes.lineBar, {
              [classes.activelineBar]: index === activeNav
            })}
          />
        ))}
      </div>
    </div>
  );
}

SharedHeader.defaultProps = {
  subTitle: ''
};

SharedHeader.propTypes = {
  classes: PropTypes.shape().isRequired,
  mediaResources: PropTypes.string.isRequired,
  // link: PropTypes.string.isRequired,
  activeNav: PropTypes.number.isRequired,
  subTitle: PropTypes.string
};

export default withStyles(styles)(SharedHeader);
