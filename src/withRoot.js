import { SheetsRegistry } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import React from 'react';
import {
  createMuiTheme,
  createGenerateClassName,
  MuiThemeProvider
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const THEME = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

function createPageContext() {
  return {
    theme: THEME,

    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),

    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),

    // The standard class name generator.
    generateClassName: createGenerateClassName()
  };
}

/* eslint-disable no-underscore-dangle */
function getPageContext() {
  // Make sure to create a new context for every server-side request so that
  // data isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
/* eslint-enable no-underscore-dangle */

export default function withRoot(Component) {
  class WithRoot extends React.Component {
    constructor(props) {
      super(props);

      this.muiPageContext = getPageContext();
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      return (
        <JssProvider generateClassName={this.muiPageContext.generateClassName}>
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <MuiThemeProvider
            theme={this.muiPageContext.theme}
            sheetsManager={this.muiPageContext.sheetsManager}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple
              baseline to build upon. */}
            <CssBaseline />
            <Component {...this.props} />
          </MuiThemeProvider>
        </JssProvider>
      );
    }
  }

  return WithRoot;
}
