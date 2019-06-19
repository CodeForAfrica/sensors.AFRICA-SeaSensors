import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles, ButtonBase, ClickAwayListener } from '@material-ui/core';

import classNames from 'classnames';
import ContentScuba from '../ContentScuba';

import equipmentImage from '../../../assets/equipment.jpg';
import hotSpot3 from '../../../assets/icons/hot-spot-1.svg';

const styles = theme => ({
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
  details: {
    zIndex: 1,
    position: 'absolute',
    left: '5%',
    display: 'flex',
    alignSelf: 'center',
    height: '35.25rem',
    width: '21.875rem',
    overflow: 'hidden',
    '&:before': {
      content: '""',
      background: `url(${equipmentImage})`,
      backgroundSize: 'cover',
      position: 'absolute',
      left: '5%',
      top: '-1.5625rem',
      right: 0,
      bottom: 0,
      boxShadow: 'inset 0 0 0 187.5rem rgba(255,255,255,0.3)',
      filter: 'blur(0.625rem)'
    },
    [theme.breakpoints.up('sm')]: {
      left: '10%',
      height: '35.25rem'
    },
    [theme.breakpoints.up('md')]: {
      left: '10%',
      height: '36.25rem',
      width: '28.125rem'
    },
    [theme.breakpoints.up('lg')]: {
      height: '40.625rem'
    }
  }
});

function FirstScuba({ classes }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Fragment>
      <div
        className={classNames(classes.details, {
          [classes.hidden]: !showDetails
        })}
      >
        <ClickAwayListener onClickAway={() => setShowDetails(false)}>
          <ContentScuba
            header="PART NUMBER 01"
            title="4 channel SoundTrap acoustic recorder:"
            description="The SoundTrap is attached to a battery pack that extends its
            underwater monitoring capacity to around 2 months and attached to 3
            waterproof microphones (hydrophones)."
          />
        </ClickAwayListener>
      </div>
      <ButtonBase
        disableRipple
        disableTouchRipple
        className={classes.hotSpot3}
        onClick={() => setShowDetails(true)}
      >
        <img alt="" src={hotSpot3} />
      </ButtonBase>
    </Fragment>
  );
}

FirstScuba.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(FirstScuba);
