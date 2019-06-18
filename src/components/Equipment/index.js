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
    // marginLeft: '-12.5rem',
    height: 'fit-content',
    backgroundPosition: 'center',
    margin: '0 0.5rem',
    [theme.breakpoints.up('sm')]: {
      marginLeft: 'unset'
    },
    [theme.breakpoints.up('md')]: {
      margin: '0 5.5rem '
    }
  },

  hidden: {
    display: 'none !important'
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
