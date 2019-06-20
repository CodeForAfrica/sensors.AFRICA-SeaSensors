import React from 'react';
import PropTypes from 'prop-types';

import WaveSurfer from 'wavesurfer.js';

import { withStyles, Button, Typography } from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import wav from '../../assets/audio/blast6_PAM.wav';

const styles = theme => ({
  root: {
    position: 'absolute',
    top: '144px',
    left: '30px',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      top: '203.3px',
      left: '81px'
    }
  },
  content: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '877px' // .75 of lg
    },
    [theme.breakpoints.up('lg')]: {
      width: '1169.3px'
    }
  },
  title: {
    fontFamily: 'Oswald',
    fontSize: '40px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.25',
    letterSpacing: '0.5px',
    color: '#ffffff',
    textAlign: 'left',
    width: '315px',
    [theme.breakpoints.up('md')]: {
      fontSize: '45px',
      lineHeight: '1.11',
      letterSpacing: '0.6px',
      width: 'auto'
    }
  },
  waveform: {
    height: '221px',
    [theme.breakpoints.up('md')]: {
      height: '322.5px'
    }
  },
  controls: {
    marginTop: '23px',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      marginTop: '60px',
      justifyContent: 'flex-end'
    }
  },
  listenNow: {
    fontFamily: 'Oswald',
    fontSize: 14,
    letterSpacing: '3.1px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    textAlign: 'right',
    color: '#ffffff',
    textTransform: 'uppercase',
    [theme.breakpoints.up('md')]: {
      fontSize: 16,
      letterSpacing: '7.9px'
    }
  },
  combinedShape: {
    minWidth: 0, // Override MuiButton style so that we get perfect circle
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '20px',
    width: 54,
    height: 54,
    border: 'solid 2px #ffffff',
    borderRadius: '27px',
    [theme.breakpoints.up('md')]: {
      marginLeft: '31px',
      width: 81,
      height: 81,
      border: 'solid 3px #ffffff',
      borderRadius: '40.5px'
    }
  },
  triangle: {
    width: 0,
    height: 0,
    borderTop: '4.8px solid transparent',
    borderLeft: '9.6px solid #fff',
    borderBottom: '4.8px solid transparent',
    [theme.breakpoints.up('md')]: {
      borderTop: '7.2px solid transparent',
      borderLeft: '14.4px solid #fff',
      borderBottom: '7.2px solid transparent'
    }
  }
});

class Wave extends React.Component {
  constructor(props) {
    super(props);

    this.handleListen = this.handleListen.bind(this);
  }

  componentDidMount() {
    const { width } = this.props;
    const [barHeight, barWidth, height] = isWidthUp('md', width)
      ? [5, 3, 322.5]
      : [7, 2, 221];
    this.wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'white',
      barHeight,
      barWidth,
      // hide cursor if rgba is supported; otherwise show it w/ progress color
      cursorColor: 'rgba(0, 165, 220, 0)',
      height,
      progressColor: '#00a5dc',
      responsive: true
    });
    this.wavesurfer.load(wav);
  }

  handleListen() {
    if (this.wavesurfer) {
      this.wavesurfer.playPause();
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <Typography variant="h1" className={classes.title}>
            Listen to a blast here
          </Typography>
          <div id="waveform" className={classes.waveform} />
          <div className={classes.controls}>
            <Typography variant="h2" className={classes.listenNow}>
              Listen Now
            </Typography>
            <Button
              onClick={this.handleListen}
              component="div"
              className={classes.combinedShape}
            >
              <span className={classes.triangle} />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

Wave.propTypes = {
  classes: PropTypes.shape().isRequired,
  width: PropTypes.string.isRequired
};

export default withWidth()(withStyles(styles)(Wave));
