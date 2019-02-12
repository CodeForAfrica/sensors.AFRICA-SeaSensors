import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

import printCardImage1 from "../../assets/printCardImage1.png";
import printCardImage2 from "../../assets/printCardImage2.png";
import printCardImage3 from "../../assets/printCardImage3.png";
import printCardImage4 from "../../assets/printCardImage4.png";

import NewsCardContainer from "./NewsCardContainer";

const partnersContent = [
  {
    id: 1,
    titleText: "Lorem ipsum dolor sit.",
    image: printCardImage1,
    datePublished: "Date Published",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 2,
    titleText: "Lorem ipsum",
    image: printCardImage2,
    datePublished: "Date Published",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 3,
    titleText: "Lorem ipsum dolor sit ametin tinel.",
    image: printCardImage3,
    datePublished: "Date Published",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 4,
    titleText: "Lorem Ipsum ",
    image: printCardImage4,
    datePublished: "Date Published",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];

const styles = {
  parentContainer: {
    width: "100%",
    paddingLeft: "90px",
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    boxShadow: "none",
    marginTop: "102px",
    overflowX: "scroll"
  },
  cardView: {
    marginRight: "30px"
  }
};

class NewsPrintCards extends Component {
  constructor() {
    super();
    this.state = { partnerCards: partnersContent };
  }

  render() {
    const { partnerCards } = this.state;
    return (
      <React.Fragment>
        <div style={styles.parentContainer}>
          <div style={styles.card}>
            {partnerCards.map(partner => (
              <div style={styles.cardView}>
                <NewsCardContainer
                  key={partner.id}
                  image={partner.image}
                  titleText={partner.titleText}
                  text={partner.text}
                  datePublished={partner.datePublished}
                />
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(NewsPrintCards);
