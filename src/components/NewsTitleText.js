import React from 'react';
import { withStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = {
  titleContent: {
    display: 'flex',
    position: 'relative',
    left: '163px',
    marginTop: '145px'
  },
  titleRule: {
    width: '22.5px',
    height: '1px',
    opacity: '0.3',
    background: '#023256',
    marginRight: '15px'
  },
  titleText: {
    width: '216.8px',
    height: '24px',
    opacity: '0.4',
    fontFamily: 'Oswald',
    fontSize: '9px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.83px',
    letterSpacing: '5.4px',
    color: '#023256'
  },
  topStoriesTitle: {
    width: '529.5px',
    height: '102px',
    fontFamily: 'Oswald',
    fontSize: '52px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.7px',
    marginLeft: '163px',
    color: '#023256'
  },
  storiesBody: {
    height: '102px',
    opacity: '0.6',
    fontFamily: 'Montserrat',
    fontSize: '15px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: '0.7px',
    color: '#023256',
    marginLeft: '163px',
    lineHeight: 2.5
  }
};

function NewsTitleText(props) {
  const { classes, titleText, topStoriesTitle } = props;
  return (
    <div>
      <div className={classes.titleContent}>
        <div className={classes.titleRule} />
        <Typography variant="body1" gutterBottom className={classes.titleText}>
          {titleText}
        </Typography>
      </div>
      <Typography variant="h1" gutterBottom className={classes.topStoriesTitle}>
        {topStoriesTitle}
      </Typography>
    </div>
  );
}

NewsTitleText.propTypes = {
  classes: PropTypes.shape().isRequired,
  titleText: PropTypes.string.isRequired,
  topStoriesTitle: PropTypes.string.isRequired
};

export default withStyles(styles)(NewsTitleText);
