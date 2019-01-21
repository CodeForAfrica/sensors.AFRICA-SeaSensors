import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import seaLogoImg from '../../assets/SeaSensors_Logo-15.png';

const styles = {
  liNav: {
    display: 'inline-block',
    marginRight: '4rem',
    textDecoration: 'none',
    fontFamily: 'Oswald',
    fontSize: '1.2em',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '1.1px',
    textAlign: 'right',
    color: '#ffffff',
    left: '3em',
    padding: '25px',
    '&:hover': {
      padding: '25px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderLeft: '6px solid white',
      color: 'white',
    },

  },
  seaLogo: {
    height: '14em',
    bottom: '64px',
    position: 'relative',
  },
  parentNav: {
    position: 'fixed',
    top: '3em',
    width: '100%',
    left: '0',
  },
  ulNav: {
    listStyle: 'none',
    display: 'flex',
    zIndex: '3',
  },
  firstChild: {
    marginRight: 'auto',
  },

};

const ListLink = ({
  listClass, to, customClass, linkText,
}) => (
  <li className={listClass}>
    <Link to={to} className={customClass}>{linkText}</Link>
  </li>
);

export default withStyles(styles)((props) => {
  const {
    classes,
  } = props;
  const image = <img src={seaLogoImg} className={classes.seaLogo} alt="seaLogoImage" />;

  return (
    <div className={classes.parentNav}>
      <header>
        <ul className={classes.ulNav}>
          <ListLink to="/" linkText={image} listClass={classes.firstChild} />
          <ListLink to="/about/" linkText="About Us." customClass={classes.liNav} />
          <ListLink to="/news/" linkText="News." customClass={classes.liNav} />
          <ListLink
            to="/resources/"
            linkText="Resources."
            customClass={classes.liNav}
          />
        </ul>
      </header>
    </div>
  );
});
