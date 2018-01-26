import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

import MenuIcon from 'material-ui-icons/Menu';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../withRoot';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import AppDrawer from './../modules/components/RrDrawer';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes1 = [
  { path: '/',
    exact: true,
    sidebar: () => <div>home1</div>,
    main: () => <h2>Home 1</h2>
  },
  { path: '/bubblegum',
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  { path: '/shoelaces',
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
]

const routes2 = [
  { path: '/two',
    exact: true,
    sidebar: () => <div>home2</div>,
    main: () => <h2>Home 2</h2>
  },
  { path: '/hb',
    sidebar: () => <div>hb!</div>,
    main: () => <h2>Honeybun</h2>
  },
  { path: '/michael',
    sidebar: () => <div>michael!</div>,
    main: () => <h2>Michael</h2>
  }
]

class Index extends React.Component {

  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes } = this.props;
    const title = 'Hola from Florida'
    let appBarClassName = classes.appBar;
    let navIconClassName = '';

    return (
      <div className={classes.root}>

        <AppBar className={appBarClassName}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={navIconClassName}
            >
              <MenuIcon />
            </IconButton>
            {title !== null && (
              <Typography className={classes.title} type="title" color="inherit" noWrap>
                {title}
              </Typography>
            )}

          </Toolbar>
        </AppBar>

        <AppDrawer
          className={classes.drawer}
          onClose={this.handleDrawerToggle}
          mobileOpen={this.state.mobileOpen}
        />

        <Typography type="display1" gutterBottom>
          Florida
        </Typography>
        <Typography type="subheading" gutterBottom>
          has 20 million people...
        </Typography>

        <Router>
          <div style={{ display: 'flex' }}>

            <div style={{
              padding: '10px',
              width: '40%',
              background: '#f0f0f0'
            }}>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/bubblegum">Bubblegum</Link></li>
                <li><Link to="/shoelaces">Shoelaces</Link></li>
              </ul>

              {routes1.map((route, index) => (
                // You can render a <Route> in as many places
                // as you want in your app. It will render along
                // with any other <Route>s that also match the URL.
                // So, a sidebar or breadcrumbs or anything else
                // that requires you to render multiple things
                // in multiple places at the same URL is nothing
                // more than multiple <Route>s.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.sidebar}
                />
              ))}
            </div>

            <div style={{ flex: 1, padding: '10px' }}>
              {routes1.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </div>

            <div style={{
              flex: 2,
              padding: '10px',
              width: '40%',
              background: '#f0f0f0'
            }}>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><Link to="/two">Home</Link></li>
                <li><Link to="/hb">Hb</Link></li>
                <li><Link to="/michael">Michael</Link></li>
              </ul>

              {routes2.map((route, index) => (
                // You can render a <Route> in as many places
                // as you want in your app. It will render along
                // with any other <Route>s that also match the URL.
                // So, a sidebar or breadcrumbs or anything else
                // that requires you to render multiple things
                // in multiple places at the same URL is nothing
                // more than multiple <Route>s.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.sidebar}
                />
              ))}
            </div>

            <div style={{ flex: 3, padding: '10px' }}>
              {routes2.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </div>

          </div>
        </Router>

      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
