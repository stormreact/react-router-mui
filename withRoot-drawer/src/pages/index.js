import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../withRoot';
import AppDrawer from './../components/AppDrawer'

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

  render() {
    const { classes } = this.props;

    console.log(this.context.activePage);

    return (
      <div className={classes.root}>
        <Typography type="display1" gutterBottom>
          Material-UI
        </Typography>
        <Typography type="subheading" gutterBottom>
          example project
        </Typography>
        <Button raised color="accent" onClick={this.handleClick}>
          Super Secret Password
        </Button>
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
