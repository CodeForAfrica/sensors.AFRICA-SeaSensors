import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  ButtonBase,
  Typography,
  Grid,
  ClickAwayListener
} from '@material-ui/core';

import classNames from 'classnames';

import equipmentImage from '../../assets/equipment.jpg';
import hotSpot1 from '../../assets/icons/hot-spot-1.svg';
import hotSpot2 from '../../assets/icons/hot-spot-2.svg';
import close from '../../assets/icons/hot-spot-3.svg';
import search from '../../assets/icons/plus-2.svg';
import battery from '../../assets/mgl-0768.png';

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
    display: 'none'
  },
  details: {
    position: 'absolute',
    zIndex: 1,
    top: '1%',
    bottom: '1%',
    left: '35%',
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
      width: '28.125rem'
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

function Scuba({ classes }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className={classes.root}>
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
                PART NUMBER 03
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
              Battery Part Title
            </Typography>
            <Typography className={classes.description}>
              Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Lorem
              ipsum dolor sit lorem. Conse ctetur adipiscing elit lorem init.
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
        className={classes.hotSpot2}
        onClick={() => setShowDetails(true)}
      >
        <img alt="" src={hotSpot2} />
      </ButtonBase>
      <ButtonBase
        disableRipple
        disableTouchRipple
        className={classes.hotSpot1}
        onClick={() => setShowDetails(true)}
      >
        <img alt="" src={hotSpot1} />
      </ButtonBase>
      <ButtonBase
        disableRipple
        disableTouchRipple
        className={classes.hotSpot3}
        onClick={() => setShowDetails(true)}
      >
        <img alt="" src={hotSpot1} />
      </ButtonBase>
      <img className={classes.equipmentImage} alt="" src={equipmentImage} />
    </div>
  );
}

Scuba.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(Scuba);
