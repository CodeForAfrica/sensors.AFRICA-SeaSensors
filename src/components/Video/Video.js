import React, {Component} from 'react'
import ReactPlayer from 'react-player'

import './Video.css';

class Video extends Component {
    render() {
        return <ReactPlayer
            url='https://www.youtube.com/watch?v=CWSqYpx32Dk&t=117s'
            className="background-video"/>
    }
}

export default Video;