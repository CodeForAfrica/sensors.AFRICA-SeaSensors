import React from 'react';
import Wavesurfer from 'react-wavesurfer';
import 'react-wavesurfer'


class WaveSurferRadio extends React.Component {
    state = {
        playing: false,
        pos: 0
    };

    handleTogglePlay = () => {
        this.setState({
            playing: !this.state.playing
        });
    }
    handlePosChange = (e) => {
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