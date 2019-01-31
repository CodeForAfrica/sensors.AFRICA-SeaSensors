import React, { Component } from "react";
import { withStyles, Typography } from "@material-ui/core";
import GalleryContainer from "./GalleryContainer";
import galleryImage1 from "../../assets/_MGL0793.png";
import galleryImage2 from "../../assets/_MGL0816.png";
import galleryImage3 from "../../assets/DJI_0002.png";
import galleryImage4 from "../../assets/GH010004.MP4.09_01_58_09.Still006.png";

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
