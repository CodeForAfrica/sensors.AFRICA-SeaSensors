import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from '@material-ui/core';

import className from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faGithub,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import A from './A';

import cfaLogo from '../assets/cfa.png';
import billMelindaImg from '../assets/billMelinda.png';
import oNImg from '../assets/on.png';
import uniStAndrewsImg from '../assets/uniStAndrew.png';
import usdoImg from '../assets/usDoS.png';
import icfjImg from '../assets/icfj.png';
import seaLogoImg from '../assets/SeaSensorsLogoWhite.png';
import footerMap from '../assets/footerMap.png';

const styles = theme => ({
  root: {
    flexGrow: 1,

    position: 'relative',

    display: 'flex',
    flexDirection: 'column',

    backgroundSize: '200%',
    backgroundColor: '#001525',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${footerMap})`,

    borderTop: '0.4688rem solid #00a5dc',

    [theme.breakpoints.up('md')]: {
      backgroundSize: '100%'
    }
  },
  top: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1.875rem',
    [theme.breakpoints.up('md')]: {
      padding: '7.6125rem',
      flexDirection: 'row'
    }
  },
  bottom: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1.875rem',
    borderTop: '0.05rem solid #ffffff4D',
    [theme.breakpoints.up('md')]: {
      padding: '7.6125rem',
      flexDirection: 'row'
    }
  },
  footerText: {
    fontFamily: 'Montserrat',
    fontSize: '0.9375rem',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2.2',
    letterSpacing: '0.0375rem',
    color: '#ffffff',
    opacity: '0.87',
    paddingBottom: '1.25rem'
  },
  highlight: {
    color: '#00a5dc'
  },
  partnerLogos: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: `${6.5187 * 3}rem`,
    [theme.breakpoints.up('md')]: {
      width: `${6.5187 * 2}rem`
    }
  },
  logoImg: {
    padding: '1.25rem',
    objectFit: 'contain',
    width: '6.5187rem',
    height: '6.5187rem'
  },
  seaLogo: {
    objectFit: 'cover',
    height: '6rem',
    width: '2.125rem',
    marginRight: '1rem'
  },
  text: {
    fontFamily: 'Montserrat',
    fontSize: '0.625rem',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.47',
    letterSpacing: '0.05rem',
    color: '#fff',
    [theme.breakpoints.up('md')]: {
      fontSize: '0.9375rem'
    }
  },
  bold: {
    fontWeight: 'bold',
    letterSpacing: '0.0313rem',
    [theme.breakpoints.up('md')]: {
      letterSpacing: '0.0375rem'
    }
  },
  mailto: {
    // Special case
    [theme.breakpoints.up('md')]: {
      // Center the mailto link when displaying desktop
      marginTop: '-0.8125rem',
      // Space the mailto link away from social icons when displaying desktop
      marginRight: '1.875rem'
    }
  }
});

function Footer({ classes }) {
  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <Grid item xs={12} md={8}>
          <Typography className={classes.footerText}>
            <span className={classes.highlight}>Sea Sensors</span> is an
            acoustic data project that collects underwater blast data to help
            provide quantitative spatial information on the incidence of the
            problem over time, that will enable targeted enforcement.
          </Typography>
          <Typography className={classes.footerText}>
            The project is funded through{' '}
            <span className={classes.highlight}>Code for Africa</span>’s{' '}
            <span className={classes.highlight}>innovateAFRICA</span> programme.
          </Typography>
          <Typography className={classes.footerText}>
            <span className={classes.highlight}>Code for Africa</span>{' '}
            (CfAfrica) is Africa&apos;s largest data journalism and civic
            technology initiative, operating{' '}
            <span className={classes.highlight}>CitizenLabs</span> across the
            continent to help fast-track digital innovation to drive social
            change.
          </Typography>
          <Typography className={classes.footerText}>
            <span className={classes.highlight}>innovateAFRICA</span> is the
            continent’s largest fund for supporting civic media experimentation
            and digital news startups in everything from data-driven journalism
            and investigative reporting, to newsroom management, audience
            engagement, digital convergence, and media business models.
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={4}
          justify="center"
          alignItems="center"
        >
          <div className={classes.partnerLogos}>
            <img src={cfaLogo} className={classes.logoImg} alt="" />
            <img src={oNImg} className={classes.logoImg} alt="" />
            <img src={usdoImg} className={classes.logoImg} alt="" />
            <img src={billMelindaImg} className={classes.logoImg} alt="" />
            <img src={icfjImg} className={classes.logoImg} alt="" />
            <img src={uniStAndrewsImg} className={classes.logoImg} alt="" />
          </div>
        </Grid>
      </div>
      <div className={classes.bottom}>
        <Grid
          item
          container
          xs={12}
          md={9}
          direction="row"
          wrap="nowrap"
          alignItems="center"
        >
          <img src={seaLogoImg} className={classes.seaLogo} alt="logo" />
          <Grid item container direction="column">
            <span className={classes.text}>
              &copy; Sea Sensors. All rights reserved, 2018.
            </span>
            <Grid item container direction="row" justify="space-between">
              <A
                classes={{ root: className(classes.text, classes.bold) }}
                href="#"
                underline="always"
              >
                Terms &amp; Conditions
              </A>
              <A
                classes={{
                  root: className(classes.mailto, classes.text, classes.bold)
                }}
                href="mailto:info@seasensors.org"
                underline="always"
              >
                info@seasensors.org
              </A>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          container
          xs={12}
          md={3}
          alignItems="center"
          justify="space-between"
        >
          <A href="https://twitter.com/SeaSensors">
            <FontAwesomeIcon icon={faTwitter} color="#ffffff" size="2x" />
          </A>
          <A href="https://www.facebook.com/CodeForAfrica/">
            <FontAwesomeIcon icon={faFacebookF} color="#ffffff" size="2x" />
          </A>
          <A href="https://www.youtube.com/channel/UCa3qX2AwR9WDWO-7_MBL3Hg">
            <FontAwesomeIcon icon={faYoutube} color="#ffffff" size="2x" />
          </A>
          <A href="https://github.com/CodeForAfrica">
            <FontAwesomeIcon icon={faGithub} color="#ffffff" size="2x" />
          </A>
          <A href="#">
            <FontAwesomeIcon icon={faInstagram} color="#ffffff" size="2x" />
          </A>
        </Grid>
      </div>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(Footer);
