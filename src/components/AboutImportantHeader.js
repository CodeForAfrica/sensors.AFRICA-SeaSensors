import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, withWidth, Grid, ButtonBase } from '@material-ui/core';
import { isWidthDown } from '@material-ui/core/withWidth';
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
    paddingTop: '5.3125rem',
    [theme.breakpoints.up('md')]: {
      paddingTop: '6.71875rem'
    }
  },
  important: {
    width: '24.75rem',
    height: '7.125rem',
    fontFamily: 'Oswald',
    fontSize: '2.1875rem',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.29',
    letterSpacing: '0.025rem',
    color: '#023256',
    [theme.breakpoints.up('md')]: {
      fontSize: '3.25rem',
      lineHeight: '1.13',
      letterSpacing: '0.0437rem',
      height: '9.5625rem'
    }
  },
  importantDiv: {
    width: '100%',
    paddingLeft: '1.875rem',
    paddingRight: '1.875rem',
    [theme.breakpoints.up('md')]: {
      width: '60%',
      padding: 0
    }
  },
  importantText: {
    opacity: '0.6',
    marginTop: '2.8125rem',
    fontFamily: 'Montserrat',
    fontSize: '0.9375rem',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2.5',
    letterSpacing: '0.04375rem',
    textAlign: 'justify',
    color: '#023256',
    marginLeft: '0.25rem',
    [theme.breakpoints.down('md')]: {
      maxHeight: '13.75rem',
      overflow: 'hidden',
      background: 'linear-gradient(to bottom, #000000, #ffffff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontSize: '0.75rem',
      lineHeight: '2.08',
      letterSpacing: '0.03125rem'
    }
  },
  readMore: {
    width: '100%',
    paddingTop: '1.25rem',
    color: '#023256',
    fontWeight: 'bold',
    fontSize: '0.75rem',
    lineHeight: '2.25',
    letterSpacing: '0.025rem',
    justifyContent: 'left',
    alignItems: 'left'
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
    fontSize: '0.875rem',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.79',
    letterSpacing: '0.0375rem',
    textAlign: 'justify',
    color: '#023256',
    borderLeft: '0.625rem solid #023256',
    paddingLeft: '1.875rem',
    paddingRight: '1.875rem',
    marginTop: '3.0625rem',
    [theme.breakpoints.up('md')]: {
      width: '33.6125rem',
      fontSize: '1.125rem',
      lineHeight: '2.08',
      letterSpacing: '0.05rem',
      borderLeft: '10px solid #023256',
      paddingLeft: '3.125rem',
      marginTop: '-4.375rem'
    }
  },
  gillImage: {
    width: '100%',
    height: '29.0625rem',
    backgroundImage: `url(${Gill})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      width: '40%',
      height: '43.59375rem',
      backgroundSize: 'contain'
    }
  },
  gillBraulik: {
    width: '9.1875rem',
    height: '6.5rem',
    margin: '20.9375rem 0 0 3.5625rem',
    opacity: '0.95',
    WebkitFilter: 'blur(10.5px)',
    filter: 'blur(10.5px)',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    // padding: '42.8px 0px 52.3px 66.8px',
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('md')]: {
      margin: '29rem 0 0 3.5625rem',
      fontSize: '2.58125rem',
      width: '14.0625rem',
      height: '9.75rem'
      // padding: '42.8px 0px 52.3px 66.8px',
    }
  },
  gillBraulikName: {
    position: 'absolute',
    top: '80%',
    left: '20%',
    fontFamily: 'Oswald',
    fontSize: '1.625rem',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.11875rem',
    color: '#ffffff',
    [theme.breakpoints.up('md')]: {
      top: '70%'
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
    const { classes, width } = this.props;
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
              is important
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
            {!importantFullText && isWidthDown('md', width) && (
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
            <div className={classes.gillBraulik} />
            <div className={classes.gillBraulikName}>Gill Braulik</div>
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
  classes: PropTypes.shape().isRequired,
  width: PropTypes.string.isRequired
};

export default withWidth()(withStyles(styles)(AboutImportantHeader));
