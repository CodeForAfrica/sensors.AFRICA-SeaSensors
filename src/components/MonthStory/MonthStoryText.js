import React from "react";
import PropTypes from "prop-types";
import { withStyles, Typography } from "@material-ui/core";

import ArrowRight from "../../assets/shared/arrowWhite.png";

const styles = {
  monthStoryParent: {
    width: "630px",
    height: "480px",
    backgroundColor: " rgb(255,255,255,0.4)",
    bottom: "0",
    position: "absolute",
    right: "0",
    zIndex: "2",
    padding: "64px"
  },
  monthStorySubtitle: {
    fontFamily: "Oswald",
    fontSize: "10.5px",
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "2.14",
    letterSpacing: "5.6px",
    color: "#ffffff",
    marginBottom: "65px"
  },
  monthStoryTitle: {
    width: "473.3px",
    height: "66px",
    fontFamily: "Oswald",
    fontSize: "45px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "1",
    letterSpacing: "3px",
    color: "#ffffff",
    marginBottom: "40px"
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
  }
};

function MonthStoryText({ classes }) {
  return (
    <div className={classes.monthStoryParent}>
      <Typography
        component="body2"
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
        Main Article Title
      </Typography>
      <Typography variant="body1" gutterBottom className={classes.contentText}>
        Lorem ipsum dolor sit amet, conse ctetur adipis cing elit. Lorem ipsum
        dolor sit lorem. Conse ctetur adipiscing elit lorem init.
      </Typography>
      <span className={classes.readStoryParent}>
        <span className={classes.readStoryText}>READ STORY</span>
        <span className={classes.readStoryArrow}>
          <img src={ArrowRight} alt="Arrow" />
        </span>
      </span>
    </div>
  );
}

MonthStoryText.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(MonthStoryText);
