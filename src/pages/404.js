import React from "react";
import { Typography } from "@material-ui/core";

import withRoot from "../withRoot";

const NotFoundPage = () => (
  <div>
    <Typography variant="h1">NOT FOUND</Typography>
    <Typography variant="body1" gutterBottom>
      {" "}
      You just hit a route that doesn&#39;t exist... the sadness.
    </Typography>
  </div>
);

export default withRoot(NotFoundPage);
