import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {withStyles, createStyles} from '@material-ui/styles';
import BlastsSvg from './blastSvg'

const styles = createStyles({
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
        width: "403.5px",
        fontFamily: "DIN",
        fontSize: "4.1em",
        fontWeight: "bold",
        fontStyle: "normal",
        fontStretch: "semi-condensed",
        letterSpacing: "1.6px",
        textAlign: "center",
        color: "#023256"
    },
    recordedBlastsText: {
        height: "69.8px",
        opacity: "0.6",
        fontFamily: "Oswald, sans-serif",
        fontSize: "0.8em",
        fontWeight: "300",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.35",
        lettersSpacing: "1.2px",
        textAlign: "center",
        color: "#023256"
    }
})

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
                            <p className={props.classes.recordedBlastsText}>Recorded blasts</p>
                        </div>
                    </div>
                    <div className="rightBlast">
                        <p>16:06</p>
                        <p>20.10.18</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default withStyles(styles)(Blasts);
