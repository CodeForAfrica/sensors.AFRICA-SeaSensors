import React from "react";
import PropTypes from "prop-types";
import { Typography, withStyles } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FacebookShareButton, TwitterShareButton } from "react-share";

import creatTime from "../../assets/currentTime.png";

import BlastsSvg from "./blastSvg";

const styles = {
  blast: {
    width: "100%",
    margin: "0 auto",
    background: "#fff",
    padding: "2em 0"
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
    marginLeft: "auto"
  },
  blastImageInfo: {
    position: "relative",
    bottom: "5em",
    right: "18.73em"
  },
  blastGridText: {
    position: "absolute",
    bottom: "19em",
    left: "24em"
  },
  recordedBlastFigures: {
    fontFamily: "Oswald",
    fontSize: "71px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "semi-condensed",
    letterSpacing: "1.6px",
    textAlign: "center",
    color: "#023256"
  },
  blastText: {
    opacity: "0.6",
    fontFamily: "Oswald",
    fontSize: "1.2em",
    fontWeight: "300",
    lineHeight: "1.2",
    textAlign: "center",
    color: "#023256"
  },
  currentTime: {
    left: "19.6em",
    bottom: "1.5em",
    display: "flex",
    position: "absolute"
  },
  lastUploadedText: {
    opacity: "0.6",
    fontFamily: "Oswald",
    fontSize: "1.2em",
    fontWeight: "300",
    lineHeight: "1.2",
    textAlign: "left",
    color: "#023256"
  },
  lastUpload: {
    display: "flex",
    left: "31.5em",
    top: "6.2em",
    position: "absolute"
  },
  Timings: {
    right: "6.8em",
    bottom: "7em",
    position: "relative"
  },
  dateTime: {
    fontFamily: "Oswald",
    fontSize: "48px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "condensed",
    lineHeight: "normal",
    letterSpacing: "1.2px",
    color: "#023256"
  },
  learnMoreParent: {
    display: "flex",
    position: "relative",
    top: "8em",
    fontFamily: "Oswald",
    fontSize: "20px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "1.69",
    letterSpacing: "1px",
    color: "#023256"
  },
  learnMoreText: {
    marginTop: "1.5em",
    marginLeft: "1em",
    fontFamily: "Oswald",
    fontSize: "16px",
    fontWeight: "600",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "1.97",
    letterSpacing: "0.6px",
    color: "#023256"
  },
  lastUploadPointer: {
    marginTop: "38px"
  },
  currentTimePointer: {
    marginTop: "90px"
  },
  socialsParent: {
    display: "flex"
  },
  shareIcons: {
    position: "relative",
    left: "2em",
    top: "20em"
  },
  socials: {
    width: "81px",
    height: "81px",
    border: "1px #00a5dc solid",
    paddingLeft: "24px",
    paddingTop: "24px",
    marginRight: "13px",
    color: "#00a5dc",
    "&:hover": {
      backgroundColor: "#00a5dc",
      color: "#fff",
      cursor: "pointer"
    }
  },
  twitterIcon: {
    marginTop: "19px",
    marginLeft: "26px"
  },
  shareText: {
    fontFamily: "Oswald",
    fontSize: "20px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "1.69",
    letterSpacing: "1px",
    color: "#00a5dc"
  },
  socialIcon: {
    marginTop: "20px",
    marginLeft: "20px"
  },
  shareIconStyle: {
    outline: "none",
    "&:focus": {
      outline: "none"
    }
  }
};

function Blasts({ classes }) {
  return (
    <React.Fragment>
      <div className={classes.blast}>
        {" "}
        <div className={classes.blastInfo}>
          <div className={classes.blastGrid}>
            <Typography
              component="h3"
              variant="h3"
              gutterBottom
              className={classes.blastsRecorded}
            >
              Blasts Recorded.
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              className={classes.blastDataCollected}
            >
              Blast data is collected
              <br />
              every 4 months, analysed,
              <br />
              and uploaded to the map.
            </Typography>
            <div className={classes.learnMoreParent}>explore data</div>
          </div>
          <div className={classes.blastImageInfo}>
            <BlastsSvg />
            <div className={classes.blastGridText}>
              <Typography className={classes.recordedBlastFigures}>
                12 562
              </Typography>
              <Typography className={classes.blastText}>
                Recorded Blasts
              </Typography>
              <div className={classes.currentTime}>
                <div>
                  <img
                    src={creatTime}
                    className={classes.currentTimePointer}
                    alt="current time"
                  />
                </div>
                <div className={classes.shareIcons}>
                  <Typography
                    variant="body1"
                    gutterBottom
                    className={classes.shareText}
                  >
                    Share
                  </Typography>
                  <div className={classes.socialsParent}>
                    <div className={classes.socials}>
                      <TwitterShareButton
                        url="https://alpha.seasensors.africa"
                        title="Mapping blast fishing along the coast of East Africa"
                        className={classes.shareIconStyle}
                      >
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                      </TwitterShareButton>
                    </div>
                    <div className={classes.socials}>
                      <FacebookShareButton
                        url="https://alpha.seasensors.africa"
                        title="Sea Sensors Africa"
                        className={classes.shareIconStyle}
                        quote="Mapping blast fishing along the coast of East Africa"
                      >
                        <FontAwesomeIcon icon={faFacebookF} size="2x" />
                      </FacebookShareButton>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.lastUpload}>
                <div className={classes.Timings}>
                  <Typography className={classes.dateTime}>01.06.18</Typography>
                  <Typography className={classes.lastUploadedText}>
                    Last Uploaded
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Blasts.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(Blasts);
