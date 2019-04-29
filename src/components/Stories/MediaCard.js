import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  withStyles
} from "@material-ui/core";

const styles = {
  card: {
    width: 401,
    paddingLeft: "50px",
    height: "500px"
  },
  media: {
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
    minHeight: "130px"
  }
};

function MediaCard({ classes, image, title, date, link }) {
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography component="p">{date}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={link} className={classes.launch}>
          Launch Site
        </a>
      </CardActions>
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
