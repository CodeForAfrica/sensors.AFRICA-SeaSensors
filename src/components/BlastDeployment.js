import React from "react";
import PropTypes from "prop-types";
import { Typography, withStyles } from "@material-ui/core";

import boat from "../assets/aboutPage/boat.png";
import scubaDive from "../assets/aboutPage/ScubaDive.png";

const styles = {
  parentContainer: {
    marginLeft: "90px"
  },
  date: {
    width: "229.5px",
    height: "37.5px",
    opacity: "0.58",
    fontFamily: "Oswald",
    fontSize: "15px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "4.75",
    letterSpacing: "6px",
    color: " #ffffff"
  },
  blastDeploymentText: {
    width: "600px",
    opacity: "0.6",
    fontFamily: "Montserrat !important",
    fontSize: "15px !important",
    fontWeight: "normal !important",
    fontStyle: "normal !important",
    fontStretch: "normal",
    lineHeight: "2.5 !important",
    letterSpacing: "0.7px !important",
    textAlign: "justify",
    color: "#023256 !important",
    marginLeft: "792px",
    position: "relative"
  },
  recordersText: {
    width: "216.8px",
    height: "114.5px",
    fontFamily: "Oswald",
    fontSize: "30px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "1.5",
    letterSpacing: "1.2px",
    color: "#ffffff"
  },
  scubaDive: {
    width: "100%",
    position: "relative",
    height: "720px",
    objectFit: "cover",
    objectPosition: "0 0"
  },
  boat: {
    position: "absolute",
    bottom: "300px",
    width: "510px",
    height: "630px",
    left: "90px",
    top: "580.5px"
  },
  recordDeploy: {
    right: "102px",
    bottom: "85px",
    position: "absolute"
  },
  scubaParent: {
    position: "relative",
    paddingLeft: "150px",
    height: "720px"
  },
  textContainer: {
    paddingTop: "153px"
  }
};

function BlastDeployment({ classes }) {
  return (
    <div className={classes.parentContainer}>
      <div className={classes.scubaParent}>
        <img src={scubaDive} alt="Scuba dive" className={classes.scubaDive} />
        <div className={classes.recordDeploy}>
          <Typography variant="body1" gutterBottom className={classes.date}>
            24.09.2017
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            className={classes.recordersText}
          >
            Deployment of Blast Recorders
          </Typography>
        </div>
        <img src={boat} alt="Boat" className={classes.boat} />
      </div>
      <div className={classes.textContainer}>
        <Typography
          variant="body1"
          gutterBottom
          className={classes.blastDeploymentText}
        >
          The acoustic monitoring focuses on the two areas of Tanzania that are
          well known to have high levels of blasting activity over many years:
          Dar es Salaam, and Tanga. Equipment was constructed using local
          materials where possible. A triangular metal frame was welded by local
          craftsmen in Zanzibar, heavy weights to hold the acoustic equipment to
          the sea bed were used gerry cans that previously held cooking oil,
          that were filled with concrete.
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          className={classes.blastDeploymentText}
        >
          The metal frame was wrapped in used bicycle inner tubes to prevent
          abrasion to the sensitive equipment (add photos). Finally the gear was
          transported via truck, high speed ferry, and boat to the deployment
          location
        </Typography>
      </div>
    </div>
  );
}

BlastDeployment.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(BlastDeployment);
