import React from 'react';
import { Grid, Typography, withStyles } from '@material-ui/core';
import cfaLogo from '../../assets/cfa.png';
import billMelindaImg from '../../assets/b-m-gf.png';
import oNImg from '../../assets/on.png';
import uniStAndrewsImg from '../../assets/uo-sa.png';
import usdoImg from '../../assets/us-do-s.png';
import icfjImg from '../../assets/icfj.png';
import seaLogoImg from '../../assets/SeaSensors_Logo-10.png';

const styles = {
  root: {
    flexGrow: 1,
  },
  parentFooter: {
    position: 'relative',
    bottom: '0',
    width: '100%',
    backgroundBlendMode: 'multiply',
    backgroundImage: 'linear-gradient(to bottom, #001525, #001525)',
    paddingLeft: '40px',
    paddingTop: '8em',
  },
  footerWrapper: {
    display: 'flex',
    justifyContent: 'space - evenly',
  },
  footerText: {
    fontFamily: 'Montserrat',
    fontSize: '11px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '3.5',
    letterSpacing: '0.6px',
    color: '#ffffff',
    opacity: '0.87',
  },
  textStyle: {
    color: '#00a5dc',
  },
  logoGrid: {
    marginBottom: '3em',
  },
  LogoImg: {
    width: '89px',
    height: 'auto',
  },
  seaLogo: {
    height: '4em',
    width: '4em',
  },
};

function Footer({ classes }) {
  return (
    <div className={classes.parentFooter}>
      <Grid container spacing={24} className={classes.footerWrapper}>
        <Grid item xs={8}>
          <Typography className={classes.footerText}>
            <span className={classes.textStyle}>
              Sea Sensors
            </span>
              is an acoustic data project that collects underwater blast data to help xx
          </Typography>
          <Typography className={classes.footerText}>
              The project is funded through
            <span className={classes.textStyle}>
              Code for Africa
            </span>
             ’s
            <span className={classes.textStyle}>
              innovateAFRICA
            </span>
              programme.
          </Typography>
          <Typography className={classes.footerText}>
            <span className={classes.textStyle}>
              Code for Africa
            </span>
              (CfAfrica) is Africa&apos;s largest data journalism and civic technology
              initiative, operating
            <span className={classes.textStyle}>
              CitizenLabs
            </span>
            <br />
              across the continent to help fast-track digital innovation to drive social
              change.
          </Typography>
          <Typography className={classes.footerText}>
            <span className={classes.textStyle}>
              innovateAFRICA
            </span>
              is the continent’s largest fund for supporting civic media experimentation and
              digital news
            <br />
              startups in everything from data-driven journalism and investigative reporting,
              to newsroom management,
            <br />
              audience engagement, digital convergence, and media business models.
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
              <img src={billMelindaImg} className={classes.logoImg} alt="logoImgAlt" />
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={6} className={classes.logoGrid}>
              <img src={icfjImg} className={classes.logoImg} alt="logoImgAlt" />
            </Grid>
            <Grid item xs={6} className={classes.logoGrid}>
              <img src={uniStAndrewsImg} className={classes.logoImg} alt="logoImgAlt" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs={8}>
          <img src={seaLogoImg} className={classes.seaLogo} alt="seaLogo" />
          <span>
            ©Sea Sensors. All rights reserved, 2018.
            <br />
            <b>Terms & Conditions</b>
          </span>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Footer);
