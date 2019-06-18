import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import FirstScuba from './Scuba/FirstScuba';
import SecondScuba from './Scuba/SecondScuba';
import ThirdScuba from './Scuba/ThirdScuba';

import equipmentImage from '../../assets/equipment.jpg';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '-12.5rem',
    height: 'fit-content',
    backgroundPosition: 'center',
    [theme.breakpoints.up('sm')]: {
      marginLeft: 'unset'
    },
    [theme.breakpoints.up('md')]: {
      margin: '5.5rem'
    }
  },
  hotSpot2: {
    position: 'absolute',
    right: '15%',
    top: '33%',
    width: '36.5%',
    '& > img': {
      width: '100%'
    }
  },
  hotSpot1: {
    position: 'absolute',
    right: '35%',
    bottom: '5%',
    width: '15%',

    transform: 'scaleX(-1)',
    '& > img': {
      width: '100%'
    }
  },
  hotSpot3: {
    position: 'absolute',
    right: '35.5%',
    top: '5%',
    width: '15%',

    transform: 'scaleX(-1)',
    '& > img': {
      width: '100%'
    }
  },
  hidden: {
    display: 'none !important'
  },

  content: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    padding: '1.875rem'
  },
  close: {
    height: '1.125rem',
    width: '1.125rem',
    margin: '0.625rem'
  },
  headerTitle: {
    fontFamily: 'Oswald',
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: 2.14,
    letterSpacing: '0.4688rem',
    color: '#fff',
    opacity: 0.6
  },
  title: {
    fontFamily: 'Oswald',
    fontSize: '1.875rem',
    fontWeight: 'bold',
    lineHeight: 1.5,
    letterSpacing: '0.1688rem',
    color: '#fff'
  },
  description: {
    fontFamily: 'Montserrat',
    fontSize: '0.75rem',
    lineHeight: 2.15,
    letterSpacing: '0.0813rem',
    color: '#fff'
  },
  preview: {
    position: 'relative',
    marginTop: '1.5625rem',
    '& > img': {
      width: '100%'
    }
  },
  search: {
    position: 'absolute',
    left: '1.25rem',
    bottom: '1.25rem'
  },
  equipmentImage: {
    width: '100%'
  }
});

function Scuba({ classes }) {
  return (
    <div className={classes.root}>
      <FirstScuba />
      <SecondScuba />
      <ThirdScuba />
      <img className={classes.equipmentImage} alt="" src={equipmentImage} />
    </div>
  );
}

Scuba.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(Scuba);
