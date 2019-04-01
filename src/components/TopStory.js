import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, withStyles } from "@material-ui/core";

import arrow from "../assets/arrowWhite.png";
import topStoryImage from "../assets/topStory.png";

import TextArrowButton from "./TextArrowButton";

const styles = {
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
    fontFamily: "Oswald",
    fontSize: "52px",
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
    marginRight: "120px",
    marginBottom: "4.5em"
  },
  textArrowButtonParent: {
    width: "252.5px",
    height: "57px",
    border: "3px #ffffff solid",
    paddingLeft: "1rem",
    boxShadow: "0 23px 60px 0 rgba(0, 0, 0, 0.05)",
    display: "flex",
    position: "relative",
    top: "2em",
    left: "0"
  },
  textArrowButtonText: {
    height: "24px",
    fontFamily: "Oswald",
    fontSize: "16px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "3.2px",
    color: "#ffffff",
    marginTop: "0.7em",
    marginRight: "3.5em"
  },
  textArrowButtonArrow: {
    color: "#ffffff",
    marginTop: "0.7em"
  },
  subtitleRule: {
    width: "30px",
    height: "0.8px",
    backgroundColor: "#ffffff",
    position: "relative",
    top: "230px",
    left: "100px"
  },
  titleContainer: {
    display: "flex",
    marginLeft: "60px"
  }
};

function TopStory({ classes }) {
  return (
    <div className={classes.parentContainer}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <div className={classes.titleContainer}>
            <div className={classes.subtitleRule} />
            <Typography variant="caption" className={classes.topStoryTitle}>
              SEA SENSORS TOP STORY
            </Typography>
          </div>
          <Typography variant="h4" className={classes.topStorySubTitle}>
            The effects of blast fishing
            <br />
            on the local community.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="caption" className={classes.topStoryText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna.
          </Typography>
          <TextArrowButton className={classes} text="READ MORE" image={arrow} />
        </Grid>
      </Grid>
    </div>
  );
}

TopStory.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(TopStory);
