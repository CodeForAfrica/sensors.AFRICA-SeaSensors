import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import {withStyles, createStyles} from '@material-ui/core/styles'
import arrow from '../../assets/arrow.png'
import topStoryImage from '../../assets/topStory.png'

const styles = createStyles({
    root: {
        flexGrow: 1
    },
    parentContainer: {
        width: "100%",
        height: "615px",
        backgroundImage: `url(${topStoryImage})`,
        backgroundSize: "cover",
        opacity: "1"
    },
    topStoryTitle: {
        width: "294px",
        height: "24px",
        fontFamily: "Oswald",
        fontSize: "10px",
        fontWeight: "500",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.65",
        letterSpacing: "3px",
        color: "#ffffff",
        marginTop: "223px",
        marginLeft: "134px"
    },
    topStorySubTitle: {
        width: "600px",
        height: "153px",
        fontFamily: "Oswald",
        fontSize: "35px",
        fontWeight: "bold",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.13",
        letterSpacing: "0.7px",
        color: "#ffffff",
        marginTop: "0px",
        marginLeft: "3em "
    },
    topStoryText: {
        width: "480px",
        height: "219.8px",
        fontFamily: "Montserrat",
        fontSize: "15px",
        fontWeight: "600",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "2.5",
        letterSpacing: "0.7px",
        textAlign: "justify",
        color: " #f9f8f8",
        marginTop: "136.5px",
        marginRight: "120px"
    },
    readMoreParent: {
        width: "292.5px",
        height: "45px",
        border: "3px #ffffff solid",
        paddingLeft: "1rem",
        boxShadow: "0 23px 60px 0 rgba(0, 0, 0, 0.05)"
    },
    readMoreText: {
        height: "24px",
        fontFamily: "Oswald",
        fontSize: "16px",
        fontWeight: "bold",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "normal",
        letterSpacing: "3.2px",
        color: "#ffffff"
    },
    arrow: {
        color: "#ffffff"
    }
})

function TopStory(props) {
    return (
        <div className={props.classes.parentContainer}>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="caption" className={props.classes.topStoryTitle}>
                        SEA SENSORS TOP STORY
                    </Typography>
                    <Typography variant="h4" className={props.classes.topStorySubTitle}>
                        The effects of blast fishing
                        <br/>on the local community.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="caption" className={props.classes.topStoryText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna.
                    </Typography>
                    <div className={props.classes.readMoreParent}>
                        <span className={props.classes.readMoreText}>READ MORE</span>
                        <span className={props.classes.arrow}>
                            <img src={arrow} alt="Arrow"/>
                        </span>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(TopStory);
