import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './HeaderText.css'

const styles = theme => ({
  root: {
    ...theme
      .mixins
      .gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function PaperSheet(props) {
  const {classes} = props;

  return (
    <div className="headerText">
      <Paper
        className={classes.root}
        elevation={1}
        style={{
        boxShadow: "none"
      }}>
        <Typography variant="h1">
          Lorem ipsum dolor sit amet.
        </Typography>
        <Typography component="p" className="headerFont">
          Sea Sensors is an acoustic data project that collects underwater blast data to
          help xx
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);