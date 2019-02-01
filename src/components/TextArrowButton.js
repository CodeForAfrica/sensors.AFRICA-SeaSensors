import React from "react";
import PropTypes from "prop-types";

function TextArrowButton(props) {
  const { className, text, image } = props;
  return (
    <span className={className.textArrowButtonParent}>
      <span className={className.textArrowButtonText}>{text}</span>
      <span className={className.textArrowButtonArrow}>
        <img src={image} alt="Arrow" />
      </span>
    </span>
  );
}

TextArrowButton.propTypes = {
  className: PropTypes.shape().isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default TextArrowButton;
