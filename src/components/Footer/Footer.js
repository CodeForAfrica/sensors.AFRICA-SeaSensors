import React from 'react';
import PropTypes from 'prop-types';
import {withStyles, Grid, Typography} from '@material-ui/core';
import cfaLogo from '../../assets/cfa.png';
import billMelindaImg from '../../assets/b-m-gf.png';
import oNImg from '../../assets/on.png';
import uniStAndrewsImg from '../../assets/uo-sa.png';
import usdoImg from '../../assets/us-do-s.png';
import icfjImg from '../../assets/icfj.png';
import seaLogoImg from '../../assets/SeaSensors_Logo-10.png';
import './Footer.css';

const styles = () => ({
    root: {
        flexGrow: 1
    }
});

function Footer() {
    return (
        <div className="parentFooter">
            <Grid container spacing={16} className="footerWrapper">
                <Grid item xs={8} className="mainFooterText">
                    <Typography className="footerText">
                        <span className="text-style-2">Sea Sensors
                        </span>
                        is an acoustic data project that collects underwater blast data to help xx
                    </Typography>
                    <Typography className="footerText">
                        The project is funded through
                        <span className="text-style-2">Code for Africa
                        </span>’s
                        <span className="text-style-2">innovateAFRICA
                        </span>
                        programme.
                    </Typography>

                    <Typography className="footerText">
                        <span className="text-style-2">Code for Africa
                        </span>
                        (CfAfrica) is Africa&apos;s largest data journalism and civic technology
                        initiative, operating
                        <span className="text-style-2">
                            CitizenLabs
                        </span><br/>
                        across the continent to help fast-track digital innovation to drive social
                        change.
                    </Typography>
                    <Typography className="footerText">
                        <span className="text-style-2">innovateAFRICA
                        </span>
                        is the continent’s largest fund for supporting civic media experimentation and
                        digital news
                        <br/>
                        startups in everything from data-driven journalism and investigative reporting,
                        to newsroom management,
                        <br/>audience engagement, digital convergence, and media business models.</Typography>
                </Grid>
                <Grid item xs={4} className="logoGridContainer">
                    <Grid container spacing={12}>
                        <Grid item xs={6} className="logoGrid">
                            <img src={cfaLogo} className="logoImg" alt="logoImg"/>
                        </Grid>
                        <Grid item xs={6} className="logoGrid">
                            <img src={oNImg} className="logoImg" alt="logoImg"/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={12}>
                        <Grid item xs={6} className="logoGrid">
                            <img src={usdoImg} className="logoImg" alt="logoImg"/>
                        </Grid>
                        <Grid item xs={6} className="logoGrid">
                            <img src={billMelindaImg} className="logoImg" alt="logoImg"/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={12}>
                        <Grid item xs={6} className="logoGrid">
                            <img src={icfjImg} className="logoImg" alt="logoImg"/>
                        </Grid>
                        <Grid item xs={6} className="logoGrid">
                            <img src={uniStAndrewsImg} className="logoImg" alt="logoImg"/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={16}>
                <Grid item xs={8}>
                    <img src={seaLogoImg} className="seaLogo" alt="seaLogo"/>
                    <span>©Sea Sensors. All rights reserved, 2018.
                        <br/>
                        <bold>Terms & Conditions</bold>
                    </span>
                </Grid>
            </Grid>
        </div>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);