import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../withRoot';
import AppWrapper from './../components/AppWrapper'
import { Provider } from 'react-redux';
import initRedux from './../redux/initRedux';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  drawer: {
    [theme.breakpoints.up('lg')]: {
      width: 250,
    },
  },
});

class Index extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redux = initRedux(this.props.reduxServerState || {});
  }

  render() {
    const { classes } = this.props;

    console.log(this.context.activePage);

    return (
      <div className={classes.root}>
      <Provider store={this.redux}>
      <AppWrapper>
        <Typography type="display1" gutterBottom>
          Material-UI
        </Typography>
        <Typography type="subheading" gutterBottom>
          example appframe project
        </Typography>
        <Button raised color="accent" onClick={this.handleClick}>
          Super Secret Password
        </Button>
      </AppWrapper>
      </Provider>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

Index.contextTypes = {
  activePage: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
