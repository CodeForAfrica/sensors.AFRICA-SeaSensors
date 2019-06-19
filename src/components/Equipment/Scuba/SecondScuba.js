import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles, ButtonBase, ClickAwayListener } from '@material-ui/core';

import classNames from 'classnames';
import ContentScuba from '../ContentScuba';

import equipmentImage from '../../../assets/equipment.jpg';
import hotSpot2 from '../../../assets/icons/hot-spot-2.svg';

const styles = theme => ({
  hotSpot2: {
    position: 'absolute',
    right: '15%',
    top: '33%',
    width: '36.5%',
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
    height: '31.25rem',
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

function SecondScuba({ classes }) {
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
            header="PART NUMBER 02"
            title="Hydrophones"
            description="Waterproof microphones attached to the triangle frame using zip
              ties."
          />
        </ClickAwayListener>
      </div>

      <ButtonBase
        disableRipple
        disableTouchRipple
        className={classes.hotSpot2}
        onClick={() => setShowDetails(true)}
      >
        <img alt="" src={hotSpot2} />
      </ButtonBase>
    </Fragment>
  );
}

SecondScuba.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(SecondScuba);
