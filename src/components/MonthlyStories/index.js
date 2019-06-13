import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tabletop from 'tabletop';
import { withStyles, Typography } from '@material-ui/core';

import SectionTitle from '../SectionTitle';
import MonthStoryText from './MonthStoryText';

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
    width: '1350px',
    marginLeft: '89px',
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
  }
});

class MonthStory extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    Tabletop.init({
      key: '16EDYidZSNnbGPcxedzWMbjNyQPcKUZuf5PP8LbP5BTY',
      callback: (data, tabletop) => {
        const sheetData = tabletop.sheets('Month Story').all();
        this.setState({
          data: sheetData
        });
      }
    });
  }

  render() {
    const { classes } = this.props;
    const { data } = this.state;
    return (
      <div className={classes.root}>
        <SectionTitle subtitle="Monthly Stories">
          Our Monthly Stories.
        </SectionTitle>
        <Typography variant="body1" className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </Typography>
        <div className={classes.monthStoryContainer}>
          <div className={classes.blur} />
          {data.map(obj => (
            <MonthStoryText
              key={obj.title}
              title={obj.title}
              text={obj.text}
              link={obj.link}
            />
          ))}
        </div>
      </div>
    );
  }
}

MonthStory.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(MonthStory);
