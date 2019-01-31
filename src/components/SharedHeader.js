import React from "react";
import PropTypes from "prop-types";

import { Typography } from "@material-ui/core";
import MainNav from "./MainNav";
import arrowBack from "../assets/arrow_6.png";

function SharedHeader({ classes, subtitleTexts, mediaResources }) {
  return (
    <div className={classes.resourceImage}>
      <MainNav />
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
  );
}

SharedHeader.propTypes = {
  classes: PropTypes.shape().isRequired,
  subtitleTexts: PropTypes.string.isRequired,
  mediaResources: PropTypes.string.isRequired
};

export default SharedHeader;
