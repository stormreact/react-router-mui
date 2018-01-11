import React from 'react';
import PropTypes from 'prop-types';
import { create } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
  jssPreset,
} from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import Reboot from 'material-ui/Reboot';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
});

// Create a JSS instance with the default preset of plugins.
// It's optional.
const jss = create(jssPreset());

// The standard class name generator.
// It's optional.
const generateClassName = createGenerateClassName();

function withRoot(Component) {
  class WithRoot extends React.Component {

    render() {
      const { ...other } = this.props;
    // JssProvider allows customizing the JSS styling solution.
       return (
        <JssProvider jss={jss} generateClassName={generateClassName}>
          {/* MuiThemeProvider makes the theme available down the React tree
            thanks to React context. */}
          <MuiThemeProvider theme={theme}>
            {/* Reboot kickstart an elegant, consistent, and simple baseline to build upon. */}
            <Reboot />
            <Component {...other} />
          </MuiThemeProvider>
        </JssProvider>
      );
    }
  }

  WithRoot.childContextTypes = {
    pages: PropTypes.array,
    activePage: PropTypes.object,
  };

  return WithRoot;
}

export default withRoot;
