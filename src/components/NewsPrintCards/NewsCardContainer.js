import React from "react";
import {
  Card,
  withStyles,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography
} from "@material-ui/core";
import PropTypes from "prop-types";

import arrow from "../../assets/arrowBlueRight.png";

const styles = {
  card: {
    width: "360px",
    height: "554.8px",
    marginLeft: "40px",
    position: "relative",
    "&:hover": {
      transition: "all .2s ease-in-out",
      transform: "scale(1.1)"
    },
    "&:hover $media": {
      height: 300,
      transition: "all .1s ease-in-out"
    }
  },
  media: {
    height: 400,
    backgroundPosition: "top",
    backgroundSize: "cover"
  },
  cardContent: {
    borderBottom: "0px",
    "&:hover": {
      paddingBottom: "0"
    }
  },
  name: {
    fontFamily: "Montserrat",
    fontSize: "22px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "2.05",
    letterSpacing: "1.5px",
    color: "#023256"
  },
  titleText: {
    fontFamily: "Oswald",
    fontSize: "1.7em",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 2,
    letterSpacing: "1px",
    color: "#023256",
    paddingBottom: "10px"
  },
  datePublished: {
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
  text: {
    opacity: "0.6",
    fontFamily: "Montserrat",
    fontSize: "15px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "2.15",
    letterSpacing: "1px",
    color: "#023256",
    paddingBottom: "27px"
  },
  readMoreArrow: {
    color: "#ffffff",
    marginTop: "0.7em"
  },
  readMoreText: {
    fontFamily: "Oswald",
    fontSize: "1.2em",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "2px",
    color: "#023256",
    paddingRight: "20px"
  },
  readMoreParent: {
    display: "flex",
    position: "relative"
  }
};

function NewsCardContainer(props) {
  const { classes, image, name, titleText, text, datePublished } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="partner Image"
        />
        <CardContent className={classes.cardContent}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.name}
          >
            {name}
          </Typography>
          <Typography variant="body1" className={classes.titleText}>
            {titleText}
          </Typography>
          <Typography variant="body1" className={classes.datePublished}>
            {datePublished}
          </Typography>
          <Typography variant="body1" className={classes.text}>
            {text}
          </Typography>
          <div className={classes.readMoreParent}>
            <span className={classes.readMoreText}>READ MORE.</span>
            <span>
              <img src={arrow} alt="Arrow" />
            </span>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

NewsCardContainer.propTypes = {
  classes: PropTypes.shape().isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  datePublished: PropTypes.string.isRequired
};

export default withStyles(styles)(NewsCardContainer);
