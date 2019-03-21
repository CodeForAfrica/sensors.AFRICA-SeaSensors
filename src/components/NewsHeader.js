import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";

import NewsHeaderImage from "../assets/newsPage/NewsHeaderImage.png";

import SharedHeader from "./SharedHeader";

const styles = {
  resourceImage: {
    width: "100%",
    height: "786px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${NewsHeaderImage})`,
    minWidth: "1024px",
    backgroundPosition: "50% 35%",
    top: "0",
    left: "0"
  }
};

function NewsHeader({ classes }) {
  return (
    <SharedHeader
      classes={classes}
      subtitleTexts="Lorem Ipsum Dolor sit."
      mediaResources="News Showcase Page."
    />
  );
}

NewsHeader.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(NewsHeader);
