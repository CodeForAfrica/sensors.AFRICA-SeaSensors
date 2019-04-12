import React from "react";
import PropTypes from "prop-types";
import { withStyles, Typography } from "@material-ui/core";

import arrow from "../../assets/arrowWhite.png";

const styles = {
  content: {
    top: "176px",
    padding: "4em 12em 2em 2em",
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
  },
  exploreMapParent: {
    display: "flex",
    paddingTop: "4px",
    marginRight: "20px",
    justifyContent: "flex-end"
  },
  exploreMapArrow: {
    marginTop: "5px"
  },
  exploreMapText: {
    fontFamily: "Oswald",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "4.8px",
    textAlign: "right",
    color: "#ffffff",
    paddingRight: "20px"
  },
  arrowLink: {
    textDecoration: "none"
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
        Mapping fishing with explosives along the coast of East Africa
        <br />
      </Typography>
      <Typography variant="body1" gutterBottom className={classes.contentText}>
        Using cutting-edge underwater acoustic technology to document the
        occurrence of blast fishing.
      </Typography>
      <a
        href="https://alpha.seasensors.africa/map/"
        className={classes.arrowLink}
      >
        <span className={classes.exploreMapParent}>
          <span className={classes.exploreMapText}>Explore map</span>
          <span className={classes.exploreMapArrow}>
            <img src={arrow} alt="Arrow" />
          </span>
        </span>
      </a>
    </div>
  );
}

HeaderText.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(HeaderText);
