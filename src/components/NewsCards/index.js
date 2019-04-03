import React, { Component } from "react";

import NewsCardImage1 from "../../assets/NewsCardImage1.png";
import NewsCardImage2 from "../../assets/NewsCardImage2.png";
import NewsCardImage3 from "../../assets/NewsCardImage3.png";

import NewsCards from "./NewsCards";

const newsCardContent = [
  {
    cardNumber: 1,
    image: NewsCardImage1,
    title: "Dolor Amenr init.",
    text: "Date Published"
  },
  {
    cardNumber: 2,
    image: NewsCardImage2,
    title: "Dolor Amenr init.",
    text: "Date Published"
  },
  {
    cardNumber: 3,
    image: NewsCardImage3,
    title: "Dolor Amenr init.",
    text: "Date Published"
  }
];

const styles = {
  cardStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    boxShadow: "none",
    marginTop: "95px",
    marginBottom: "65px",
    marginRight: "74px"
  },
  parentCard: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff"
  }
};

class NewsCardContent extends Component {
  constructor() {
    super();
    this.state = { newsCards: newsCardContent };
  }

  render() {
    const { newsCards } = this.state;
    return (
      <React.Fragment>
        <div className={styles.parentCard}>
          <div style={styles.cardStyle}>
            {newsCards.map(newsCard => (
              <NewsCards
                key={newsCard.cardNumber}
                image={newsCard.image}
                title={newsCard.title}
                text={newsCard.text}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NewsCardContent;
