import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  withStyles,
  CardMedia,
  CardContent,
  Typography,
  CardActions
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const styles = theme => ({
  card: {
    width: '240px',
    '&:hover': {
      transition: 'transform 0.6s',
      transform: 'scale(1.1)'
    },
    '&:hover $media': {
      height: 260
    },
    [theme.breakpoints.up('md')]: {
      width: '360px'
    }
  },
  media: {
    height: 220,
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    [theme.breakpoints.up('md')]: {
      height: 250
    }
  },
  cardContent: {
    padding: '1rem 0.625rem 0 1.25rem',
    borderBottom: '0px',
    [theme.breakpoints.up('md')]: {
      padding: '21px 35px 0 44px'
    }
  },
  name: {
    fontFamily: 'Montserrat',
    fontSize: '0.9375rem',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2',
    letterSpacing: '1px',
    color: '#023256',
    [theme.breakpoints.up('md')]: {
      lineHeight: '2.05',
      letterSpacing: '1.5px',
      fontSize: '1.375rem'
    }
  },
  title: {
    opacity: '0.6',
    fontFamily: 'Montserrat',
    fontSize: '0.625rem',
    fontWeight: 'normal',
    fontStyle: 'italic',
    fontStretch: 'normal',
    lineHeight: '2.05',
    letterSpacing: 'p0.04375rem',
    color: '#023256',
    [theme.breakpoints.up('md')]: {
      letterSpacing: '0.0625rem',
      fontSize: '0.9375rem'
    }
  },
  text: {
    opacity: '0.6',
    fontFamily: 'Montserrat',
    fontSize: '0.75rem',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.79',
    letterSpacing: '0.8px',
    color: '#023256',
    [theme.breakpoints.up('md')]: {
      lineHeight: '2.15',
      letterSpacing: '1px',
      fontSize: '0.9375rem'
    }
  },
  socials: {
    padding: '14.7px 35px 50px 44px'
  },
  twitter: {
    marginLeft: '20px'
  }
});

function CardContainer({
  classes,
  image,
  name,
  title,
  text,
  twitterSocial,
  width
}) {
  let size = 'sm';
  if (isWidthUp('md', width)) {
    size = 'lg';
  }
  return (
    <Card className={classes.card}>
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
        <Typography variant="body1" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body1" className={classes.text}>
          {text}
        </Typography>
      </CardContent>
      <CardActions className={classes.socials}>
        <FontAwesomeIcon icon={faFacebookF} color="#00a5dc" size={size} />
        <a href={twitterSocial} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faTwitter}
            color="#00a5dc"
            size={size}
            className={classes.twitter}
          />
        </a>
      </CardActions>
    </Card>
  );
}

CardContainer.propTypes = {
  classes: PropTypes.shape().isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  twitterSocial: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
};

export default withWidth()(withStyles(styles)(CardContainer));
