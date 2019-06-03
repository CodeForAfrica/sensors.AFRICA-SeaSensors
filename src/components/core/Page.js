import React from 'react';
import { PropTypes } from 'prop-types';
import { Helmet } from 'react-helmet';

import withRoot from '../../withRoot';
import '../../assets/css/main.css';

function Page({ children, ...props }) {
  return (
    <div className="main-container-parent" {...props}>
      <Helmet>
        <title>SeaSensors | sensors.AFRICA</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#606060" />
        <meta name="msapplication-TileColor" content="#2b5797" />
      </Helmet>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Page.defaultProps = {
  children: null
};

export default withRoot(Page);
