import React, { Component } from "react";
import { withStyles, Typography } from "@material-ui/core";

import galleryImage1 from "../../assets/galleryImage1.jpg";
import galleryImage2 from "../../assets/galleryImage2.jpg";
import galleryImage3 from "../../assets/galleryImage3.jpg";
import galleryImage4 from "../../assets/galleryImage4.jpg";
import galleryImage5 from "../../assets/galleryImage5.jpg";
import galleryImage6 from "../../assets/galleryImage6.jpg";
import galleryImage7 from "../../assets/galleryImage7.jpg";
import galleryImage8 from "../../assets/galleryImage8.jpg";
import galleryImage9 from "../../assets/galleryImage9.jpg";
import galleryImage10 from "../../assets/galleryImage10.jpg";
import galleryImage11 from "../../assets/galleryImage-11.jpg";
import galleryImage12 from "../../assets/galleryImage12.jpg";
import galleryImage13 from "../../assets/galleryImage13.jpg";
import galleryImage14 from "../../assets/galleryImage14.jpg";
import galleryImage15 from "../../assets/galleryImage15.jpg";
import galleryImage16 from "../../assets/galleryImage16.jpg";
import galleryImage17 from "../../assets/galleryImage17.jpg";
import galleryImage18 from "../../assets/galleryImage18.jpg";
import galleryImage19 from "../../assets/galleryImage19.jpg";
import galleryImage20 from "../../assets/galleryImage20.jpg";

import GalleryContainer from "./GalleryContainer";

const galleryContent = [
  {
    id: 1,
    image: galleryImage1
  },
  {
    id: 2,
    image: galleryImage2
  },
  {
    id: 3,
    image: galleryImage3
  },
  {
    id: 4,
    image: galleryImage4
  },
  {
    id: 5,
    image: galleryImage5
  },
  {
    id: 6,
    image: galleryImage6
  },
  {
    id: 7,
    image: galleryImage7
  },
  {
    id: 8,
    image: galleryImage8
  },
  {
    id: 9,
    image: galleryImage9
  },
  {
    id: 10,
    image: galleryImage10
  },
  {
    id: 11,
    image: galleryImage11
  },
  {
    id: 12,
    image: galleryImage12
  },
  {
    id: 13,
    image: galleryImage13
  },
  {
    id: 14,
    image: galleryImage14
  },
  {
    id: 15,
    image: galleryImage15
  },
  {
    id: 16,
    image: galleryImage16
  },
  {
    id: 17,
    image: galleryImage17
  },
  {
    id: 18,
    image: galleryImage18
  },
  {
    id: 19,
    image: galleryImage19
  },
  {
    id: 20,
    image: galleryImage20
  }
];

const styles = {
  parentContainer: {
    padding: "0 0 0 120px"
  },
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    boxShadow: "none",
    overflowX: "scroll"
  },
  viewGallery: {
    width: "447px",
    height: "66px",
    fontFamily: "Oswald",
    fontSize: "15px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "16.5px",
    color: "#023256"
  },
  viewParent: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "240px",
    marginBottom: "52.5px"
  },
  line: {
    width: "75px",
    height: "0.8px",
    background: "lightgrey",
    borderLeft: "solid #023256 20px"
  },
  viewCard: {
    marginRight: "30px"
  }
};

class ViewGallery extends Component {
  constructor(props) {
    super(props);
    this.state = { galleryCards: galleryContent };
  }

  render() {
    const { galleryCards } = this.state;
    return (
      <React.Fragment>
        <div style={styles.viewParent}>
          <Typography
            component="h2"
            variant="body1"
            gutterBottom
            style={styles.viewGallery}
          >
            VIEW GALLERY
          </Typography>
          <div style={styles.line} />
        </div>
        <div style={styles.parentContainer}>
          <div style={styles.card}>
            {galleryCards.map(picture => (
              <div style={styles.viewCard}>
                <GalleryContainer key={picture.id} image={picture.image} />
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ViewGallery);
