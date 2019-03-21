import React, { Component } from "react";
import { Typography } from "@material-ui/core";

import artem from "../../assets/indexPage/artem.png";
import scuba from "../../assets/indexPage/scuba.png";
import drone from "../../assets/indexPage/drone.png";

import MediaCard from "./MediaCard";

const stateStories = [
  {
    title: "Story Title 1",
    bodyField: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "Launch Site",
    image: scuba
  },
  {
    title: "Story Title 2",
    bodyField: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "Launch Site",
    image: artem
  },
  {
    title: "Story Title 3",
    bodyField: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "Launch Site",
    image: drone
  }
];

const styles = {
  mask: {
    width: "100%",
    height: "800px",
    padding: "35px",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "102.2px",
    backgroundColor: "rgb(242, 242, 242)"
  },
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#f2f2f2",
    boxShadow: "none"
  },
  seaSensorsStories: {
    width: "596.3 px",
    height: "115 px",
    fontFamily: "Oswald",
    fontSize: "52 px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "0.7 px",
    color: " #023256",
    marginBottom: "2em",
    marginLeft: "154px"
  },
  line: {
    width: "75px",
    height: "0.8px",
    background: "lightgrey",
    borderLeft: "solid #023256 20px"
  }
};

class Stories extends Component {
  constructor(props) {
    super(props);

    this.state = { stories: stateStories };
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
                key={story.title}
                title={story.title}
                image={story.image}
                bodyField={story.bodyField}
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
