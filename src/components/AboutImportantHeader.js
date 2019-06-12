import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid, ButtonBase } from '@material-ui/core';
import classNames from 'classnames';

import Gill from '../assets/gill.png';

const styles = theme => ({
  root: {
    width: '100%',
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
      width: '58.265625rem' // .75 of lg
    },
    [theme.breakpoints.up('lg')]: {
      width: '77.6875rem'
    }
  },
  parentContainer: {
    width: '100%',
    display: 'flex',
    paddingTop: '85px',
    [theme.breakpoints.up('md')]: {
      paddingTop: '107.5px'
    }
  },
  important: {
    width: '396px',
    height: '114px',
    fontFamily: 'Oswald',
    fontSize: '35px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.29',
    letterSpacing: '0.4px',
    color: '#023256',
    [theme.breakpoints.up('md')]: {
      fontSize: '52px',
      lineHeight: '1.13',
      letterSpacing: '0.7px',
      height: '153px'
    }
  },
  importantDiv: {
    width: '100%',
    paddingLeft: '30px',
    paddingRight: '30px',
    [theme.breakpoints.up('md')]: {
      width: '60%',
      padding: 0
    }
  },
  importantText: {
    opacity: '0.6',
    marginTop: '45px',
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
    [theme.breakpoints.down('md')]: {
      maxHeight: '220px',
      overflow: 'hidden',
      background: 'linear-gradient(to bottom, #000000, #ffffff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontSize: '12px',
      lineHeight: '2.08',
      letterSpacing: '0.5px'
    }
  },
  readMore: {
    width: '100%',
    paddingTop: '20px',
    color: '#023256',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '2.25',
    letterSpacing: '0.4px'
  },
  showfullText: {
    maxHeight: '100%',
    background: '#000000',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  highlight: {
    width: '100%',
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.79',
    letterSpacing: '0.6px',
    textAlign: 'justify',
    color: '#023256',
    borderLeft: '10px solid #023256',
    paddingLeft: '30px',
    paddingRight: '30px',
    [theme.breakpoints.up('md')]: {
      width: '537.8px',
      fontSize: '18px',
      lineHeight: '2.08',
      letterSpacing: '0.8px',
      borderLeft: '10px solid #023256',
      paddingLeft: '50px'
    }
  },
  gillImage: {
    width: '100%',
    height: '465px',
    backgroundImage: `url(${Gill})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.up('md')]: {
      width: '40%',
      height: '697.5px',
      backgroundSize: 'contain'
    }
  },
  gillBraulik: {
    width: '290px',
    height: '90px',
    fontFamily: 'Oswald',
    fontSize: '26px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '1.9px',
    color: '#ffffff',
    margin: '335px 0 0 57px',
    backgroundColor: '#ffffff57',
    padding: '15px 20px 15px 41px',
    [theme.breakpoints.up('md')]: {
      margin: '435px 0 0 57px',
      fontSize: '41.3px'
    }
  }
});

class AboutImportantHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      importantFullText: false
    };
    this.showfullText = this.showfullText.bind(this);
  }

  showfullText() {
    this.setState({ importantFullText: true });
  }

  render() {
    const { classes } = this.props;
    const { importantFullText } = this.state;
    return (
      <div className={classes.root}>
        <Grid
          container
          justify="space-between"
          item
          className={classes.parentContainer}
        >
          <Grid item className={classes.importantDiv}>
            <div className={classes.important}>
              Why we believe it
              <br />
              is important.
            </div>
            <div
              className={classNames(classes.importantText, {
                [classes.showfullText]: importantFullText
              })}
            >
              The world’s oceans are still largely unknown and humans use and
              exploit them using increasingly sophisticated methods. In
              Tanzania, in additional to traditional fishing gear, throughout
              the coast explosives are used to kill fish. This can have
              devastating impacts on coastal ecosystems and coastal communities.
              Monitoring illegal blast fishing activity that often occurs far
              from shore is challenging, and acoustic monitoring has shown the
              greatest potential for providing reliable quantitative data on the
              incidence of the activity, especially from remote parts of
              Tanzania. This information is vital for monitoring and targeted
              enforcement. Using underwater microphones, the team records blasts
              from dynamite fishing off Tanzania’s coast and uses the data to
              inform the public and officials through online maps and
              data-driven stories.
            </div>
            {!importantFullText && (
              <ButtonBase
                className={classes.readMore}
                onClick={() => this.showfullText()}
              >
                {' '}
                Continue Reading ...{' '}
              </ButtonBase>
            )}
          </Grid>
          <Grid item className={classes.gillImage}>
            <div className={classes.gillBraulik}>Gill Braulik</div>
          </Grid>
          <div className={classes.highlight}>
            The project is headed by marine scientist, Gill Braulik and was
            granted funding through Code for Africa’s innovateAFRICA programme
            in 2017.
          </div>
        </Grid>
      </div>
    );
  }
}

AboutImportantHeader.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(AboutImportantHeader);
