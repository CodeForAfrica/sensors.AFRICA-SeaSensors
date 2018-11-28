require('wavesurfer.js');

import React from 'react';
import ReactDOM from 'react-dom';
import Wavesurfer from 'react-wavesurfer';

class WaveSurferRadio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playing: false,
            pos: 0
        };
        this.handleTogglePlay = this
            .handleTogglePlay
            .bind(this);
        this.handlePosChange = this
            .handlePosChange
            .bind(this);
    }
    handleTogglePlay() {
        this.setState({
            playing: !this.state.playing
        });
    }
    handlePosChange(e) {
        this.setState({pos: e.originalArgs[0]});
    }
    render() {
        return (
            <div>
                <Wavesurfer
                    audioFile={'path/to/audio/file.mp3'}
                    pos={this.state.pos}
                    onPosChange={this.handlePosChange}
                    playing={this.state.playing}/>
            </div>
        );
    }
}

export default WaveSurferRadio;