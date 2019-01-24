import React from 'react';
import { Typography, withStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import BlastsSvg from './blastSvg';
import lastUpload from '../../assets/last_upload.png';
import creatTime from '../../assets/current_time.png';
import learnMoreArrow from '../../assets/arrow_3.png';

const styles = {
  blast: {
    width: '100%',
    margin: '0 auto',
    background: '#fff',
    padding: '2em 0',
  },
  blastInfo: {
    width: '80%',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'auto 60% auto',
    gridGap: ' 2em',
  },
  blastGrid: {
    position: 'relative',
    top: '3em',
    right: '38px',
  },
  blastsRecorded: {
    height: '102px',
    fontFamily: 'Oswald, sans-serif',
    fontSize: '52px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1',
    letterSpacing: '0.7px',
    color: '#023256',
    display: 'inline-block',
  },
  blastDataCollected: {
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
    marginLeft: 'auto',
  },
  blastImageInfo: {
    position: 'relative',
    bottom: '5em',
    right: '21.65em',
  },
  blastGridText: {
    position: 'absolute',
    bottom: '15em',
    left: '11em',
  },
  recordedBlastFigures: {
    width: '598px',
    height: '85.4px',
    fontFamily: 'Oswald',
    fontSize: '71px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'semi-condensed',
    letterSpacing: '1.6px',
    textAlign: 'center',
    color: '#023256',
  },
  blastText: {
    height: '69.8px',
    opacity: '0.6',
    fontFamily: 'Oswald',
    fontSize: '1.2em',
    fontWeight: '300',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.2',
    textAlign: 'center',
    color: '#023256',
  },
  currentTime: {
    position: 'absolute',
    bottom: '0.5em',
    left: '31.8em',
    display: 'flex',
  },
  lastUpload: {
    display: 'flex',
    left: '31.5em',
    top: '6.2em',
    position: 'absolute',
  },
  Timings: {
    paddingLeft: '0.7em',
    marginBottom: '45px',
  },
  dateTime: {
    width: '102px',
    height: '47px',
    fontFamily: 'Oswald',
    fontSize: '48px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'condensed',
    lineHeight: 'normal',
    letterSpacing: '1.2px',
    color: '#023256',
  },
  learnMoreParent: {
    display: 'flex',
    position: 'relative',
    top: '8em',
  },
  learnMoreText: {
    marginTop: '1.5em',
    marginLeft: '1em',
    width: '118.5px',
    height: '36.8px',
    fontFamily: 'Oswald',
    fontSize: '16px',
    fontWeight: '600',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.97',
    letterSpacing: '0.6px',
    color: '#023256',
  },
  lastUploadPointer: {
    marginTop: '38px',
  },
  currentTimePointer: {
    marginTop: '73px',
  },
  socialsParent: {
    display: 'flex',
  },
  shareIcons: {
    position: 'relative',
    left: '2em',
    top: '20em',
  },
  socials: {
    width: '81px',
    height: '81px',
    border: '1px #00a5dc solid',
    paddingLeft: '24px',
    paddingTop: '24px',
    marginRight: '13px',
  },
  twitterIcon: {
    marginTop: '19px',
    marginLeft: '26px',
  },
  shareText: {
    width: '105px',
    height: '42px',
    fontFamily: 'Oswald',
    fontSize: '20px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.69',
    letterSpacing: '1px',
    color: '#00a5dc',
  },
  socialIcon: {
    marginTop: '20px',
    marginLeft: '20px',
  },
};

class Blasts extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.blast}>
          <div className={classes.blastInfo}>
            <div className={classes.blastGrid}>
              <Typography component="h3" variant="h3" gutterBottom className={classes.blastsRecorded}>
                Blasts Recorded.
              </Typography>
              <Typography variant="body1" gutterBottom className={classes.blastDataCollected}>
                Blast data is collected
                <br />
                every 4 months, analysed,
                <br />
                and uploaded to the map.
              </Typography>
              <div className={classes.learnMoreParent}>
                <span className={classes.learnMoreArrow}>
                  <img src={learnMoreArrow} alt="Arrow" />
                </span>
                <span className={classes.learnMoreText}>
                  Learn More
                </span>
              </div>
            </div>
            <div className={classes.blastImageInfo}>
              <BlastsSvg />
              <div className={classes.blastGridText}>
                <Typography variant="body1" gutterBottom className={classes.recordedBlastFigures}>12 562</Typography>
                <Typography variant="body1" gutterBottom className={classes.blastText}>Recorded Blasts</Typography>
                <div className={classes.currentTime}>
                  <div><img src={creatTime} className={classes.currentTimePointer} alt="current time" /></div>
                  <div className={classes.Timings}>
                    <Typography variant="body1" gutterBottom className={classes.dateTime}>16:06</Typography>
                    <Typography variant="body1" gutterBottom className={classes.blastText}>Current Time</Typography>
                  </div>
                  <div className={classes.shareIcons}>
                    <Typography variant="body1" gutterBottom className={classes.shareText}>Share</Typography>
                    <div className={classes.socialsParent}>
                      <div className={classes.socials}>
                        <FontAwesomeIcon icon={faTwitter} color="#00a5dc" size="2x" />
                      </div>
                      <div className={classes.socials}>
                        <FontAwesomeIcon icon={faFacebookF} color="#00a5dc" size="2x" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.lastUpload}>
                  <div><img src={lastUpload} alt="last uploaded" className={classes.lastUploadPointer} /></div>
                  <div className={classes.Timings}>
                    <Typography variant="body1" gutterBottom className={classes.dateTime}>01.06.18</Typography>
                    <Typography variant="body1" gutterBottom className={classes.blastText}>Last Uploaded</Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Blasts);
