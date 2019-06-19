import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles, ButtonBase, ClickAwayListener } from '@material-ui/core';

import classNames from 'classnames';

import equipmentImage from '../../../assets/equipment.jpg';
import hotSpot3 from '../../../assets/icons/hot-spot-1.svg';

import ContentScuba from '../ContentScuba';

const styles = theme => ({
  hotSpot3: {
    position: 'absolute',
    right: '35%',
    bottom: '5%',
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
    left: '35%',

    display: 'flex',
    alignSelf: 'center',

    height: '31.25rem',
    width: '21.875rem',

    overflow: 'hidden',
    '&:before': {
      content: '""',
      background: `url(${equipmentImage})`,
      backgroundSize: 'cover',
      position: 'absolute',
      left: '-1.5625rem',
      top: '-1.5625rem',
      right: 0,
      bottom: 0,
      boxShadow: 'inset 0 0 0 187.5rem rgba(255,255,255,0.3)',
      filter: 'blur(0.625rem)'
    },
    [theme.breakpoints.up('sm')]: {
      left: '10%'
    },
    [theme.breakpoints.up('md')]: {
      left: '10%',
      height: '31.25rem',
      width: '28.125rem'
    },
    [theme.breakpoints.up('lg')]: {
      height: '40.625rem'
    }
  }
});

function ThirdScuba({ classes }) {
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
            header="PART NUMBER 03"
            title="Triangle Frame"
            description="Attached to the waterproof microphones and anchored to the seabed"
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

ThirdScuba.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(ThirdScuba);
