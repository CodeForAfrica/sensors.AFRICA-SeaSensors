import React from 'react'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {AppBar, Tabs, Tab, Typography} from '@material-ui/core';
import './MenuBar.css'

function TabContainer(props) {
  return (
    <Typography component="div" style={{
      padding: 8 * 3
    }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class SimpleTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({value});
  };

  render() {
    const {classes} = this.props;
    const {value} = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static"  style={{ background: 'transparent', boxShadow: 'none'}}>
          <Tabs value={value} onChange={this.handleChange} className="content">
            <Tab label="News."/>
            <Tab label="About us."/>
            <Tab label="Resources."/>
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTabs);