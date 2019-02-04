import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";

import HeaderImage from "../assets/HeaderImage.png";

import ResourceAboutHeader from "./SharedHeader";

const styles = {
  resourceImage: {
    width: "100%",
    height: "786px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${HeaderImage})`,
    minWidth: "1024px",
    backgroundPosition: "50% 35%",
    top: "0",
    left: "0"
  },
};

function AboutUsHeader({ classes }) {
  return (
    <ResourceAboutHeader
      classes={classes}
      subtitleTexts="Lorem Ipsum Dolor sit."
      mediaResources="About Sea Sensors."
    />
  );
}

AboutUsHeader.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(AboutUsHeader);
