import React from 'react';
import {
  Card,
  withStyles,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const styles = {
  card: {
    width: '360px',
    height: '554.8px',
  },
  media: {
    height: 300,
    backgroundPosition: 'top',
    backgroundSize: 'cover',
  },
  cardContent: {
    padding: '49px 35px 0 44px',
    borderBottom: '0px',
  },
  name: {
    fontFamily: 'Montserrat',
    fontSize: '22px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2.05',
    letterSpacing: '1.5px',
    color: '#023256',
  },
  title: {
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
  text: {
    opacity: '0.6',
    fontFamily: 'Montserrat',
    fontSize: '15px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2.15',
    letterSpacing: '1px',
    color: '#023256',
  },
  socials: {
    padding: '14.7px 35px 50px 44px',
  },
  twitter: {
    marginLeft: '20px',
  },
};

function CardContainer({
  classes, image, name, title, text,
}) {
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="partner Image"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.name}>
            {name}
          </Typography>
          <Typography variant="body1" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="body1" className={classes.text}>
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.socials}>
        <FontAwesomeIcon icon={faFacebookF} color="#00a5dc" size="lg" />
        <FontAwesomeIcon icon={faTwitter} color="#00a5dc" size="lg" className={classes.twitter} />
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(CardContainer);
