import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, withWidth, IconButton } from '@material-ui/core';
import { isWidthUp } from '@material-ui/core/withWidth';
import { MenuOutlined } from '@material-ui/icons';
import { Link } from 'gatsby';

import seaLogoImg from '../assets/SeaSensors_Logo.png';
import Layout from './Layout';

const styles = theme => ({
  link: {
    color: 'white',
    textDecoration: 'none',
    fontFamily: 'Oswald',
    fontSize: '1.125em',
    fontWeight: 'bold',
    letterSpacing: '1.1px',
    padding: '24px 20px 25px',
    margin: '1.375rem 3.25rem',
    borderLeft: '6px solid transparent',
    [theme.breakpoints.up('md')]: {
      margin: '0.625rem'
    },
    [theme.breakpoints.up('lg')]: {
      margin: '1.375rem'
    },
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.1)',
      borderLeft: '6px solid white'
    }
  },
  parentNav: {
    position: 'fixed',
    height: '100px',
    width: '100%',
    zIndex: '3',
    overflow: 'hidden',
    transition: '0.5s',
    WebKitTransition: '0.5s',
    marginTop: '2.25rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  },
  ulNav: {
    listStyle: 'none',
    display: 'flex',
    height: '100px',
    overflow: 'hidden',
    margin: '0'
  },
  firstChild: {
    marginRight: 'auto'
  },
  fixedNav: {
    backgroundColor: '#001525',
    opacity: '0.95',
    boxShadow: '0 0 5px rgba(0, 0, 0, .8)'
  }
});

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = { top: '' };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const el = document.querySelector('nav');
    this.setState({ top: el.offsetTop });
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  renderMobileNav() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Grid item>
          <IconButton
            disableRipple
            disableTouchRipple
            color="inherit"
            className={classes.link}
          >
            <MenuOutlined />
          </IconButton>
        </Grid>
      </Fragment>
    );
  }

  renderDesktopNav() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Grid item>
          <Link color="textSecondary" className={classes.link} to="/news">
            News.
          </Link>
          <Link color="textSecondary" className={classes.link} to="/about">
            About Us.
          </Link>
          <Link color="textSecondary" className={classes.link} to="/resources">
            Resources.
          </Link>
        </Grid>
      </Fragment>
    );
  }

  render() {
    const { classes, width } = this.props;
    const { scroll, top } = this.state;

    // let scrollClasses;
    // function handleScroll() {
    //   if (window.scrollY > 0) {
    //     scrollClasses = 'fixed-nav';
    //   }
    //
    //   return scrollClasses;
    // }
    //
    // // eslint-disable-next-line no-unused-expressions
    // typeof window !== 'undefined' &&
    //   window.addEventListener('scroll', handleScroll);

    return (
      <nav
        className={`${classes.parentNav} ${
          scroll > top ? classes.fixedNav : ''
        }`}
      >
        <Layout>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Link to="/">
                <img src={seaLogoImg} alt="seaLogoImage" height={250} />
              </Link>
            </Grid>

            {isWidthUp('md', width)
              ? this.renderDesktopNav()
              : this.renderMobileNav()}
          </Grid>
        </Layout>
      </nav>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.shape().isRequired,
  width: PropTypes.string.isRequired
};

export default withWidth()(withStyles(styles)(Navigation));
