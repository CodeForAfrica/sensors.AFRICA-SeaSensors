import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import Tabletop from "tabletop";

import MediaCard from "./MediaCard";

const stateStories = [];

const styles = {
  mask: {
    height: "760px",
    paddingLeft: "90px",
    paddingTop: "30px",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.05)"
  },
  card: {
    display: "inline-flex",
    boxShadow: "none",
    marginTop: "50px",
    overflowX: "scroll",
    width: "100%"
  },
  seaSensorsStories: {
    fontFamily: "Oswald",
    fontSize: "52px",
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: "0.7 px",
    color: " #023256",
    marginLeft: "70px"
  },
  line: {
    width: "80px",
    height: "2px",
    background: "lightgrey",
    marginTop: "20px",
    borderLeft: "solid #023256 20px"
  }
};

class Stories extends Component {
  constructor(props) {
    super(props);

    this.state = { stories: stateStories };
  }

  componentDidMount() {
    Tabletop.init({
      key: "187vzJU3uqHqlyk_UkpQIT2MwRp5tE5eS9UYWo5kf9R0",
      callback: (data, tabletop) => {
        this.processData(tabletop.sheets("Sea Sensors Stories").all());
      }
    });
  }

  processData(data) {
    const newData = [...data];

    for (let i = 0; i < newData.length; i += 1) {
      newData[i].id = i;
    }
    this.setState({ stories: newData });
  }

  render() {
    const { stories } = this.state;
    return (
      <React.Fragment>
        <div style={styles.mask}>
          <Typography
            component="h2"
            variant="h2"
            gutterBottom
            style={styles.seaSensorsStories}
          >
            Sea Sensors Stories.
            <div style={styles.line} />
          </Typography>
          <div style={styles.card}>
            {stories.map(story => (
              <MediaCard
                key={story}
                title={story.title}
                image={story.image}
                date={story.date}
                link={story.link}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Stories;
