import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from '@material-ui/core';

import partners from '../assets/ourPartners.jpg';

const styles = {
  root: {
    padding: '1.875rem'
  },
  partnerImage: {
    width: '100%',
    padding: '0 10%',
    height: '31.25rem',
    display: 'inline',
    objectFit: 'cover'
  },
  indentLine: {
    width: '30px',
    height: '0.8px',
    marginRight: '22.5px',
    backgroundColor: '#023256'
  },
  ourPartners: {
    width: '13.55rem',
    opacity: '0.4',
    fontFamily: 'Oswald',
    fontSize: '0.625rem',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.65',
    letterSpacing: '0.375rem',
    color: '#023256',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  thankYouText: {
    fontFamily: 'Oswald',
    fontSize: '3.25rem',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.13',
    letterSpacing: '0.0437rem',
    color: '#023256',
    marginBottom: '1.25rem'
  },
  seaSensorsText: {
    opacity: '0.6',
    fontFamily: 'Montserrat',
    fontSize: '0.9375rem',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2.5',
    letterSpacing: '0.0437rem',
    textAlign: 'justify',
    color: '#023256'
  }
};

function Partners({ classes }) {
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} md={6}>
          <img src={partners} className={classes.partnerImage} alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="caption" className={classes.ourPartners}>
            <div className={classes.indentLine} />
            OUR PARTNERS
          </Typography>
          <Typography variant="h4" className={classes.thankYouText}>
            A big thanks
            {/*  br needed since design splits the text in this format */}
            <br />
            to all our partners
          </Typography>
          <Typography className={classes.seaSensorsText}>
            The project is headed by marine scientist, Gill Braulik, supported
            by a seed grant from Code for Africa’s innovateAFRICA.fund. The
            project would not be possible without the help of our partners,
            Jamie Macaulay, St. Andrews University, Jason Rubens, Sound Ocean
            Ltd, Tanzania Blast Monitoring Network, Mwambao Coastal Community
            Network, Marine Parks and Reserves Unit, Tanzania Fisheries Research
            Institute (TAFIRI), K15 Photos, africanDRONE and Nukta Africa Ltd.
            Recorders have been deployed and retrieved with the assistance of
            many, specifically: Fish Eagle Lodge, Kasa Divers, Unguja Lodge,
            Seabreeze Marine, Emayani Beach Lodge, Friends of Maziwe, Peter
            Olivier, Steve Attwell, Hannes Potgieter, Royce Yaezenko, and
            Kerstin Erler.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

Partners.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(Partners);
