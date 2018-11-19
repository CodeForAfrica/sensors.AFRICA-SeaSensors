import React from 'react';
import PropTypes from 'prop-types';
import {withStyles, Paper, Grid, Typography} from '@material-ui/core';
import './TextSection.css'

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

function FullWidthGrid(props) {
  const {classes} = props;

  return (
    <div className="text1Grid">
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h1" className="What-is-Blast-Fishin">
            {props.title}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" className="What-is-blast-fishin">
            {props.text}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);