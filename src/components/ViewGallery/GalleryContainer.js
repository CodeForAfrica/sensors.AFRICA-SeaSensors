import React from 'react';
import {
  Card,
  withStyles,
  CardMedia,
  CardActionArea,
} from '@material-ui/core';

const styles = {
  media: {
    height: '405px',
    width: '315px',
  },
};

function GalleryContainer({
  classes, image,
}) {
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

export default withStyles(styles)(GalleryContainer);
