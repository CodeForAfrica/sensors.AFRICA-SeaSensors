import React from "react";
import PropTypes from "prop-types";
import { Card, withStyles, CardMedia, CardActionArea } from "@material-ui/core";

const styles = {
  media: {
    height: "405px",
    width: "315px"
  }
};

function GalleryContainer({ classes, image }) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="partner Image"
        />
      </CardActionArea>
    </Card>
  );
}

GalleryContainer.propTypes = {
  classes: PropTypes.shape().isRequired,
  image: PropTypes.string.isRequired
};

export default withStyles(styles)(GalleryContainer);
