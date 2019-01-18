import React from 'react';
import Nav from '../NavBar';
import arrowBack from '../../assets/arrow_6.png';

function ResourcesHeader(props) {
  const { className, subtitleTexts, mediaResources } = props;
  return (
    <div className={className.resourceImage}>
      <Nav />
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

export default ResourcesHeader;
