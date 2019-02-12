import React from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

import Snorkel2 from "../../assets/Snorkel2.png";

import MonthStoryText from "./MonthStoryText";

const styles = {
  monthStoryContainer: {
    position: "relative",
    width: "1350px",
    marginLeft: "89px",
    height: "547.5px",
    backgroundImage: `url(${Snorkel2})`,
    backgroundSize: "cover"
  },
  blur: {
    height: "480px",
    backgroundImage: `url(${Snorkel2})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom right",
    width: "630px",
    position: "absolute",
    filter: "blur(15px)",
    zIndex: "1",
    bottom: "0",
    right: "0"
  }
};

function MonthStory({ classes }) {
  return (
    <div className={classes.monthStoryContainer}>
      <div className={classes.blur} />
      <MonthStoryText />
    </div>
  );
}

MonthStory.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(MonthStory);
