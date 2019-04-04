import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, withStyles } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faGithub,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import cfaLogo from "../assets/cfa.png";
import billMelindaImg from "../assets/billMelinda.png";
import oNImg from "../assets/on.png";
import uniStAndrewsImg from "../assets/uniStAndrew.png";
import usdoImg from "../assets/usDoS.png";
import icfjImg from "../assets/icfj.png";
import seaLogoImg from "../assets/SeaSensorsLogoWhite.png";
import footerMap from "../assets/footerMap.png";

const styles = {
  root: {
    flexGrow: 1
  },
  parentFooter: {
    position: "relative",
    bottom: "0",
    width: "100%",
    backgroundBlendMode: "multiply",
    backgroundImage: "linear-gradient(to bottom, #001525, #001525)",
    paddingLeft: "40px",
    paddingTop: "8em"
  },
  footerWrapper: {
    display: "flex",
    justifyContent: "space - evenly"
  },
  footerText: {
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "3.5",
    letterSpacing: "0.6px",
    color: "#ffffff",
    opacity: "0.87"
  },
  textStyle: {
    color: "#00a5dc",
    margin: "0 3px"
  },
  logoGrid: {
    marginBottom: "3em"
  },
  LogoImg: {
    width: "89px",
    height: "auto"
  },
  seaLogo: {
    height: "8em",
    width: "auto"
  },
  mapImage: {
    height: "476px",
    position: "absolute",
    bottom: "0",
    left: "2px"
  },
  copyrightParent: {
    display: "flex"
  },
  copyright: {
    marginTop: "2.6em",
    marginLeft: "-2em"
  },
  rightsReservedText: {
    width: "369px",
    height: "69.8px",
    fontFamily: "Montserrat",
    fontSize: "15px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "1.47",
    letterSpacing: "0.8px",
    color: " #ffffff"
  },
  termsConditionsText: {
    fontWeight: "bold",
    letterSpacing: "0.2px",
    color: " #ffffff"
  },
  parentSocial: {
    display: "flex",
    justifyContent: "space-around",
    position: "relative",
    paddingRight: "50px",
    top: "80px"
  },
  email: {
    color: "#ffffff"
  }
};

function Footer({ classes }) {
  return (
    <div className={classes.parentFooter}>
      <Grid container spacing={24} className={classes.footerWrapper}>
        <img src={footerMap} alt="Footer Map" className={classes.mapImage} />
        <Grid item xs={8}>
          <Typography className={classes.footerText}>
            <p>
              <span className={classes.textStyle}>Sea Sensors</span>
              is an acoustic data project that collects underwater blast data to
              help provide
              <br />
              quantitative spatial information on the incidence of the problem
              over time, that will enable targeted enforcement.
            </p>
          </Typography>
          <Typography className={classes.footerText}>
            <p>
              The project is funded through
              <span className={classes.textStyle}>Code for Africa</span>
              ’s
              <span className={classes.textStyle}>innovateAFRICA</span>
              programme.
            </p>
          </Typography>
          <Typography className={classes.footerText}>
            <p>
              <span className={classes.textStyle}>Code for Africa</span>
              (CfAfrica) is Africa&apos;s largest data journalism and civic
              technology initiative, operating
              <span className={classes.textStyle}>CitizenLabs</span>
              <br />
              across the continent to help fast-track digital innovation to
              drive social change.
            </p>
          </Typography>
          <Typography className={classes.footerText}>
            <p>
              <span className={classes.textStyle}>innovateAFRICA</span>
              is the continent’s largest fund for supporting civic media
              experimentation and digital news
              <br />
              startups in everything from data-driven journalism and
              investigative reporting, to newsroom management,
              <br />
              audience engagement, digital convergence, and media business
              models.
            </p>
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Grid container spacing={24}>
            <Grid item xs={6} className={classes.logoGrid}>
              <img src={cfaLogo} className={classes.logoImg} alt="logoImgAlt" />
            </Grid>
            <Grid item xs={6} className={classes.logoGrid}>
              <img src={oNImg} className={classes.logoImg} alt="logoImgAlt" />
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={6} className={classes.logoGrid}>
              <img src={usdoImg} className={classes.logoImg} alt="logoImgAlt" />
            </Grid>
            <Grid item xs={6} className={classes.logoGrid}>
              <img
                src={billMelindaImg}
                className={classes.logoImg}
                alt="logoImgAlt"
              />
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={6} className={classes.logoGrid}>
              <img src={icfjImg} className={classes.logoImg} alt="logoImgAlt" />
            </Grid>
            <Grid item xs={6} className={classes.logoGrid}>
              <img
                src={uniStAndrewsImg}
                className={classes.logoImg}
                alt="logoImgAlt"
              />
            </Grid>
          </Grid>
          <Grid container spacing={24} className={classes.parentSocial}>
            <a href="email.com" className={classes.email}>
              info@seasensors.org
            </a>
            <a href="https://twitter.com/SeaSensors">
              <FontAwesomeIcon icon={faTwitter} color="#ffffff" size="2x" />
            </a>
            <a href="https://www.facebook.com/CodeForAfrica/ ">
              <FontAwesomeIcon icon={faFacebookF} color="#ffffff" size="2x" />
            </a>
            <a href="https://www.youtube.com/channel/UCa3qX2AwR9WDWO-7_MBL3Hg">
              <FontAwesomeIcon icon={faYoutube} color="#ffffff" size="2x" />
            </a>
            <a href="https://github.com/CodeForAfrica">
              <FontAwesomeIcon icon={faGithub} color="#ffffff" size="2x" />
            </a>
            <FontAwesomeIcon icon={faInstagram} color="#ffffff" size="2x" />
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs={8} className={classes.copyrightParent}>
          <img src={seaLogoImg} className={classes.seaLogo} alt="seaLogo" />
          <div className={classes.copyright}>
            <span className={classes.rightsReservedText}>
              &copy; Sea Sensors. All rights reserved, 2018.
            </span>
            <br />
            <span className={classes.termsConditionsText}>
              Terms &amp; Conditions
            </span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(Footer);
