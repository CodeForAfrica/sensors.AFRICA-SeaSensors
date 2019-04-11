import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "gatsby";

import seaLogoImg from "../assets/SeaSensors_Logo.png";

const styles = {
  liNav: {
    display: "inline-block",
    marginRight: "4rem",
    textDecoration: "none",
    fontFamily: "Oswald",
    fontSize: "1.2em",
    fontWeight: "bold",
    letterSpacing: "1.1px",
    textAlign: "right",
    color: "#ffffff",
    borderLeft: "6px solid transparent",
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
    bottom: "4em",
    position: "relative"
  },
  parentNav: {
    position: "fixed",
    height: "100px",
    width: "100%",
    zIndex: "3",
    overflow: "hidden",
    transition: "0.5s",
    WebKitTransition: "0.5s"
  },
  ulNav: {
    listStyle: "none",
    display: "flex",
    height: "100px",
    overflow: "hidden",
    margin: "0"
  },
  firstChild: {
    marginRight: "auto"
  },
  fixedNav: {
    backgroundColor: "#001525",
    opacity: "0.95",
    boxShadow: "0 0 5px rgba(0, 0, 0, .8)"
  }
};

const ListLink = ({ listClass, to, customClass, children }) => (
  <li className={listClass}>
    <Link to={to} className={customClass}>
      {children}
    </Link>
  </li>
);

ListLink.defaultProps = {
  listClass: "",
  customClass: ""
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

    this.state = {};

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const el = document.querySelector("nav");
    this.setState({ top: el.offsetTop });
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  render() {
    const { classes } = this.props;
    const { scroll, top } = this.state;

    const image = (
      <img src={seaLogoImg} className={classes.seaLogo} alt="seaLogoImage" />
    );

    let scrollClasses;
    function handleScroll() {
      if (window.scrollY > 0) {
        scrollClasses = "fixed-nav";
      }

      return scrollClasses;
    }

    // eslint-disable-next-line no-unused-expressions
    typeof window !== "undefined" &&
      window.addEventListener("scroll", handleScroll);

    return (
      <nav
        className={`${classes.parentNav} ${
          scroll > top ? classes.fixedNav : ""
        }`}
      >
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
      </nav>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(Navigation);
