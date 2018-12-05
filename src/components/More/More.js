import React from 'react';
import PropTypes from 'prop-types';
import {withStyles, Grid, Typography} from '@material-ui/core';
import './More.css'

const styles = theme => ({
    root: {
        flexGrow: 1
    }
});

function More() {
    return (
        <div className="moreContainer">
            <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="body2" className="more-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <span className="read-more">
                        Read More
                    </span>
                </Grid>
            </Grid>
        </div>
    );
}

More.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(More);