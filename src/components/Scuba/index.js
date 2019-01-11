import React from 'react';
import { withStyles } from '@material-ui/core';
import ScubaImg from '../../assets/ScubaImg.png';

const styles = {
  imageStyle: {
    width: '80%',
    height: '783px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

function Scuba({ classes }) {
  return (
    <div>
      <img className={classes.imageStyle} src={ScubaImg} alt="ScubaImage" />
    </div>
  );
}

export default withStyles(styles)(Scuba);
