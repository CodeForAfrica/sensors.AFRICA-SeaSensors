import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, withStyles } from "@material-ui/core";

const styles = {
  root: {
<<<<<<< HEAD
    flexGrow: 1
=======
    flexGrow: 1,
    height: '700px',
>>>>>>> Add Height to the text section
  },
  textGrid: {
    height: "28em",
    backgroundColor: "#ffffff",
    width: "100%"
  },
  blastFishsingTitle: {
    width: "495.9px",
    height: "153px",
    fontFamily: "Oswald",
    fontSize: "52px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "1.13",
    letterSpacing: "0.7px",
    color: "#023256",
    marginTop: "125px",
    marginLeft: "154px"
  },
  blastFishingText: {
    width: "600.1px ",
    height: "25em",
    opacity: "0.6",
    fontFamily: "Montserrat",
    fontSize: "14px ",
    fontWeight: "normal",
    fontStyle: " normal",
    fontStretch: "normal",
    lineHeight: "2.5",
    letterSpacing: "0.7px",
    textAlign: "justify",
    color: "#023256",
    marginTop: "5em"
  }
};

function TextSection({ classes, title, text }) {
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h1" className={classes.blastFishsingTitle}>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" className={classes.blastFishingText}>
            {text}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

TextSection.propTypes = {
  classes: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default withStyles(styles)(TextSection);
