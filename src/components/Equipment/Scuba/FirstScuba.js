import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles, ButtonBase } from '@material-ui/core';

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

function FirstScuba({ classes }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Fragment>
      <div
        className={classNames(classes.details, {
          [classes.hidden]: !showDetails
        })}
      >
        <ContentScuba
          header="PART NUMBER 01"
          title="4 channel SoundTrap acoustic recorder:"
          description="The SoundTrap is attached to a battery pack that extends its
            underwater monitoring capacity to around 2 months and attached to 3
            waterproof microphones (hydrophones)."
        />
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
