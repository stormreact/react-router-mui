import React from 'react';
import PropTypes from 'prop-types';
import find from 'lodash/find';
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

const pages = [
  {
    pathname: '/ch1',
    children: [
      {
        pathname: '/sec1',
        title: 'Chapter 1, Section 1',
      },
      {
        pathname: '/sec2',
        title: 'Chapter 1, Section 2',
      },
      {
        pathname: '/sec3',
        title: 'Chapter 1, Section 3',
      },
    ],
  },
  {
    pathname: '/ch2',
    children: [
      {
        pathname: '/sec1',
        title: 'Chapter 2, Section 1',
      },
      {
        pathname: '/sec2',
        title: 'Chapter 2, Section 2',
      },
    ],
  },
  {
    pathname: '/ch3',
    children: [
      {
        pathname: '/sec1',
        title: 'Chaper 3, Section 1',
      },
      {
        pathname: '/sec2',
        title: 'Chapter 3, Section 2',
      },
      {
        pathname: '/sec3',
        title: 'Chapter 3, Section 3',
      },
    ],
  },
  {
    pathname: '/',
    title: false,
  },
];

function findActivePage(currentPages, url) {
  const activePage = find(currentPages, page => {
    if (page.children) {
      return url.pathname.indexOf(page.pathname) === 0;
    }

    // Should be an exact match if no children
    return url.pathname === page.pathname;
  });

  if (!activePage) {
    return null;
  }

  // We need to drill down
  if (activePage.pathname !== url.pathname) {
    return findActivePage(activePage.children, url);
  }

  console.log(activePage);

  return activePage;
}

function withRoot(Component) {
  class WithRoot extends React.Component {

    static defaultProps = {
      url : {
        pathname: "/ch2",
      },
    };

    getChildContext() {
      return {
        url: this.props.url ? this.props.url : null,
        pages,
        activePage: findActivePage(pages, this.props.url),
      };
    }

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

  WithRoot.propTypes = {
    url: PropTypes.object,
  };

  WithRoot.childContextTypes = {
    url: PropTypes.object,
    pages: PropTypes.array,
    activePage: PropTypes.object,
  };

  return WithRoot;
}

export default withRoot;
