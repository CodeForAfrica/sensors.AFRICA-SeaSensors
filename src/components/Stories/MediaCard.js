import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  withStyles,
} from '@material-ui/core';

const styles = {
  card: {
    width: 300,
  },
  media: {
    height: 300,
  },

};

function MediaCard({
  classes, image, title, bodyField, link,
}) {
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
          <Typography component="p">
            {bodyField}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {link}
        </Button>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(MediaCard);
