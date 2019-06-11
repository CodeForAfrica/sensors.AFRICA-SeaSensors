import React, { Component } from 'react';
import Tabletop from 'tabletop';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import Snorkel2 from '../../assets/Snorkel2.png';

import MonthStoryText from './MonthStoryText';

const styles = {
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
};
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
    );
  }
}

MonthStory.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(MonthStory);
