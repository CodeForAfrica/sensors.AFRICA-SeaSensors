import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography, GridList } from '@material-ui/core';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';

import Gill from '../../assets/partnerImage3.png';
import Jamie from '../../assets/Jamie.jpg';
import Jason from '../../assets/JasonRubens.jpg';

import CardContainer from './CardContainer';
import Line from '../Line';

const partnersContent = [
  {
    id: 1,
    name: 'Dr Gill Braulik',
    title: 'Project Lead',
    image: Gill,
    text:
      'Gill is a marine biologist and research fellow at the University of St. Andrews in the UK. She lives and works on marine issues in Tanzania. She is currently leading the SeaSensors project.',
    twitterSocial: 'https://twitter.com/GillBraulik'
  },
  {
    id: 2,
    name: 'Jamie Macaulay',
    title: 'Acoustic Analyst',
    image: Jamie,
    text:
      'Jamie is a specialist on underwater acoustics of whales and dolphins and is responsible for developing the open source software and algorithms to detect bomb blasts.',
    twitterSocial: 'https://twitter.com/jam_machund'
  },
  {
    id: 3,
    name: 'Jason Rubens',
    title: 'Project Advisor',
    image: Jason,
    text:
      'Jason is an independent  marine environment and fisheries specialist and has been involved in supporting, monitoring, surveillance, and control of blast fishing in Tanzania.',
    twitterSocial: 'jasonrubens2@gmail.com'
  }
];

const styles = theme => ({
  parentContainer: {
    marginTop: '6rem',
    paddingLeft: '1.875rem',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    height: '750px',
    [theme.breakpoints.up('md')]: {
      height: '900px',
      paddingLeft: '10rem',
      marginTop: '12.5rem'
    }
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    boxShadow: 'none',
    flexWrap: 'nowrap',
    marginLeft: '-1.88rem !important',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    scrollbarColor: '#023256',
    scrollbarWidth: 'thin',
    '&::-webkit-scrollbar': {
      height: '0.15rem'
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'lightgrey',
      marginLeft: '2rem',
      marginRight: '2rem',
      color: 'lightgrey'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#023256',
      color: '#023256',
      border: '1px solid #023256',
      height: '0.2rem'
    },
    marginBottom: '4rem',
    [theme.breakpoints.up('md')]: {
      marginBottom: '9.25rem'
    }
  },
  meetTeamTitle: {
    fontFamily: 'Oswald',
    fontSize: '2.1875rem',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.29',
    letterSpacing: '0.4px',
    color: '#023256',
    paddingLeft: '1.875rem',
    paddingTop: '3rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '3.25rem',
      letterSpacing: '0.7px',
      lineHeight: 'normal',
      paddingTop: '5rem'
    }
  },
  meetTeamText: {
    opacity: '0.6',
    fontFamily: 'Montserrat',
    fontSize: '15px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2.5',
    letterSpacing: '0.7px',
    color: '#023256'
  },
  cardView: {
    marginRight: '30px'
  },
  lineRoot: {
    marginLeft: '1.875rem',
    marginBottom: '1.875rem'
  }
});

function TeamCard({ classes, width }) {
  let cards = 3;
  let cellHeight = 650;
  if (isWidthDown('md', width)) {
    cards = 1.25;
    cellHeight = 550;
  }
  return (
    <React.Fragment>
      <div className={classes.parentContainer}>
        <Typography
          component="h2"
          variant="h1"
          gutterBottom
          className={classes.meetTeamTitle}
        >
          Meet the Team.
        </Typography>
        <Line classes={{ root: classes.lineRoot }} />
        <GridList className={classes.card} cellHeight={cellHeight} cols={cards}>
          {partnersContent.map(partner => (
            <div className={classes.cardView} key={partner.id}>
              <CardContainer
                image={partner.image}
                name={partner.name}
                title={partner.title}
                text={partner.text}
                facebookSocial={partner.facebookSocial}
                twitterSocial={partner.twitterSocial}
              />
            </div>
          ))}
        </GridList>
      </div>
    </React.Fragment>
  );
}

TeamCard.propTypes = {
  classes: PropTypes.shape().isRequired,
  width: PropTypes.string.isRequired
};

export default withWidth()(withStyles(styles)(TeamCard));
