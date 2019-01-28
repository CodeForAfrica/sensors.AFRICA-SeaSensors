import React from 'react';
import { Typography } from '@material-ui/core';
import MainNav from './MainNav';
import arrowBack from '../assets/arrow_6.png';


function SharedHeader(props) {
  const { classes, subtitleTexts, mediaResources } = props;
  return (
    <div className={classes.resourceImage}>
      <MainNav />
      <div className={classes.subTitle}>
        <div className={classes.subtitleRule} />
        <Typography variant="body1" gutterBottom className={classes.subtitleText}>{subtitleTexts}</Typography>
      </div>
      <Typography variant="body1" gutterBottom className={classes.mediaResources}>{mediaResources}</Typography>
      <div className={classes.arrowBack}>
        <img src={arrowBack} alt="Arrow back" />
      </div>
    </div>
  );
}

export default SharedHeader;
