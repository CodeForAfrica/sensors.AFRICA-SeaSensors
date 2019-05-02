import React from "react";
import PropTypes from "prop-types";
import { withStyles, Typography } from "@material-ui/core";

import ArrowRight from "../../assets/arrowWhite.png";

const styles = {
  monthStoryParent: {
    width: "630px",
    backgroundColor: " rgb(255,255,255,0.4)",
    bottom: "0",
    position: "absolute",
    right: "0",
    zIndex: "2",
    padding: "64px"
  },
  monthStorySubtitle: {
    fontFamily: "Oswald",
    fontSize: "13px",
    fontWeight: "1000",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "2.14",
    letterSpacing: "5.6px",
    color: "#ffffff",
    marginBottom: "40px"
  },
  monthStoryTitle: {
    fontFamily: "Oswald",
    fontSize: "45px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "1",
    letterSpacing: "3px",
    color: "#ffffff"
  },
  contentText: {
    fontFamily: "Montserrat",
    fontSize: "15px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "2.15",
    letterSpacing: "1px",
    color: "#ffffff",
    marginBottom: "62px"
  },
  readStoryParent: {
    display: "flex"
  },
  readStoryText: {
    fontFamily: "Oswald",
    fontSize: "16px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "3.2px",
    color: "#ffffff",
    marginRight: "39px"
  },
  arrowLink: {
    textDecoration: "none"
  }
};

function MonthStoryText({ classes, title, text, link }) {
  return (
    <div className={classes.monthStoryParent}>
      <Typography
        variant="body2"
        gutterBottom
        className={classes.monthStorySubtitle}
      >
        STORY OF THE MONTH
      </Typography>
      <Typography
        component="h1"
        variant="h1"
        gutterBottom
        className={classes.monthStoryTitle}
      >
        {title}
      </Typography>
      <Typography variant="body1" gutterBottom className={classes.contentText}>
        {text}
      </Typography>
      <span className={classes.readStoryParent}>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.arrowLink}
        >
          <span className={classes.readStoryText}>READ STORY</span>
          <span className={classes.readStoryArrow}>
            <img src={ArrowRight} alt="Arrow" />
          </span>
        </a>
      </span>
    </div>
  );
}

MonthStoryText.propTypes = {
  classes: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default withStyles(styles)(MonthStoryText);
