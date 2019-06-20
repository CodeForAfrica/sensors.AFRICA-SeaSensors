import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tabletop from 'tabletop';
import { withStyles, Typography } from '@material-ui/core';

import Section from '../Section';
import SectionTitle from '../SectionTitle';
import Stories from './Stories';
import StoryOfTheMonth from './StoryOfTheMonth';
import TextArrowLink from '../TextArrowLink';

const styles = theme => ({
  root: {},
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
      <Section classes={{ root: classes.root }}>
        <SectionTitle subtitle="Monthly Stories">
          Our Monthly Stories
        </SectionTitle>
        <Typography variant="body1" className={classes.description}>
          Here is a roundup of our month on month sea sensor stories, both media
          and non-media publications.
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
      </Section>
    );
  }
}

MonthlyStories.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(MonthlyStories);
