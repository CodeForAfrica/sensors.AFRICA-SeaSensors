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
    fontSize: '0.9em',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '1.1px',
    textAlign: 'right',
    color: '#ffffff',
    left: '3em',
  },
  seaLogo: {
    height: '14em',
    bottom: '6em',
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
    zIndex: '999',
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
  const image = <img src={seaLogoImg} className={props.classes.seaLogo} alt="seaLogoImage" />;

  return (
    <div className={props.classes.parentNav}>
      <header>
        <ul className={props.classes.ulNav}>
          <ListLink to="/" linkText={image} listClass={props.classes.firstChild} />
          <ListLink to="/about/" linkText="About." customClass={props.classes.liNav} />
          <ListLink to="/news/" linkText="News." customClass={props.classes.liNav} />
          <ListLink
            to="/resources/"
            linkText="Resources."
            customClass={props.classes.liNav}
          />
        </ul>
      </header>
    </div>
  );
});
