import React from 'react';
import { Grid, Typography, withStyles } from '@material-ui/core';
import partners from '../assets/partners.png';

const styles = {
  partnerParent: {
    width: 'auto',
    height: '100%',
    backgroundColor: '#ffffff',
    paddingTop: '10%',
  },
  partnerImage: {
    width: '450px',
    height: '400px',
    display: 'inline',
    marginLeft: '20%',
  },
  ourPartners: {
    width: '216.8px',
    height: '24px',
    opacity: '0.4',
    fontFamily: 'Oswald',
    fontSize: '10px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.65',
    letterSpacing: '6px',
    color: '#023256',
  },
  thankYouText: {
    width: '506.3px',
    height: '153px',
    fontFamily: 'Oswald',
    fontSize: '52px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.13',
    letterSpacing: '0.7px',
    color: '#023256',
  },
  seaSensorsText: {
    width: '600px',
    height: '306.8px',
    opacity: '0.6',
    fontFamily: 'Montserrat',
    fontSize: '15px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2.5',
    letterSpacing: '0.7px',
    textAlign: 'justify',
    color: '#023256',
  },

};

function Partners(props) {
  const { classes } = props;
  return (
    <div className={classes.partnerParent}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <img src={partners} className={classes.partnerImage} alt="" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="caption" className={classes.ourPartners}>
            OUR PARTNERS
          </Typography>
          <Typography variant="h4" className={classes.thankYouText}>
            A big thanks to all our partners involved.
          </Typography>
          <Typography className={classes.seaSensorsText}>
            Sea Sensors is headed by marine scientist, Gill Braulik and was granted funding
            through Code for Africa’s innovateAFRICA programme in 2017. The project would
            not be possible without the help of our partners, Jamie Macaulay, St. Andrews
            University, Jason Rubens, Sound Ocean Ltd, Tanzania Blast Monitoring Network,
            Mwambao Coastal Community Network, Marine Parks and Reserves Unit, Tanzania
            Fisheries Research Institute (TAFIRI) and Nukta Africa Ltd.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Partners);
