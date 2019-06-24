import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  withStyles
} from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 0,
    flexShrink: 0,
    borderRadius: 0,
    width: '360px',
    height: '500.4px',
    marginBottom: '20px',
    boxShadow: '0 30px 60px 0 rgba(0, 0, 0, 0.05)',

    position: 'relative',

    textDecoration: 'none',

    '&:hover': {
      backgroundColor: 'rgba(201, 224, 253, 0.8)'
    },

    [theme.breakpoints.up('sm')]: {
      marginBottom: 0,
      marginRight: '20px'
    }
  },
  media: {
    marginLeft: '50px',
    width: '310px',
    height: 300
  },
  content: {
    paddingLeft: '50px',
    minHeight: '130px'
  },
  launch: {
    fontFamily: 'Montserrat',
    fontSize: '18px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.88,
    letterSpacing: '0.6px',
    color: '#00a5dc',

    position: 'absolute',
    bottom: '20px'
  },
  title: {
    fontFamily: 'Oswald',
    fontSize: '22px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.53,
    letterSpacing: '1.1px',
    color: '#023256'
  },
  text: {
    fontFamily: 'Montserrat',
    fontSize: '15px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 2.5,
    letterSpacing: '1px',
    color: '#023256'
  }
});

function MediaCard({ classes, image, title, link }) {
  return (
    <Card
      component="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.root}
    >
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" className={classes.title}>
          {title}
        </Typography>
        <Typography className={classes.launch}>Launch Site</Typography>
      </CardContent>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.shape().isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default withStyles(styles)(MediaCard);
