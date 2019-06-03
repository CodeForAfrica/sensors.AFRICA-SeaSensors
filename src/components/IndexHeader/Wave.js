import React from 'react';
import PropTypes from 'prop-types';

import WaveSurfer from 'wavesurfer.js';

import { withStyles } from '@material-ui/core';

import wav from '../../assets/audio/blast6_PAM.wav';

const styles = {
  root: {
    position: 'absolute',
    top: 276,
    width: '100%',
    height: 322
  },
  waveform: {}
};

class Wave extends React.Component {
  componentDidMount() {
    const wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'white',
      barHeight: 5,
      barWidth: 3,
      // hide cursor if rgba is supported; otherwise show it w/ progress color
      cursorColor: 'rgba(0, 165, 220, 0)',
      height: 322,
      progressColor: '#00a5dc'
    });
    wavesurfer.load(wav);
    wavesurfer.on('ready', () => wavesurfer.play());
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div id="waveform" className={classes.waveform} />
      </div>
    );
  }
}

Wave.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(Wave);
