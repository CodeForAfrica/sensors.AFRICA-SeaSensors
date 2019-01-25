import React from 'react';
import { withStyles } from '@material-ui/core';
import Gill from '../assets/gill.png';

const styles = {
  parentContainer: {
    width: '100%',
    height: '1000px',
    display: 'flex',
    marginLeft: '116px',
    paddingTop: '107.5px',
    paddingLeft: '120px',
  },
  important: {
    width: '396px',
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
  importantText: {
    width: '600px',
    height: '447px',
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
    marginLeft: '4px',
  },
  highlight: {
    width: '537.8px',
    height: '135.8px',
    fontFamily: 'Montserrat',
    fontSize: '18px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2.08',
    letterSpacing: '0.8px',
    textAlign: 'justify',
    color: '#023256',
    borderLeft: '10px solid #023256',
    paddingTop: '10px',
    paddingLeft: '50px',
    marginLeft: '4px',
  },
  gillImage: {
    width: '480px',
    height: '697.5px',
    backgroundImage: `url(${Gill})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    marginTop: '157px',
    marginLeft: '120px',
  },
  gillBraulik: {
    width: '290px',
    height: '90px',
    fontFamily: 'Oswald',
    fontSize: '41.3px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '1.9px',
    color: '#ffffff',
    margin: '435px 0 0 57px',
    backgroundColor: '#ffffff57',
    padding: '15px 41px',
  },
};

function AboutImportantHeader({ classes }) {
  return (
    <div className={classes.parentContainer}>
      <div>
        <div className={classes.important}>
            Why we believe it
          <br />
            is important.
        </div>
        <div className={classes.importantText}>
            It is highly difficult to obtain quantitative data on blast fishing from
            offshore areas out of ear shot from land. Therefore there are great
            advantages of acoustic monitoring to monitor a huge swatch of ocean,
            day and night, in good weather and bad over long periods of time. It is
            the generation of reliable quantitative data on the incidence of the
            activity especially from remoter parts of tanzania is vital for targeted
            enforcement.
            Using underwater microphones, the team records blasts from dynamite
            fishing off Tanzania’s coast and uses the data (location, time, magnitude
            of blasts) to inform the public and officials through online maps and
            data-driven stories.
        </div>
        <div className={classes.highlight}>
          The project is headed by marine scientist, Gill
          Braulik and was granted funding through Code for
          Africa’s innovateAFRICA programme in 2017.
        </div>
      </div>
      <div className={classes.gillImage}>
        <div className={classes.gillBraulik}>Gill Braulik</div>
      </div>
    </div>
  );
}

export default withStyles(styles)(AboutImportantHeader);
