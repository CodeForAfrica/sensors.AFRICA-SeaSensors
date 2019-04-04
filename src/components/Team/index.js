import React, { Component } from "react";
import { withStyles, Typography } from "@material-ui/core";

import cardImage1 from "../../assets/partnerImage1.png";
import cardImage2 from "../../assets/partnerImage2.png";
import cardImage3 from "../../assets/partnerImage3.png";
import cardImage4 from "../../assets/partnerImage4.png";

import CardContainer from "./CardContainer";

const partnersContent = [
  {
    id: 1,
    name: "Name & Surname",
    title: "Job Title",
    image: cardImage1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 2,
    name: "Name & Surname",
    title: "Job Title",
    image: cardImage2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 3,
    name: "Name & Surname",
    title: "Job Title",
    image: cardImage3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 4,
    name: "Name & Surname",
    title: "Job Title",
    image: cardImage4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];

const styles = {
  parentContainer: {
    height: "1166px",
    marginTop: "200px",
    paddingLeft: "90px",
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
    color: "#023256",
    paddingLeft: "29.3px"
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
          <Typography
            component="body2"
            variant="body2"
            gutterBottom
            style={styles.meetTeamText}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
            <br />
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam.
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
