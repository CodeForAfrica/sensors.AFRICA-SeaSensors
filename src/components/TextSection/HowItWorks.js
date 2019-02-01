import React, { Fragment } from "react";

import TextSection from "./TextSection";
import { Works } from "./data";

function HowItWorks() {
  return (
    <Fragment>
      <TextSection title={Works.title} text={Works.text} />
    </Fragment>
  );
}

export default HowItWorks;
