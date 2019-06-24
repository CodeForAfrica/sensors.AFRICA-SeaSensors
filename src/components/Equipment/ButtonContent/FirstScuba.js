import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  ButtonBase,
  Typography,
  Grid,
  ClickAwayListener
} from '@material-ui/core';

import classNames from 'classnames';

import equipmentImage from '../../../assets/equipment.jpg';
import hotSpot3 from '../../../assets/icons/hot-spot-1.svg';
import close from '../../../assets/icons/hot-spot-3.svg';
import search from '../../../assets/icons/plus-2.svg';
import battery from '../../../assets/mgl-0768.png';

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
    left: '35%',
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
      left: '-1.5625rem',
      top: '-1.5625rem',
      right: 0,
      bottom: 0,
      boxShadow: 'inset 0 0 0 187.5rem rgba(255,255,255,0.3)',
      filter: 'blur(0.625rem)'
    },
    [theme.breakpoints.down('xs')]: {
      left: '5%'
    },
    [theme.breakpoints.up('sm')]: {
      left: '10%',
      height: '35.25rem'
    },
    [theme.breakpoints.up('md')]: {
      left: '10%',
      height: '31.25rem',
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
        <ClickAwayListener onClickAway={() => setShowDetails(false)}>
          <div className={classes.content}>
            <Grid
              container
              direction="row"
              wrap="nowrap"
              justify="space-between"
              alignItems="center"
            >
              <Typography className={classes.headerTitle}>
                PART NUMBER 01
              </Typography>
              <ButtonBase
                disableRipple
                disableTouchRipple
                onClick={() => setShowDetails(false)}
              >
                <img alt="" src={close} className={classes.close} />
              </ButtonBase>
            </Grid>
            <Typography className={classes.title}>
              4 channel SoundTrap acoustic recorder:
            </Typography>
            <Typography className={classes.description}>
              The SoundTrap is attached to a battery pack that extends its
              underwater monitoring capacity to around 2 months and attached to
              3 waterproof microphones (hydrophones).
            </Typography>
            <div className={classes.preview}>
              <img alt="" src={battery} />
              <ButtonBase
                disableRipple
                disableTouchRipple
                className={classes.search}
              >
                <img alt="search" src={search} />
              </ButtonBase>
            </div>
          </div>
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
