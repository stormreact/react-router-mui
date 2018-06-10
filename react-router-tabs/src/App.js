import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tabState: 'foo'
    }
  }

  setTabState(value) {
    this.setState({ tabState: value })
  };

  render() {
    const { classes } = this.props;
    return(
      <Router>
      <div className={classes.root}>
          <AppBar position="static">
          <Tabs value={this.state.tabState}>
            <Tab to={'/foo'} component={Link} onClick={() => this.setTabState('foo')} value='foo' label='foo' />
            <Tab component={props => <Link to={'/bar'} {...props} />} onClick={() => this.setTabState('bar')} value='bar' label='bar'>
              Bar
          </Tab>
          </Tabs>
          </AppBar>
          <Switch key='main'>
            <Route
              exact
              path={'/foo'}
              component={() => <h1>Test Foo</h1>}
            />
            <Route
              exact
              path={'/bar'}
              component={() => <h1>Test Bar</h1>}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
