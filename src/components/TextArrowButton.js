import React from 'react';

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

export default TextArrowButton;
