import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  withStyles
} from "@material-ui/core";
import PropTypes from "prop-types";

const styles = {
  card: {
    width: "390px",
    height: "455px"
  },
  newsCardTitle: {
    fontFamily: "Oswald",
    fontSize: "22px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "2.05",
    letterSpacing: "1.5px",
    color: "#023256"
  },
  newsCardText: {
    width: "280.5px",
    height: "40.5px",
    opacity: "0.6",
    fontFamily: "Montserrat",
    fontSize: "15px",
    fontWeight: "normal",
    fontStyle: "italic",
    fontStretch: "normal",
    lineHeight: "2.15",
    letterSpacing: "1px",
    color: "#023256"
  },
  newsCardImage: {
    height: "249.5px",
    width: "390px"
  },
  arrowLink: {
    textDecoration: "none"
  }
};

function NewsCards({ classes, image, title, date, link }) {
  return (
    <Card className={classes.card}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.arrowLink}
      >
        <CardActionArea>
          <CardMedia className={classes.newsCardImage} image={image} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.newsCardTitle}
            >
              {title}
            </Typography>
            <Typography component="p" className={classes.newsCardText}>
              {date}
            </Typography>
          </CardContent>
        </CardActionArea>
      </a>
    </Card>
  );
}

NewsCards.propTypes = {
  classes: PropTypes.shape().isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default withStyles(styles)(NewsCards);
