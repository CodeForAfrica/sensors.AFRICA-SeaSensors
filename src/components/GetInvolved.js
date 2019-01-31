import React from "react";
import PropTypes from "prop-types";

import { Grid, Typography, withStyles } from "@material-ui/core";

import TextArrowButton from "./TextArrowButton";
import arrow from "../assets/arrow_2.png";

const styles = {
  root: {
    flexGrow: 1
  },
  moreContainer: {
    width: "auto",
    height: "30em",
    backgroundColor: "#ffffff"
  },
  moreText: {
    height: "174px",
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
    marginTop: "38px",
    marginLeft: "237px"
  },
  getINvolvedTitle: {
    width: "673.5px",
    height: "108px",
    fontFamily: "Oswald",
    fontSize: "60px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "0.8px",
    textAlign: "justify",
    color: "#023256",
    marginTop: "125px"
  },
  readMore: {
    width: "292.5px",
    height: "75px",
    boxShadow: "0 23px 60px 0 rgba(0, 0, 0, 0.05)"
  },
  textArrowButtonParent: {
    width: "250.5px",
    height: "60px",
    border: "3px #023256 solid",
    paddingLeft: "1rem",
    boxShadow: "0 23px 60px 0 rgba(0, 0, 0, 0.05)",
    display: "flex",
    position: "relative",
    top: "12em",
    left: "17em"
  },
  textArrowButtonText: {
    width: "144px",
    height: "24px",
    fontFamily: "Oswald",
    fontSize: "16px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "3.2px",
    color: "#023256",
    marginTop: "1em"
  },
  textArrowButtonArrow: {
    marginTop: "1em"
  },
  line: {
    width: "75px",
    height: "0.8px",
    background: "lightgrey",
    borderLeft: "solid #023256 20px"
  },
  involvedParent: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "240px",
    marginBottom: "52.5px"
  }
};

function GetInvolved({ classes }) {
  return (
    <div className={classes.moreContainer}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <div style={styles.involvedParent}>
            <Typography
              component="h2"
              variant="h1"
              gutterBottom
              className={classes.getINvolvedTitle}
            >
              How to get involved
            </Typography>
            <div style={styles.line} />
          </div>
          <Typography variant="body2" className={classes.moreText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextArrowButton
            className={classes}
            text="TAKE ACTION"
            image={arrow}
          />
        </Grid>
      </Grid>
    </div>
  );
}

GetInvolved.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(GetInvolved);
