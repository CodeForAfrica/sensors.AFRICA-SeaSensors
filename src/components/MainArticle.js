import React from 'react';
import { withStyles } from '@material-ui/core';
import SnorkelImg from '../assets/Snorkel.png';

const styles = {
  imageStyle: {
    width: '80%',
    height: '783px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

function MainArticle({ classes }) {
  return (
    <div>
      <img className={classes.imageStyle} src={SnorkelImg} alt="ScubaImage" />
    </div>
  );
}

export default withStyles(styles)(MainArticle);
