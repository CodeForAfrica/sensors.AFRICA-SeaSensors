import React, { Component } from "react";
import Tabletop from "tabletop";

import NewsCards from "./NewsCards";

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
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    Tabletop.init({
      key: "187vzJU3uqHqlyk_UkpQIT2MwRp5tE5eS9UYWo5kf9R0",
      callback: (data, tabletop) => {
        const sheetData = tabletop.sheets("News Cards").all();
        this.setState({
          data: sheetData
        });
      }
    });
  }

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <div className={styles.parentCard}>
          <div style={styles.cardStyle}>
            {data.map(obj => (
              <NewsCards
                key={obj.title}
                title={obj.title}
                image={obj.image}
                date={obj.date}
                link={obj.link}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NewsCardContent;
