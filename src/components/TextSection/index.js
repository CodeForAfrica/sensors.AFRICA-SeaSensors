import React, { Fragment } from "react";

import TextSection from "./TextSection";
import { Blast } from "./data";

function BlastFishing() {
  return (
    <Fragment>
      <TextSection title={Blast.title} text={Blast.text} />
    </Fragment>
  );
}

export default BlastFishing;
