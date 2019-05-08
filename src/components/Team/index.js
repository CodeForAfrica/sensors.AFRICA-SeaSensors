import React, { Component } from "react";
import { withStyles, Typography } from "@material-ui/core";

import Gill from "../../assets/partnerImage3.png";
import Jamie from "../../assets/Jamie.jpg";
import Jason from "../../assets/JasonRubens.jpg";

import CardContainer from "./CardContainer";

const partnersContent = [
  {
    id: 1,
    name: "Dr Gill Braulik",
    title: "Project Lead",
    image: Gill,
    text:
      "Gill is a marine biologist and research fellow at the University of St. Andrews in the UK. She lives and works on marine issues in Tanzania. She is currently leading the SeaSensors project.",
    twitterSocial: "https://twitter.com/GillBraulik"
  },
  {
    id: 2,
    name: "Jamie Macaulay",
    title: "Acoustic Analyst",
    image: Jamie,
    text:
      "Jamie is a specialist on underwater acoustics of whales and dolphins and is responsible for developing the open source software and algorithms to detect bomb blasts.",
    twitterSocial: "https://twitter.com/jam_machund"
  },
  {
    id: 3,
    name: "Jason Rubens",
    title: "Project Advisor",
    image: Jason,
    text:
      "Jason is an independent  marine environment and fisheries specialist and has been involved in supporting, monitoring, surveillance, and control of blast fishing in Tanzania.",
    twitterSocial: "jasonrubens2@gmail.com"
  }
];

const styles = {
  parentContainer: {
    height: "1166px",
    marginTop: "200px",
    paddingLeft: "165px",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.05)"
  },
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    boxShadow: "none",
    marginTop: "102px",
    overflowX: "scroll"
  },
  meetTeamTitle: {
    fontFamily: "Oswald",
    fontSize: "52px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "0.7px",
    color: "#023256",
    paddingLeft: "29.3px",
    paddingTop: "80px"
  },
  meetTeamText: {
    opacity: "0.6",
    fontFamily: "Montserrat",
    fontSize: "15px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "2.5",
    letterSpacing: "0.7px",
    color: "#023256"
  },
  cardView: {
    marginRight: "30px"
  }
};

class TeamCard extends Component {
  constructor(props) {
    super(props);

    this.state = { partnerCards: partnersContent };
  }

  render() {
    const { partnerCards } = this.state;
    return (
      <React.Fragment>
        <div style={styles.parentContainer}>
          <Typography
            component="h2"
            variant="h1"
            gutterBottom
            style={styles.meetTeamTitle}
          >
            Meet the Team.
          </Typography>
          <div style={styles.card}>
            {partnerCards.map(partner => (
              <div style={styles.cardView}>
                <CardContainer
                  key={partner.id}
                  image={partner.image}
                  name={partner.name}
                  title={partner.title}
                  text={partner.text}
                  facebookSocial={partner.facebookSocial}
                  twitterSocial={partner.twitterSocial}
                />
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(TeamCard);
