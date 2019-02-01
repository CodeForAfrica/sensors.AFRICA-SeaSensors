import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
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
    color: "#12A6DD"
  }
};

function MediaCard({ classes, image, title, bodyField, link }) {
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography component="p">{bodyField}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" className={classes.launch}>
          {link}
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.shape().isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bodyField: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default withStyles(styles)(MediaCard);
