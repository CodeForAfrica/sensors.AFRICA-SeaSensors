import React from 'react'
import {CssBaseline, withStyles} from '@material-ui/core'
import BlastsSvg from './blastSvg'
import lastUpload from '../../assets/last_upload.png'
import creatTime from '../../assets/current_time.png'

const styles = {
    blast: {
        width: '100%',
        margin: '0 auto',
        background: '#fff',
        padding: '2em 0'
    },
    blastInfo: {
        width: "80%",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "auto 60% auto",
        gridGap: " 2em"
    },
    blastGrid: {
        position: "relative",
        top: "3em"
    },
    blastsRecorded: {
        width: "543.8px",
        height: "102px",
        fontFamily: "Oswald, sans-serif",
        fontSize: "52px",
        fontWeight: "bold",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1",
        letterSpacing: "0.7px",
        color: "#023256",
        display: "inline-block"
    },
    blastDataCollected: {
        width: "214px",
        height: "159px",
        opacity: "0.6",
        fontFamily: "Montserrat",
        fontSize: "15px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "2.5",
        letterSpacing: "0.7px",
        textAlign: "justify",
        color: "#023256",
        marginLeft: "auto",
        display: "inline-block"
    },
    blastImageInfo: {
        position: "relative",
        top: "1",
        bottom: "5em",
        right: "31.65em"
    },
    blastGridText: {
        position: "absolute",
        bottom: "15em",
        left: "11em"
    },
    recordedBlastFigures: {
        width: "9.3em",
        fontFamily: "Abel, 'sans-serif'",
        fontSize: "4em",
        fontWeight: "bold",
        fontStyle: "normal",
        fontStretch: "semi-condensed",
        letterSpacing: "1.6px",
        textAlign: "center",
        color: "#023256"
    },
    blastText: {
        height: "69.8px",
        opacity: "0.6",
        fontFamily: "Oswald, sans-serif",
        fontSize: "1em",
        fontWeight: "300",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "0.35",
        textAlign: "center",
        color: "#023256"
    },
    currentTime: {
        position: "absolute",
        bottom: "0.5em",
        left: "31.5em",
        display: "flex"
    },
    lastUpload: {
        display: "flex",
        left: "31.5em",
        top: "8.5em",
        position: "absolute"
    },
    Timings: {
        paddingLeft: " 0.7em"
    },
    dateTime: {
        width: "102px",
        height: "40px",
        fontFamily: "Abel, 'sans-serif'",
        fontSize: "35px",
        fontWeight: "bold",
        fontStyle: "normal",
        fontStretch: "condensed",
        lineHeight: "normal",
        letterSpacing: "0.2px",
        color: "#023256"
    }
}

function Blasts(props) {
    return (
        <React.Fragment>
            <CssBaseline/>
            <div className={props.classes.blast}>
                <div className={props.classes.blastInfo}>
                    <div className={props.classes.blastGrid}>
                        <h3 className={props.classes.blastsRecorded}>Blasts Recorded.</h3>
                        <p className={props.classes.blastDataCollected}>
                            Blast data is collected<br/>
                            every X months, analysed,<br/>
                            and uploaded to the map.
                        </p>
                    </div>
                    <div className={props.classes.blastImageInfo}>
                        <BlastsSvg/>
                        <div className={props.classes.blastGridText}>
                            <p className={props.classes.recordedBlastFigures}>12 562</p>
                            <p className={props.classes.blastText}>Recorded Blasts</p>
                            <div className={props.classes.currentTime}>
                                <div><img src={creatTime} alt="current time"/></div>
                                <div className={props.classes.Timings}>
                                    <p className={props.classes.dateTime}>16:06</p>
                                    <p className={props.classes.blastText}>Current Time</p>
                                </div>
                            </div>
                            <div className={props.classes.lastUpload}>
                                <div><img src={lastUpload} alt="last uploaded"/></div>
                                <div className={props.classes.Timings}>
                                    <p className={props.classes.dateTime}>20.10.18</p>
                                    <p className={props.classes.blastText}>Last Uploaded</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default withStyles(styles)(Blasts);
