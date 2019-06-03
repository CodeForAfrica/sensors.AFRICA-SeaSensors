import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import SnorkelImg from '../assets/Snorkel.png';

const styles = {
  imageStyle: {
    width: '80%',
    height: '783px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

function MainArticle({ classes }) {
  return (
    <div>
      <img className={classes.imageStyle} src={SnorkelImg} alt="ScubaImage" />
    </div>
  );
}

MainArticle.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(MainArticle);
