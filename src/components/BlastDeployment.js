import React from 'react';
import { withStyles } from '@material-ui/core';
import boat from '../assets/boat.png';
import scubaDive from '../assets/ScubaDive.png';

const styles = {
  parentContainer: {
    height: '1138px',
  },
  date: {
    width: '229.5px',
    height: '37.5px',
    opacity: '0.58',
    fontFamily: 'Oswald',
    fontSize: '15px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '4.75',
    letterSpacing: '6px',
    color: ' #ffffff',
  },
  blastDeploymentText: {
    width: '600px',
    height: '311.3px',
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
    marginLeft: '792px',
    position: 'relative',
    bottom: '600px',
  },
  recordersText: {
    width: '216.8px',
    height: '114.5px',
    fontFamily: 'Oswald',
    fontSize: '30px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.5',
    letterSpacing: '1.2px',
    color: '#ffffff',
  },
  scubaDive: {
    width: '1200px',
    height: '720px',
    position: 'relative',
    left: '400px',
  },
  boat: {
    position: 'relative',
    bottom: '300px',
    width: '510px',
    height: '630px',
    left: '51px',
  },
  recordDeploy: {
    top: '2319px',
    left: '1275px',
    position: 'absolute',
  },
};

function BlastDeployment({ classes }) {
  return (
    <div className={classes.parentContainer}>
      <img src={scubaDive} alt="Scuba dive" className={classes.scubaDive} />
      <div className={classes.recordDeploy}>
        <p className={classes.date}>24.09.2017</p>
        <p className={classes.recordersText}>Deployment of Blast Recorders</p>
      </div>
      <div>
        <img src={boat} alt="Boat" className={classes.boat} />
      </div>
      <div>
        <p className={classes.blastDeploymentText}>
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim.
          </p>
        </p>
      </div>
    </div>
  );
}

export default withStyles(styles)(BlastDeployment);
