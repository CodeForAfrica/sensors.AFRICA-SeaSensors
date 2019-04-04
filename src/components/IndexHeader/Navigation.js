import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "gatsby";

import seaLogoImg from "../../assets/SeaSensors_Logo.png";

const styles = {
  liNav: {
    display: "inline-block",
    marginRight: "4rem",
    textDecoration: "none",
    fontFamily: "Oswald",
    fontSize: "1.2em",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "1.1px",
    textAlign: "right",
    color: "#ffffff",
    left: "3em",
    padding: "25px",
    "&:hover": {
      padding: "25px",
      background: "rgba(255, 255, 255, 0.1)",
      borderLeft: "6px solid white",
      color: "white"
    }
  },
  seaLogo: {
    height: "14em",
    bottom: "64px",
    position: "relative"
  },
  parentNav: {
    position: "absolute",
    top: "3em",
    width: "100%",
    left: "0"
  },
  ulNav: {
    listStyle: "none",
    display: "flex",
    zIndex: "3"
  },
  firstChild: {
    marginRight: "auto",
    width: "14%"
  }
};

const ListLink = ({ listClass, to, customClass, children }) => (
  <li className={listClass}>
    <Link to={to} className={customClass}>
      {children}
    </Link>
  </li>
);

ListLink.propTypes = {
  listClass: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  customClass: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default withStyles(styles)(props => {
  const { classes } = props;
  const image = (
    <img src={seaLogoImg} className={classes.seaLogo} alt="seaLogoImage" />
  );

  return (
    <header className={classes.parentNav}>
      <ul className={classes.ulNav}>
        <ListLink to="/" listClass={classes.firstChild}>
          {image}
        </ListLink>
        <ListLink to="/news/" customClass={classes.liNav}>
          News.
        </ListLink>
        <ListLink to="/about/" customClass={classes.liNav}>
          About Us.
        </ListLink>
        <ListLink to="/resources/" customClass={classes.liNav}>
          Resources
        </ListLink>
      </ul>
    </header>
  );
});
