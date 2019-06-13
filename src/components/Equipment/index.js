import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, ButtonBase } from '@material-ui/core';

import equipmentImage from '../../assets/equipment.jpg';
import hotSpot1 from '../../assets/icons/hot-spot-1.svg';
import hotSpot2 from '../../assets/icons/hot-spot-2.svg';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '-12.5rem',
    height: 'fit-content',
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
    width: '36.5%'
  },
  hotSpot1: {
    position: 'absolute',
    right: '35%',
    bottom: '5%',
    width: '15%',

    transform: 'scaleX(-1)'
  },
  hotSpot3: {
    position: 'absolute',
    right: '35.5%',
    top: '5%',
    width: '15%',

    transform: 'scaleX(-1)'
  }
});

function Scuba({ classes }) {
  return (
    <div className={classes.root}>
      <ButtonBase disableRipple disableTouchRipple className={classes.hotSpot2}>
        <img alt="" src={hotSpot2} />
      </ButtonBase>
      <ButtonBase disableRipple disableTouchRipple className={classes.hotSpot1}>
        <img alt="" src={hotSpot1} />
      </ButtonBase>
      <ButtonBase disableRipple disableTouchRipple className={classes.hotSpot3}>
        <img alt="" src={hotSpot1} />
      </ButtonBase>
      <img alt="" src={equipmentImage} />
    </div>
  );
}

Scuba.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(Scuba);
