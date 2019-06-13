import React from 'react';
import PropTypes from 'prop-types';

import {
  withStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';

import arrow from '../../assets/arrowBlueRight.png';

const styles = theme => ({
  root: {
    marginTop: '1.875rem'
  },
  card: {
    width: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    [theme.breakpoints.up('md')]: {
      width: '390px'
    }
  },
  cardMedia: {
    width: '100%',
    height: '8.125rem',
    [theme.breakpoints.up('md')]: {
      width: '390px',
      height: '249.5px'
    }
  },
  cardContent: {
    padding: '2.03125rem 2.54375rem 1.75rem 1.84375rem'
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: '0.9375rem',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2',
    letterSpacing: '1px',
    color: '#023256',
    [theme.breakpoints.up('md')]: {
      fontSize: '22px',
      lineHeight: '2.05',
      letterSpacing: '1.5px'
    }
  },
  arrow: {
    fontFamily: 'Montserrat',
    fontSize: '0rem',
    lineHeight: '1',
    textAlign: 'right',
    '& > img': {
      width: '2.5rem',
      height: 'auto'
    }
  },
  date: {
    opacity: '0.6',
    fontFamily: 'Montserrat',
    fontSize: '0.625rem',
    fontWeight: 'normal',
    fontStyle: 'italic',
    fontStretch: 'normal',
    lineHeight: '2.15',
    letterSpacing: '0.7px',
    color: '#023256',
    [theme.breakpoints.up('md')]: {
      fontSize: '22px',
      lineHeight: '2.05',
      letterSpacing: '1px'
    }
  },
  link: {
    textDecoration: 'none'
  }
});

function NewsCard({ classes, image, title, date, link }) {
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <CardActionArea>
            <CardMedia className={classes.cardMedia} image={image} />
            <CardContent className={classes.cardContent}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.title}
              >
                {title}
              </Typography>
              <Typography variant="button" className={classes.arrow}>
                <img src={arrow} alt="Open" />
              </Typography>
              <Typography component="p" className={classes.date}>
                {date}
              </Typography>
            </CardContent>
          </CardActionArea>
        </a>
      </Card>
    </div>
  );
}

NewsCard.propTypes = {
  classes: PropTypes.shape().isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default withStyles(styles)(NewsCard);
