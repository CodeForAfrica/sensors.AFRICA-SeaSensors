import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { Typography, withStyles, GridList } from '@material-ui/core';
import classNames from 'classnames';

import cfaLogo from '../assets/CFA-2.png';
import UoSA from '../assets/UoSA.png';
import Mwambao from '../assets/logo2.png';
import Bitmap from '../assets/nukta.png';
import MarineParksLogo from '../assets/TanzaniaMarinePark.png';
import ArrowDown from '../assets/arrowBlueDown.png';
import Fisheries from '../assets/fisheries.png';

const styles = theme => ({
  parentContainer: {
    padding: '4.0625rem 0 5.0625rem',
    [theme.breakpoints.up('md')]: {
      padding: '120px 120px 140px 124px'
    }
  },
  cardInfo: {
    width: '240px',
    height: '360px',
    backgroundColor: '#ffffff',
    boxShadow: '0 30px 60px 0 rgba(0, 0, 0, 0.05)',
    flex: '1',
    textAlign: 'center',
    margin: '10px',
    '&:hover': {
      transform: 'scale(1.1)'
    },
    [theme.breakpoints.up('md')]: {
      width: '400px',
      height: '400px',
      margin: '10px 40px'
    }
  },
  flexGrid: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 0 20px 0'
  },
  partnerTitle: {
    width: '363px',
    height: '102px',
    fontFamily: 'Oswald',
    fontSize: '2.1875rem',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: '0.7px',
    color: '#023256',
    [theme.breakpoints.up('md')]: {
      fontSize: '3.25rem'
    }
  },
  titleText: {
    marginLeft: '40px'
  },
  cfaLogoImage: {
    width: '210px',
    height: 'auto',
    paddingTop: '99px',
    marginLeft: '0.9375rem',
    marginRight: '0.9375rem',
    [theme.breakpoints.up('md')]: {
      width: '272px',
      paddingRight: '56px',
      marginLeft: 0,
      marginRight: 0
    }
  },
  UoSALogo: {
    width: '140px',
    height: 'auto',
    marginTop: '74px',
    marginLeft: '50px',
    marginRight: '50px',
    [theme.breakpoints.up('md')]: {
      marginLeft: 0,
      marginRight: 0
    }
  },
  partnerTexts: {
    opacity: '0.3',
    fontFamily: 'Montserrat',
    fontSize: '22.5px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.67',
    textAlign: 'center',
    color: '#000000',
    marginTop: '148px',
    width: '14.375rem',
    [theme.breakpoints.up('md')]: {
      width: '100%'
    }
  },
  partnerPara: {
    opacity: '0.6',
    fontFamily: 'Montserrat',
    fontSize: '12px',
    color: '#023256',
    lineHeight: 2.08,
    lineSpacing: '0.5px',
    marginTop: '-2.5rem',
    marginBottom: '2.5rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '15px',
      lineHeight: 2.5,
      lineSpacing: '0.7px',
      marginBottom: '2rem'
    }
  },
  mwambaoImg: {
    height: 'auto',
    width: '290px',
    marginTop: '96px',
    marginLeft: '20px'
  },
  marineParksLogo: {
    height: 'auto',
    width: '200px',
    marginTop: '66px',
    marginRight: '20px',
    marginLeft: '20px',
    [theme.breakpoints.up('md')]: {
      width: '262px',
      marginRight: '0px',
      marginLeft: '6px'
    }
  },
  bitMapLogo: {
    width: '12.5rem',
    marginTop: '66px',
    marginRight: '1.25rem',
    marginLeft: '1.25rem',
    marginBottom: '2.5rem',
    [theme.breakpoints.up('md')]: {
      width: '16.375rem',
      marginRight: '0',
      marginLeft: '0'
    }
  },
  nuktaTitle: {
    fontFamily: 'Montserrat',
    fontSize: '0.9375rem',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2',
    letterSpacing: '0.0625rem',
    textAlign: 'center',
    color: '#023256',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.375rem',
      lineHeight: '3.05',
      letterSpacing: '0.09375rem'
    }
  },
  nuktaText: {
    opacity: '0.6',
    fontFamily: 'Montserrat',
    fontSize: '15px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.75',
    letterSpacing: '1px',
    textAlign: 'center',
    color: '#023256'
  },
  email: {
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2.02',
    letterSpacing: '1.1px',
    textAlign: 'center',
    color: '#77064c',
    textDecoration: 'none'
  },
  arrowDown: {
    top: '124px',
    position: 'relative',
    left: '17px'
  },
  cardLink: {
    textDecoration: 'none',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  partnerGrid: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    scrollbarColor: '#023256',
    scrollbarWidth: 'thin',
    '&::-webkit-scrollbar': {
      height: '0.15rem'
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'lightgrey',
      marginLeft: '2rem',
      marginRight: '2rem',
      color: 'lightgrey'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#023256',
      color: '#023256',
      border: '1px solid #023256',
      height: '0.2rem'
    }
  }
});

function ImageCard({ classes, imageSrc, href, imageClass, alt }) {
  return (
    <Fragment>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classNames(classes.cardLink, classes.cardInfo)}
      >
        <img src={imageSrc} className={classes[imageClass]} alt={alt} />
      </a>
    </Fragment>
  );
}
ImageCard.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  imageSrc: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  imageClass: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

const ImageCardItem = withStyles(styles)(ImageCard);
export { ImageCardItem };

function TextCard({ classes, text, href }) {
  return (
    <Fragment>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classNames(classes.cardLink, classes.cardInfo)}
      >
        <Typography
          variant="body1"
          gutterBottom
          className={classes.partnerTexts}
        >
          {text}
        </Typography>
      </a>
    </Fragment>
  );
}
TextCard.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

const TextCardItem = withStyles(styles)(TextCard);

export { TextCardItem };

function MultiTypeCard({
  classes,
  text,
  elem,
  alt,
  imageSrc,
  imageClass,
  href
}) {
  return (
    <Fragment>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classNames(classes.cardLink, classes.cardInfo)}
      >
        <img src={imageSrc} className={classes[imageClass]} alt={alt} />
        <Typography variant="body1" gutterBottom className={classes.nuktaTitle}>
          {text}
        </Typography>
        {elem}
      </a>
    </Fragment>
  );
}
MultiTypeCard.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageClass: PropTypes.string.isRequired,
  elem: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
  alt: PropTypes.string.isRequired
};

const MultiTypeCardItem = withStyles(styles)(MultiTypeCard);
export { MultiTypeCardItem };

function OurPartners({ classes, width }) {
  return (
    <div className={classes.parentContainer}>
      <div className={classes.titleText}>
        <Typography
          variant="body1"
          gutterBottom
          className={classes.partnerTitle}
        >
          Our Partners.
        </Typography>
        <Typography className={classes.partnerPara}>
          Lorem ipsum dolor sit amet, consec tetur adipi scing elit lorem init.
        </Typography>
      </div>

      {isWidthUp('md', width) ? (
        <Fragment>
          <div className={classes.flexGrid}>
            <ImageCardItem
              href="https://codeforafrica.org/"
              imageSrc={cfaLogo}
              imageClass="cfaLogoImage"
              alt="Code For Africa"
            />
            <ImageCardItem
              href="http://biology.st-andrews.ac.uk/contact/staffprofile.aspx?sunid=jdjm"
              imageSrc={UoSA}
              imageClass="UoSALogo"
              alt="UoSA"
            />
            <TextCardItem
              href="https://www.linkedin.com/in/jason-rubens-8013264/?originalSubdomain=tz"
              text="SOUND OCEAN LTD."
              textClass="partnerTexts"
            />
          </div>
          <div className={classes.flexGrid}>
            <TextCardItem
              href="https://tz-blast-monitoring.net/"
              text="Tanzania Blast Monitoring Network"
            />
            <ImageCardItem
              href="http://www.mwambao.or.tz/"
              imageSrc={Mwambao}
              imageClass="mwambaoImg"
              alt="Mwambao Castal"
            />
            <ImageCardItem
              href="https://www.tanzaniatourism.go.tz/en/places-to-go/category/marine-parks-and-reserves"
              imageSrc={MarineParksLogo}
              imageClass="marineParksLogo"
              alt="Marine Parks"
            />
          </div>
          <div className={classes.flexGrid}>
            <ImageCardItem
              href="https://www.tanzaniatourism.go.tz/en/places-to-go/category/marine-parks-and-reserves"
              imageSrc={Fisheries}
              imageClass="marineParksLogo"
              alt="Tanzania Fisheries"
            />
            <MultiTypeCardItem
              href="https://corporate.nukta.co.tz/"
              imageClass="bitMapLogo"
              alt="Nukta Africa"
              text="Nukta Africa Ltd"
              imageSrc={Bitmap}
              classes={classes}
              elem={
                <Fragment>
                  <Typography className={classes.email}>
                    https://nukta.co.tz/
                  </Typography>

                  <Typography className={classes.email}>
                    info@nuktaafricaltd
                  </Typography>
                </Fragment>
              }
            />

            <div className={classes.cardInfo}>
              <img
                src={ArrowDown}
                alt="Arrow down"
                className={classes.arrowDown}
              />
            </div>
          </div>
        </Fragment>
      ) : (
        <GridList cols={1.25} cellHeight={450} className={classes.partnerGrid}>
          <ImageCardItem
            href="https://codeforafrica.org/"
            imageSrc={cfaLogo}
            imageClass="cfaLogoImage"
            alt="Code For Africa"
          />
          <ImageCardItem
            href="http://biology.st-andrews.ac.uk/contact/staffprofile.aspx?sunid=jdjm"
            imageSrc={UoSA}
            imageClass="UoSALogo"
            alt="UoSA"
          />
          <TextCardItem
            href="https://www.linkedin.com/in/jason-rubens-8013264/?originalSubdomain=tz"
            text="SOUND OCEAN LTD."
            textClass="partnerTexts"
          />
          <TextCardItem
            href="https://tz-blast-monitoring.net/"
            text="Tanzania Blast Monitoring Network"
          />
          <ImageCardItem
            href="http://www.mwambao.or.tz/"
            imageSrc={Mwambao}
            imageClass="mwambaoImg"
            alt="Mwambao Castal"
          />
          <ImageCardItem
            href="https://www.tanzaniatourism.go.tz/en/places-to-go/category/marine-parks-and-reserves"
            imageSrc={MarineParksLogo}
            imageClass="marineParksLogo"
            alt="Marine Parks"
          />
          <ImageCardItem
            href="https://www.tanzaniatourism.go.tz/en/places-to-go/category/marine-parks-and-reserves"
            imageSrc={Fisheries}
            imageClass="marineParksLogo"
            alt="Tanzania Fisheries"
          />
          <MultiTypeCardItem
            href="https://corporate.nukta.co.tz/"
            imageClass="bitMapLogo"
            alt="Nukta Africa"
            text="Nukta Africa Ltd"
            imageSrc={Bitmap}
            classes={classes}
            elem={
              <Fragment>
                <Typography className={classes.email}>
                  https://nukta.co.tz/
                </Typography>

                <Typography className={classes.email}>
                  info@nuktaafricaltd
                </Typography>
              </Fragment>
            }
          />
        </GridList>
      )}
    </div>
  );
}

OurPartners.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default withWidth()(withStyles(styles)(OurPartners));
