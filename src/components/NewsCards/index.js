import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabletop from 'tabletop';
import { withStyles } from '@material-ui/core';

import NewsCards from './NewsCards';

const styles = {
  cardStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    boxShadow: 'none',
    marginTop: '95px',
    marginBottom: '65px',
    marginRight: '74px'
  },
  parentCard: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  }
};

class NewsCardContent extends Component {
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
        const sheetData = tabletop.sheets('News Cards').all();
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
      <React.Fragment>
        <div className={classes.parentCard}>
          <div className={classes.cardStyle}>
            {data.map(obj => (
              <NewsCards
                key={obj.title}
                title={obj.title}
                image={obj.image}
                date={obj.date}
                link={obj.link}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

NewsCardContent.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(NewsCardContent);
