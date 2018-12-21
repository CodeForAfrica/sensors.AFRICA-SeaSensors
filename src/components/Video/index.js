import React from 'react'
import ReactPlayer from 'react-player'
import {withStyles, createStyles} from '@material-ui/core/styles'

const styles = createStyles({
    backgroundVideo: {
        height: "644px !important",
        width: "100% !important",
        float: "left",
        top: "0",
        padding: "none",
        background: "cover"
    }
})

function Video(props) {
    return (<ReactPlayer
        url='https://www.youtube.com/watch?v=CWSqYpx32Dk&t=117s'
        className={props.classes.backgroundVideo}/>)
}

export default withStyles(styles)(Video);
