import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    position: 'fixed',
    width: '100%',
    zIndex: 999
  },
  inner: {
    paddingTop: 28
  }
});


class Layout extends React.Component {

  render() {

    const { children, classes } = this.props;

    return (
      <React.Fragment>
        <header className={classes.footer}>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            CnBeta新闻
          </Typography>
        </header>
        <Container className={classes.inner}>
          {children}
        </Container>
      </React.Fragment>
    )
  }
}

Layout.defaultProps = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
};

export default withStyles(styles)(Layout);