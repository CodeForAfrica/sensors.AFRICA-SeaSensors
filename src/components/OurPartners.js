import React from "react";
import PropTypes from "prop-types";
import { Typography, withStyles } from "@material-ui/core";

import cfaLogo from "../assets/CFA-2.png";
import UoSA from "../assets/UoSA.png";
import Mwambao from "../assets/logo2.png";
import Bitmap from "../assets/Bitmap.png";
import MarineParksLogo from "../assets/TanzaniaMarinePark.png";
import ArrowDown from "../assets/arrowBlueDown.png";

const styles = {
  parentContainer: {
    padding: "120px 120px 140px 81px"
  },
  cardInfo: {
    width: "400px",
    height: "400px",
    backgroundColor: "#ffffff",
    boxShadow: "0 30px 60px 0 rgba(0, 0, 0, 0.05)",
    flex: "1",
    textAlign: "center",
    margin: "10px 40px",
    "&:hover": {
      transform: "scale(1.1)"
    }
  },
  flexGrid: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 0 20px 0"
  },
  partnerTitle: {
    width: "363px",
    height: "102px",
    fontFamily: "Oswald",
    fontSize: "52px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    letterSpacing: "0.7px",
    color: "#023256"
  },
  titleText: {
    marginLeft: "40px"
  },
  cfaLogoImage: {
    width: "272px",
    height: "auto",
    paddingTop: "99px",
    paddingRight: "56px"
  },
  UoSALogo: {
    width: "136px",
    height: "auto",
    marginTop: "74px"
  },
  partnerTexts: {
    opacity: "0.3",
    fontFamily: "Montserrat",
    fontSize: "22.5px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "1.67",
    textAlign: "center",
    color: "#000000",
    marginTop: "148px"
  },
  mwambaoImg: {
    height: "auto",
    width: "290px",
    marginTop: "96px",
    marginLeft: "20px"
  },
  marineParksLogo: {
    height: "auto",
    width: "200px",
    marginTop: "66px",
    marginLeft: "6px"
  },
  bitMapLogo: {
    width: "262px",
    marginTop: "66px"
  },
  nuktaTitle: {
    fontFamily: "Montserrat",
    fontSize: "22px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "3.05",
    letterSpacing: "1.5px",
    textAlign: "center",
    color: "#023256"
  },
  nuktaText: {
    opacity: "0.6",
    fontFamily: "Montserrat",
    fontSize: "15px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "1.75",
    letterSpacing: "1px",
    textAlign: "center",
    color: "#023256"
  },
  email: {
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "2.02",
    letterSpacing: "1.1px",
    textAlign: "center",
    color: "#77064c",
    textDecoration: "none"
  },
  arrowDown: {
    top: "124px",
    position: "relative",
    left: "17px"
  },
  cardLink: {
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer"
    }
  }
};

function OurPartners(props) {
  const { classes } = props;

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
      </div>
      <div className={classes.flexGrid}>
        <div className={classes.cardInfo}>
          <a
            href="https://codeforafrica.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.cardLink}
          >
            <img
              src={cfaLogo}
              className={classes.cfaLogoImage}
              alt="logoImgAlt"
            />
          </a>
        </div>
        <div className={classes.cardInfo}>
          <a
            href="http://biology.st-andrews.ac.uk/contact/staffprofile.aspx?sunid=jdjm"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.cardLink}
          >
            <img src={UoSA} className={classes.UoSALogo} alt="logoImgAlt" />
          </a>
        </div>
        <div className={classes.cardInfo}>
          <a
            href="https://www.linkedin.com/in/jason-rubens-8013264/?originalSubdomain=tz"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.cardLink}
          >
            <Typography
              variant="body1"
              gutterBottom
              className={classes.partnerTexts}
            >
              SOUND OCEAN LTD.
            </Typography>
          </a>
        </div>
      </div>
      <div className={classes.flexGrid}>
        <div className={classes.cardInfo}>
          <a
            href="https://tz-blast-monitoring.net/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.cardLink}
          >
            <Typography
              variant="body1"
              gutterBottom
              className={classes.partnerTexts}
            >
              Tanzania Blast Monitoring Network
            </Typography>
          </a>
        </div>
        <div className={classes.cardInfo}>
          <a
            href="http://www.mwambao.or.tz/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.cardLink}
          >
            <img
              src={Mwambao}
              className={classes.mwambaoImg}
              alt="Mwambao Castal"
            />
          </a>
        </div>
        <div className={classes.cardInfo}>
          <a
            href="https://www.tanzaniatourism.go.tz/en/places-to-go/category/marine-parks-and-reserves"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.cardLink}
          >
            <img
              src={MarineParksLogo}
              className={classes.marineParksLogo}
              alt="Mwambao Castal"
            />
          </a>
        </div>
      </div>
      <div className={classes.flexGrid}>
        <div className={classes.cardInfo}>
          <a
            href="http://www.mwambao.or.tz/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.cardLink}
          >
            <img
              src={MarineParksLogo}
              className={classes.marineParksLogo}
              alt="Mwambao Castal"
            />
          </a>
        </div>
        <div className={classes.cardInfo}>
          <a
            href="https://corporate.nukta.co.tz/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.cardLink}
          >
            <img
              src={Bitmap}
              className={classes.bitMapLogo}
              alt="Nuka Carousel"
            />
            <Typography
              variant="body1"
              gutterBottom
              className={classes.nuktaTitle}
            >
              Nukta Africa Ltd{" "}
            </Typography>
            <a className={classes.email} href="https://nukta.co.tz/">
              https://nukta.co.tz/
            </a>
            <br />
            <a href="email.com" className={classes.email}>
              info@nuktaafricaltd
            </a>
          </a>
        </div>
        <div className={classes.cardInfo}>
          <img src={ArrowDown} alt="Arrow down" className={classes.arrowDown} />
        </div>
      </div>
    </div>
  );
}

OurPartners.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(OurPartners);
