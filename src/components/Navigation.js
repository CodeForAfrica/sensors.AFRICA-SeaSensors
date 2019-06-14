import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';

import {
  withWidth,
  ButtonBase,
  ClickAwayListener,
  Paper,
  MenuList,
  MenuItem,
  Popper
} from '@material-ui/core';
import { isWidthUp } from '@material-ui/core/withWidth';

import classNames from 'classnames';

import seaLogoImg from '../assets/SeaSensors_Logo.png';
import seaLogoNoTextImg from '../assets/SeaSensorsLogoWhite.png';
import menuIcon from '../assets/icons/menu.svg';

const styles = theme => ({
  root: {
    position: 'fixed',
    height: '6rem',
    width: '100%',
    zIndex: '3',
    overflow: 'hidden',
    padding: '0 1.875rem',
    [theme.breakpoints.up('md')]: {
      padding: '2.1875rem 3.7687rem',
      height: '9.375rem'
    }
  },
  fixedNav: {
    backgroundColor: '#001525',
    opacity: '0.95',
    boxShadow: '0 0 0.3125rem rgba(0, 0, 0, .8)'
  },
  mobileMenuButton: {
    width: '2.1875rem',
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${menuIcon})`
  },
  seaLogoDesktop: {
    height: '100%',
    // fit images since assets atoo large
    width: '9.375rem', // Zeplin 9.375rem
    backgroundSize: '140%',
    backgroundPosition: 'center',
    backgroundImage: `url(${seaLogoImg})`
  },
  seaLogoMobile: {
    height: '100%',
    // fit images since assets atoo large
    width: '2.025rem', // Zeplin 2.025rem
    backgroundSize: '400%',
    backgroundPosition: 'center',
    backgroundImage: `url(${seaLogoNoTextImg})`
  },
  ulNav: {
    padding: 0,
    margin: 0,
    height: '100%',
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    '& > :first-child': {
      marginRight: 'auto'
    },
    '& > li': {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      '& > *': {
        height: '100%'
      }
    }
  },
  liNav: {
    textDecoration: 'none',
    fontFamily: 'Oswald',
    fontSize: '1.2em',
    fontWeight: 'bold',
    letterSpacing: '0.0688rem',
    textAlign: 'right',
    color: '#ffffff',
    borderLeft: '0.375rem solid transparent',
    padding: '1.5625rem',
    '&:hover': {
      padding: '1.5625rem',
      background: 'rgba(255, 255, 255, 0.1)',
      borderLeft: '0.375rem solid white'
    }
  },
  activeNav: {
    padding: '1.5625rem',
    background: 'rgba(255, 255, 255, 0.1)',
    borderLeft: '0.375rem solid white'
  }
});

const ListLink = ({ listClass, to, customClass, children }) => (
  <li className={listClass}>
    <Link to={to} className={customClass}>
      {children}
    </Link>
  </li>
);

ListLink.defaultProps = {
  listClass: '',
  customClass: ''
};

ListLink.propTypes = {
  listClass: PropTypes.string,
  to: PropTypes.string.isRequired,
  customClass: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  componentDidMount() {
    const el = document.querySelector('nav');
    this.setState({ top: el.offsetTop });
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  toggleMobileMenu(e) {
    const { anchorEl } = this.state;
    if (anchorEl === null) {
      this.setState({ anchorEl: e.target });
    } else {
      this.setState({ anchorEl: null });
    }
  }

  render() {
    const { classes, width, activeNav } = this.props;
    const { scroll, top, anchorEl } = this.state;

    let scrollClasses;
    function handleScroll() {
      if (window.scrollY > 0) {
        scrollClasses = 'fixed-nav';
      }

      return scrollClasses;
    }

    // eslint-disable-next-line no-unused-expressions
    typeof window !== 'undefined' &&
      window.addEventListener('scroll', handleScroll);

    return (
      <nav
        className={classNames(classes.root, {
          [classes.fixedNav]: scroll > top
        })}
      >
        <ul className={classes.ulNav}>
          {isWidthUp('md', width) ? (
            <Fragment>
              <ListLink to="/">
                <div className={classes.seaLogoDesktop} />
              </ListLink>
              {[
                { link: '/news/', name: 'News.' },
                { link: '/about/', name: 'About Us.' },
                { link: '/resources/', name: 'Resources.' }
              ].map((item, index) => (
                <li key={item.link}>
                  <Link
                    to={item.link}
                    className={classNames(classes.liNav, {
                      [classes.activeNav]: index === activeNav - 1
                    })}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </Fragment>
          ) : (
            <Fragment>
              <ListLink to="/">
                <div className={classes.seaLogoMobile} />
              </ListLink>
              <ButtonBase
                className={classes.mobileMenuButton}
                onClick={this.toggleMobileMenu}
              />
              <Popper
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                placement="bottom-end"
              >
                <ClickAwayListener onClickAway={this.toggleMobileMenu}>
                  <Paper>
                    <MenuList>
                      <MenuItem component="a" href="/news/">
                        News.
                      </MenuItem>
                      <MenuItem component="a" href="/about/">
                        About Us.
                      </MenuItem>
                      <MenuItem component="a" href="/resources/">
                        Resources.
                      </MenuItem>
                    </MenuList>
                  </Paper>
                </ClickAwayListener>
              </Popper>
            </Fragment>
          )}
        </ul>
      </nav>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.shape().isRequired,
  width: PropTypes.string.isRequired,
  activeNav: PropTypes.number.isRequired
};

export default withWidth()(withStyles(styles)(Navigation));
