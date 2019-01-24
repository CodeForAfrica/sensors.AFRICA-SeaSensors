import React from 'react';
import { Typography } from '@material-ui/core';

import withRoot from '../withRoot';

const NotFoundPage = () => (
  <div>
    <Typography variant="h1">
      NOT FOUND
    </Typography>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
);

export default withRoot(NotFoundPage);
