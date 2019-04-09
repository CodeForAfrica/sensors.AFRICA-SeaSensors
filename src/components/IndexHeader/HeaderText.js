import React from "react";
import PropTypes from "prop-types";
import { withStyles, Typography } from "@material-ui/core";

const styles = {
  content: {
    top: "176px",
    padding: "2.5em 8em 6.5em 5.5em",
    display: "flex",
    position: "absolute",
    textAlign: "left",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    marginRight: "40em"
  },
  contentHeader: {
    fontFamily: "Oswald",
    fontSize: "65px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "1.27",
    letterSpacing: "0.8px",
    color: "#ffffff"
  },
  contentSubHeader: {
    fontFamily: "Oswald",
    fontSize: "2.2rem",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "1.27",
    letterSpacing: "0.8px",
    color: "#ffffff"
  },
  contentText: {
    opacity: "0.6",
    fontFamily: "Montserrat",
    fontSize: "15px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "2.25",
    letterSpacing: "0.7px",
    marginRight: "5.2em",
    color: "#ffffff"
  }
};

function HeaderText({ classes }) {
  return (
    <div className={classes.content}>
      <Typography
        component="h2"
        variant="h1"
        gutterBottom
        className={classes.contentHeader}
      >
        Sea Sensors
      </Typography>
      <Typography
        component="h3"
        variant="h1"
        gutterBottom
        className={classes.contentSubHeader}
      >
        Mapping blast fishing along the coast of East Africa
        <br />
      </Typography>
      <Typography variant="body1" gutterBottom className={classes.contentText}>
        Environmentally destructive fishing using explosives has been conducted
        illegally along the coast of Tanzania for decades. Sea Sensors is a
        project using cutting edge underwater acoustic technology to document
        and map the occurrence of blasts in hard-to-monitor parts of the country
        to help understand the scale of the blast fishing problem
      </Typography>
    </div>
  );
}

HeaderText.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(HeaderText);
