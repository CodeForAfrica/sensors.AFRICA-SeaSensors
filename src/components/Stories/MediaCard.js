import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  withStyles
} from "@material-ui/core";

const styles = {
  card: {
    width: "360px",
    height: "500px",
    marginRight: "20px",
    flexGrow: "0",
    flexShrink: "0"
  },
  media: {
    marginLeft: "50px",
    width: "310px",
    height: 300
  },
  launch: {
    textDecoration: "none",
    fontFamily: "Montserrat",
    fontSize: "18px",
    fontWeight: "bold",
    lineHeight: "1.88",
    letterSpacing: "0.6px",
    color: "#00a5dc"
  },
  content: {
    paddingLeft: "50px",
    minHeight: "130px"
  }
};

function MediaCard({ classes, image, title, date, link }) {
  return (
    <Card className={classes.card}>
      <a
        href={link}
        className={classes.launch}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardActionArea>
          <CardMedia className={classes.media} image={image} title={title} />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography component="p">{date}</Typography>
          </CardContent>
        </CardActionArea>
      </a>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.shape().isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default withStyles(styles)(MediaCard);
