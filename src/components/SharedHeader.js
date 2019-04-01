import React from "react";
import PropTypes from "prop-types";
import { withStyles, Typography } from "@material-ui/core";

import arrowBack from "../assets/arrowWhite.png";

import Navigation from "./Navigation";

const styles = {
  parentHeaderText: {
    position: "relative",
    top: "30%",
    padding: "0 5%"
  },
  subTitle: {
    display: "flex",
    position: "relative",
    alignItems: "center"
  },
  subtitleRule: {
    width: "22.5px",
    height: "2px",
    backgroundColor: "#ffffff",
    marginRight: "20px"
  },
  subtitleText: {
    height: " 24px",
    fontFamily: "Oswald",
    fontSize: "16px",
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "1.83",
    letterSpacing: "4.4px",
    color: "#ffffff"
  },
  mediaResources: {
    height: "115.5px",
    fontFamily: "Oswald",
    fontSize: "88px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    letterSpacing: "0.8px",
    color: "#ffffff",
    marginBottom: "2em"
  },
  arrowBack: {
    transform: "rotate(180deg)",
    display: "flex",
    position: "relative",
    justifyContent: "flex-end"
  }
};

function SharedHeader(props) {
  const { subtitleTexts, mediaResources, classes } = props;
  return (
    <div className={classes.resourceImage}>
      <Navigation />
      <div className={classes.parentHeaderText}>
        <div className={classes.subTitle}>
          <div className={classes.subtitleRule} />
          <Typography
            variant="body1"
            gutterBottom
            className={classes.subtitleText}
          >
            {subtitleTexts}
          </Typography>
        </div>
        <Typography
          variant="body1"
          gutterBottom
          className={classes.mediaResources}
        >
          {mediaResources}
        </Typography>
        <div className={classes.arrowBack}>
          <img src={arrowBack} alt="Arrow back" />
        </div>
      </div>
    </div>
  );
}

SharedHeader.propTypes = {
  classes: PropTypes.shape().isRequired,
  subtitleTexts: PropTypes.string.isRequired,
  mediaResources: PropTypes.string.isRequired
};

export default withStyles(styles)(SharedHeader);
