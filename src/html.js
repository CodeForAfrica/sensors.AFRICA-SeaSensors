import React from 'react';
import PropTypes from 'prop-types';

export default function HTML({
  body,
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  postBodyComponents
}) {
  return (
    <html lang="en" {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div className="preloader"></div>
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.shape().isRequired,
  headComponents: PropTypes.instanceOf(Array),
  bodyAttributes: PropTypes.shape().isRequired,
  preBodyComponents: PropTypes.instanceOf(Array),
  body: PropTypes.string,
  postBodyComponents: PropTypes.instanceOf(Array)
};

HTML.defaultProps = {
  body: '',
  headComponents: '',
  preBodyComponents: '',
  postBodyComponents: ''
};
