import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import NewsTitleText from "./NewsTitleText";

const styles = {
  videoAudioStoriesParent: {
    backgroundColor: "#F0F0F0",
    marginTop: "117.5px"
  },
  parentContainer: {
    padding: "20px 120px 119.5px 120px"
  },
  newsTitleText: {
    marginRight: "32.7%"
  },
  cardInfo: {
    width: "390px",
    height: "337.5px",
    backgroundColor: "#ffffff",
    boxShadow: "0 30px 60px 0 rgba(0, 0, 0, 0.05)",
    flex: "1",
    textAlign: "center",
    margin: "10px 40px"
  },
  flexGrid: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 0 20px 0"
  },
  backgroundVideo: {
    height: "337.5px",
    width: "100%",
    float: "left",
    top: "0",
    padding: "none",
    background: "cover"
  },
  UoSALogo: {
    width: "136px",
    height: "auto",
    marginTop: "74px"
  },
  partnerTexts: {
    width: "295.5px",
    height: "39px",
    opacity: "0.3",
    fontFamily: "Montserrat",
    fontSize: "22.5px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "1.67",
    letterSpacing: "1px",
    textAlign: "center",
    color: "#000000",
    marginTop: "148px",
    marginLeft: "79px"
  },
  youtube: {
    textDecoration: "underline",
    marginRight: "3px",
    marginLeft: "3px"
  },
  youtubeTextIcon: {
    display: "flex",
    alignItems: "center"
  },
  socialSharing: {
    fontFamily: "Oswald",
    fontSize: "15px",
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "4",
    letterSpacing: "0.8px",
    color: " #023256",
    marginRight: "29px"
  },
  parentHeading: {
    display: "flex"
  }
};

function VideoAudioStories(props) {
  const { classes, origin } = props;

  return (
    <div className={classes.videoAudioStoriesParent}>
      <div className={classes.parentHeading}>
        <div className={classes.newsTitleText}>
          <NewsTitleText
            titleText="VIDEO & AUDIO STORIES"
            topStoriesTitle="Lorem Ipsum Dolor."
            storiesBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
        <div className="classes.youtubeTextIcon">
          <p className={classes.socialSharing}>
            Visit our
            <span className={classes.youtube}>Youtube</span>
            channel.
          </p>
          <FontAwesomeIcon icon={faYoutube} color="#023256" size="2x" />
          <div />
        </div>
      </div>
      <div className={classes.parentContainer}>
        <div className={classes.flexGrid}>
          <div className={classes.cardInfo}>
            <iframe
              id="ytplayer"
              title="Installing acoustic sensors onto the sea bed, Tanzania"
              type="text/html"
              width="100%"
              height="100%"
              src={`https://www.youtube-nocookie.com/embed/pxfIEDxbJdk?origin=${origin}`}
              frameBorder="0"
              allowFullScreen
              className={classes.backgroundVideo}
            />
          </div>
          <div className={classes.cardInfo}>
            <iframe
              id="ytplayer"
              title="Installing acoustic sensors onto the sea bed, Tanzania"
              type="text/html"
              width="100%"
              height="100%"
              src={`https://www.youtube-nocookie.com/embed/gUJqdCq50EE?origin=${origin}`}
              frameBorder="0"
              allowFullScreen
              className={classes.backgroundVideo}
            />
          </div>
          <div className={classes.cardInfo}>
            <iframe
              id="ytplayer"
              title="Installing acoustic sensors onto the sea bed, Tanzania"
              type="text/html"
              width="100%"
              height="100%"
              src={`https://www.youtube-nocookie.com/embed/pxfIEDxbJdk?origin=${origin}`}
              frameBorder="0"
              allowFullScreen
              className={classes.backgroundVideo}
            />
          </div>
        </div>
        <div className={classes.flexGrid}>
          <div className={classes.cardInfo}>
            <iframe
              id="ytplayer"
              title="Installing acoustic sensors onto the sea bed, Tanzania"
              type="text/html"
              width="100%"
              height="100%"
              src={`https://www.youtube-nocookie.com/embed/gUJqdCq50EE?origin=${origin}`}
              frameBorder="0"
              allowFullScreen
              className={classes.backgroundVideo}
            />
          </div>
          <div className={classes.cardInfo}>
            <iframe
              id="ytplayer"
              title="Installing acoustic sensors onto the sea bed, Tanzania"
              type="text/html"
              width="100%"
              height="100%"
              src={`https://www.youtube-nocookie.com/embed/pxfIEDxbJdk?origin=${origin}`}
              frameBorder="0"
              allowFullScreen
              className={classes.backgroundVideo}
            />
          </div>
          <div className={classes.cardInfo}>
            <iframe
              id="ytplayer"
              title="Installing acoustic sensors onto the sea bed, Tanzania"
              type="text/html"
              width="100%"
              height="100%"
              src={`https://www.youtube-nocookie.com/embed/gUJqdCq50EE?origin=${origin}`}
              frameBorder="0"
              allowFullScreen
              className={classes.backgroundVideo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

VideoAudioStories.propTypes = {
  classes: PropTypes.shape().isRequired,
  origin: PropTypes.string.isRequired
};

export default withStyles(styles)(VideoAudioStories);
