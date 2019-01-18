import React from 'react';
import { withStyles } from '@material-ui/core';
import ResourceAboutHeader from '../ReusableComponents/ResourceAboutHeader';
import HeaderImage from '../../assets/HeaderImage.png';

const styles = {
  resourceImage: {
    width: '100%',
    height: '786px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${HeaderImage})`,
    minWidth: '1024px',
    backgroundPosition: '50% 35%',
    top: '0',
    left: '0',
  },
  subTitle: {
    display: 'flex',
    position: 'relative',
    left: '109px',
  },
  subtitleRule: {
    width: '22.5px',
    height: '0.6px',
    backgroundColor: '#ffffff',
    marginTop: '87px',
  },
  subtitleText: {
    width: '500.3px',
    height: ' 24px',
    fontFamily: 'Oswald',
    fontSize: '16px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.83',
    letterSpacing: '4.4px',
    marginLeft: '50px',
    marginTop: '70px',
    color: '#ffffff',
  },
  mediaResources: {
    width: '634.5px',
    height: '115.5px',
    fontFamily: 'Oswald',
    fontSize: '88px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.27',
    letterSpacing: '0.8px',
    color: '#ffffff',
    marginLeft: '109px',
  },
  arrowBack: {
    transform: 'rotate(180deg)',
    position: 'relative',
    right: '1415px',
    top: '145px',

  },
};

function AboutUsHeader({ classes }) {
  return (
    <ResourceAboutHeader
      className={classes}
      subtitleTexts="Lorem Ipsum Dolor sit."
      mediaResources="About Sea Sensors."
    />
  );
}

export default withStyles(styles)(AboutUsHeader);
