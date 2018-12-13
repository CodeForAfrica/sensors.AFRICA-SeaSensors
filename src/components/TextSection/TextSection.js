import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import {withStyles, createStyles} from '@material-ui/styles';

const styles = createStyles({
  root: {
    flexGrow: 1
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
    marginLeft: "123px"
  },
  blastFishingText: {
    width: "600.1px ",
    height: "20em",
    opacity: "0.6",
    fontFamily: "Montserrat",
    fontSize: "15px ",
    fontWeight: "normal",
    fontStyle: " normal",
    fontStretch: "normal",
    lineHeight: "2.5",
    letterSpacing: "0.7px",
    textAlign: "justify",
    color: "#023256",
    marginTop: "5em"
  }
});

function FullWidthGrid(props) {
  return (
    <div className="text1Grid">
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h1" className={props.classes.blastFishsingTitle}>
            {props.title}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" className={props.classes.blastFishingText}>
            {props.text}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(FullWidthGrid);