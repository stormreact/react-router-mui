import React, { Component } from 'react';
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';

import Typography from 'material-ui/Typography';
import classNames from 'classnames';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

const styles = () => ({
  pageBackground: {
    background: {

      repeat: 'no-repeat',
      size: 'cover',
      position: 'center'
    },
    height: '100% !important'
  },
  textCenter: {
    textAlign: 'center'
  },
  card: {
    maxWidth: 600,
    margin: '0 auto'
  },
  paddingTop: {
    paddingTop: 100
  },
  header: {
    height: 150,
    padding: 20
  },
  logo: {
    animation: 'logoSpin infinite 20s linear',
    height: 80
  },
  '@keyframes logoSpin': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' }
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classNames(classes.pageBackground, classes.paddingTop)}>
          <Card className={classes.card}>
            <CardContent>
              <div className={classes.textCenter}>
                <header className={classes.header}>

                  <Typography type="headline">Welcome to React</Typography>
                </header>
                <Typography type="body2">
                  Hb Oregon winters are dark and cold...
                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
