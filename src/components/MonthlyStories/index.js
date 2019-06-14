import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tabletop from 'tabletop';
import { withStyles, Typography } from '@material-ui/core';

import SectionTitle from '../SectionTitle';
import Stories from './Stories';
import StoryOfTheMonth from './StoryOfTheMonth';
import TextArrowLink from '../TextArrowLink';

import Snorkel2 from '../../assets/Snorkel2.png';

const styles = theme => ({
  root: {
    padding: '5.125rem 1.875rem 4.9375rem',
    [theme.breakpoints.up('md')]: {
      padding: '7.875rem 5.5625rem 12.46875rem'
    }
  },
  description: {
    opacity: 0.6,
    fontFamily: 'Montserrat',
    fontSize: '0.75rem',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 2.08,
    letterSpacing: '0.5px',
    color: ' #023256',
    marginBottom: '0.4375rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '0.9375rem',
      lineHeight: 2.5,
      letterSpacing: '0.7px',
      marginBottom: '0.9375rem'
    }
  },
  monthStoryContainer: {
    position: 'relative',
    width: '1260px',
    height: '700px',
    backgroundImage: `url(${Snorkel2})`,
    backgroundSize: 'cover'
  },
  blur: {
    height: '480px',
    backgroundImage: `url(${Snorkel2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom right',
    width: '630px',
    position: 'absolute',
    filter: 'blur(15px)',
    zIndex: '1',
    bottom: '0',
    right: '0'
  },
  allStories: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5rem',
    [theme.breakpoints.up('md')]: {
      marginTop: '5.65625rem'
    }
  }
});

class MonthlyStories extends Component {
  constructor() {
    super();
    this.state = {
      monthStories: [],
      newsCards: []
    };
  }

  componentDidMount() {
    Tabletop.init({
      key: '16EDYidZSNnbGPcxedzWMbjNyQPcKUZuf5PP8LbP5BTY',
      callback: (data, tabletop) => {
        const monthStories = tabletop.sheets('Month Story').all();
        this.setState({ monthStories });
        const newsCards = tabletop.sheets('News Cards').all();
        this.setState({ newsCards });
      }
    });
  }

  render() {
    const { classes } = this.props;
    const { monthStories, newsCards } = this.state;
    if (
      !(monthStories && monthStories.length && newsCards && newsCards.length)
    ) {
      return null;
    }

    const mainStory = monthStories[0];
    const stories = newsCards.slice(0, 3);
    return (
      <div className={classes.root}>
        <SectionTitle subtitle="Monthly Stories">
          Our Monthly Stories.
        </SectionTitle>
        <Typography variant="body1" className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </Typography>
        <StoryOfTheMonth story={mainStory} />
        <Stories stories={stories} />
        <div className={classes.allStories}>
          <TextArrowLink
            blue
            text="ALL STORIES"
            href="https://medium.com/seasensors-africa"
          />
        </div>
      </div>
    );
  }
}

MonthlyStories.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(MonthlyStories);
