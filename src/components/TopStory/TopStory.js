import React from 'react';
import PropTypes from 'prop-types';
import {withStyles, Grid, Typography} from '@material-ui/core';
import arrow from '../../assets/arrow.png';
import './TopStory.css'

const styles = () => ({
    root: {
        flexGrow: 1
    }
});

function TopStory() {
    return (
        <div className="parentContainer">
            <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="caption" className="SEA-SENSORS-TOP-STOR">
                        SEA SENSORS TOP STORY
                    </Typography>
                    <Typography variant="h4" className="The-effects-of-blast">
                        The effects of blast fishing on the local community.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="caption" className="Lorem-ipsum-dolor-si">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna.
                    </Typography>
                    <div className='Rectangle'>
                        <span className="READ-MORE">READ MORE</span>
                        <span className="arrow">
                            <img src={arrow} alt=""/>
                        </span>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

TopStory.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopStory);