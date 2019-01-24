import React from 'react';
import { Typography, withStyles } from '@material-ui/core';
import cfaLogo from '../assets/CFA 2.png';
import UoSA from '../assets/UoSA.png';
import Mwambao from '../assets/logo2.png';
import Bitmap from '../assets/Bitmap.png';
import MarineParksLogo from '../assets/Tanzania_Marine_Parks_and_Reserves_Unit_Logo.png';
import ArrowDown from '../assets/arrow_3.png';

const styles = {
  parentContainer: {
    flexGrow: 1,
    width: '100%',
    height: '1476px',
  },
  cardInfo: {
    width: '375px',
    height: '375px',
    backgroundColor: '#ffffff',
    boxShadow: '0 30px 60px 0 rgba(0, 0, 0, 0.05)',
    flex: '1',
    textAlign: 'center',
    margin: '10px 40px',
  },
  flexGrid: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 0 20px 0',
  },
  partnerTitle: {
    width: '363px',
    height: '102px',
    fontFamily: 'Oswald',
    fontSize: '52px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: '0.7px',
    color: '#023256',
  },
  partnersubTitle: {
    width: '778.5px',
    height: '102px',
    opacity: '0.6',
    fontFamily: 'Montserrat',
    fontSize: '15px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2.5',
    letterSpacing: '0.7px',
    color: '#023256',
  },
  titleText: {
    marginLeft: '40px',
  },
  cfaLogoImage: {
    width: '272px',
    height: 'auto',
    paddingTop: '99px',
    paddingRight: '56px',
  },
  UoSALogo: {
    width: '136px',
    height: 'auto',
    marginTop: '74px',
  },
  partnerTexts: {
    width: '295.5px',
    height: '39px',
    opacity: '0.3',
    fontFamily: 'Montserrat',
    fontSize: '22.5px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.67',
    letterSpacing: '1px',
    textAlign: 'center',
    color: '#000000',
    marginTop: '148px',
    marginLeft: '79px',
  },
  mwambaoImg: {
    height: 'auto',
    width: '290px',
    marginTop: '96px',
    marginLeft: '20px',
  },
  marineParksLogo: {
    height: 'auto',
    width: '200px',
    marginTop: '66px',
    marginLeft: '6px',
  },
  bitMapLogo: {
    width: '262px',
    marginTop: '17px',
  },
  nuktaTitle: {
    height: '50.3px',
    fontFamily: 'Montserrat',
    fontSize: '22px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '3.05',
    letterSpacing: '1.5px',
    textAlign: 'center',
    color: '#023256',
  },
  nuktaText: {
    height: '92.3px',
    opacity: '0.6',
    fontFamily: 'Montserrat',
    fontSize: '15px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.75',
    letterSpacing: '1px',
    textAlign: 'center',
    color: '#023256',
  },
  email: {
    height: '50.3px',
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2.02',
    letterSpacing: '1.1px',
    textAlign: 'center',
    color: '#77064c',
  },
  arrowDown: {
    top: '124px',
    position: 'relative',
    left: '17px',
  },
};

function OurPartners(props) {
  const { classes } = props;

  return (
    <div className={classes.parentContainer}>
      <div className={classes.titleText}>
        <Typography variant="body1" gutterBottom className={classes.partnerTitle}>Our Partners.</Typography>
        <Typography variant="body1" gutterBottom className={classes.partnersubTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </div>
      <div className={classes.flexGrid}>
        <div className={classes.cardInfo}>
          <img src={cfaLogo} className={classes.cfaLogoImage} alt="logoImgAlt" />
        </div>
        <div className={classes.cardInfo}>
          <img src={UoSA} className={classes.UoSALogo} alt="logoImgAlt" />
        </div>
        <div className={classes.cardInfo}>
          <Typography variant="body1" gutterBottom className={classes.partnerTexts}>SOUND OCEAN LTD.</Typography>
        </div>
      </div>
      <div className={classes.flexGrid}>
        <div className={classes.cardInfo}>
          <Typography variant="body1" gutterBottom className={classes.partnerTexts}>
            Tanzania Blast Monitoring Network
          </Typography>
        </div>
        <div className={classes.cardInfo}>
          <img src={Mwambao} className={classes.mwambaoImg} alt="Mwambao Castal" />
        </div>
        <div className={classes.cardInfo}>
          <img src={MarineParksLogo} className={classes.marineParksLogo} alt="Mwambao Castal" />
        </div>
      </div>
      <div className={classes.flexGrid}>
        <div className={classes.cardInfo}>
          <img src={MarineParksLogo} className={classes.marineParksLogo} alt="Mwambao Castal" />
        </div>
        <div className={classes.cardInfo}>
          <img src={Bitmap} className={classes.bitMapLogo} alt="Nuka Carousel" />
          <Typography variant="body1" gutterBottom className={classes.nuktaTitle}>Nukta Africa Ltd </Typography>
          <Typography variant="body1" gutterBottom className={classes.nuktaText}>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </Typography>
          <a className={classes.email} href="https://nukta.co.tz/">https://nukta.co.tz/</a>
          <br />
          <a href="email.com" className={classes.email}>info@nuktaafricaltd</a>
        </div>
        <div className={classes.cardInfo}>
          <img src={ArrowDown} alt="Arrow down" className={classes.arrowDown} />
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(OurPartners);
