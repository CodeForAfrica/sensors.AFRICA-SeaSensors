import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles, ButtonBase, Typography, Grid } from '@material-ui/core';

import equipmentImage from '../../assets/equipment.jpg';
import close from '../../assets/icons/hot-spot-3.svg';
import search from '../../assets/icons/plus-2.svg';
import battery from '../../assets/mgl-0768.png';

const styles = theme => ({
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
  root: {
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

function ContentScuba({ classes, header, title, description }) {
  const [setShowDetails] = useState(false);
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        wrap="nowrap"
        justify="space-between"
        alignItems="center"
      >
        <Typography className={classes.headerTitle}>{header}</Typography>
        <ButtonBase
          disableRipple
          disableTouchRipple
          onClick={() => setShowDetails(false)}
        >
          <img alt="" src={close} className={classes.close} />
        </ButtonBase>
      </Grid>
      <Typography className={classes.title}>{title}4</Typography>
      <Typography className={classes.description}>{description}</Typography>
      <div className={classes.preview}>
        <img alt="" src={battery} />
        <ButtonBase disableRipple disableTouchRipple className={classes.search}>
          <img alt="search" src={search} />
        </ButtonBase>
      </div>
    </div>
  );
}

ContentScuba.propTypes = {
  classes: PropTypes.shape().isRequired,
  title: PropTypes.string,
  header: PropTypes.string,
  description: PropTypes.string
};
ContentScuba.defaultProps = {
  header: '',
  title: '',
  description: ''
};

export default withStyles(styles)(ContentScuba);
