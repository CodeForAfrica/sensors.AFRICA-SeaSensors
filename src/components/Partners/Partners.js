import React from 'react'
import PropTypes from 'prop-types'
import {withStyles, Grid, Typography} from '@material-ui/core'
import partners from '../../assets/partners.png'
import './Partners.css'

const styles = () => ({
    root: {
        flexGrow: 1
    }
});

function Partners() {

    return (
        <div className="partner-parent">
            <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                    <img src={partners} className="partner-image" alt=""/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="caption" className="our-partners">
                        OUR PARTNERS
                    </Typography>
                    <Typography variant="h4" className="big-thanks-text">
                        A big thanks to all our partners involved.
                    </Typography>
                    <Typography className="Sea-Sensors-is-heade">
                        Sea Sensors is headed by marine scientist, Gill Braulik and was granted funding
                        through Code for Africa’s innovateAFRICA programme in 2017. The project would
                        not be possible without the help of our partners, Jamie Macaulay, St. Andrews
                        University, Jason Rubens, Sound Ocean Ltd, Tanzania Blast Monitoring Network,
                        Mwambao Coastal Community Network, Marine Parks and Reserves Unit, Tanzania
                        Fisheries Research Institute (TAFIRI) and Nukta Africa Ltd.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

Partners.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Partners);