import React from 'react';
import MainNav from './MainNav';
import arrowBack from '../assets/arrow_6.png';

function SharedHeader(props) {
  const { className, subtitleTexts, mediaResources } = props;
  return (
    <div className={className.resourceImage}>
      <MainNav />
      <div className={className.subTitle}>
        <div className={className.subtitleRule} />
        <p className={className.subtitleText}>{subtitleTexts}</p>
      </div>
      <p className={className.mediaResources}>{mediaResources}</p>
      <div className={className.arrowBack}>
        <img src={arrowBack} alt="Arrow back" />
      </div>
    </div>
  );
}

export default SharedHeader;
