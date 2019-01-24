import React from 'react';
import { Typography } from '@material-ui/core';
import MainNav from './MainNav';
import arrowBack from '../assets/arrow_6.png';


function SharedHeader(props) {
  const { className, subtitleTexts, mediaResources } = props;
  return (
    <div className={className.resourceImage}>
      <MainNav />
      <div className={className.subTitle}>
        <div className={className.subtitleRule} />
        <Typography variant="body1" gutterBottom className={className.subtitleText}>{subtitleTexts}</Typography>
      </div>
      <Typography variant="body1" gutterBottom className={className.mediaResources}>{mediaResources}</Typography>
      <div className={className.arrowBack}>
        <img src={arrowBack} alt="Arrow back" />
      </div>
    </div>
  );
}

export default SharedHeader;
