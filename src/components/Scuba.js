import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core";
import ScubaImg from "../assets/ScubaImg.png";

const styles = {
  imageStyle: {
    width: "80%",
    height: "783px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  }
};

function Scuba({ classes }) {
  return (
    <div>
      <img className={classes.imageStyle} src={ScubaImg} alt="ScubaImage" />
    </div>
  );
}

Scuba.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(Scuba);
