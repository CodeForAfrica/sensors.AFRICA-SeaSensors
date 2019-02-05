import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  withStyles,
} from '@material-ui/core';


const styles = {
  card: {
    width: '390px',
    height: '380px',
  },
  newsCardTitle: {
    fontFamily: 'Oswald',
    fontSize: '22px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2.05',
    letterSpacing: '1.5px',
    color: '#023256',
  },
  newsCardText: {
    width: '280.5px',
    height: '40.5px',
    opacity: '0.6',
    fontFamily: 'Montserrat',
    fontSize: '15px',
    fontWeight: 'normal',
    fontStyle: 'italic',
    fontStretch: 'normal',
    lineHeight: '2.15',
    letterSpacing: '1px',
    color: '#023256',
  },
  newsCardImage: {
    height: '249.5px',
    width: '390px',
  },
};

function NewsCards({
  classes, image, title, text,
}) {
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.newsCardImage}
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.newsCardTitle}>
            {title}
          </Typography>
          <Typography component="p" className={classes.newsCardText}>
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default withStyles(styles)(NewsCards);
