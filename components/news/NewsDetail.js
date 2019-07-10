import React from 'react';
import { inject, observer } from 'mobx-react'
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



const styles = theme => {

  let paddingUnit = theme.spacing();

  return {
    padding: {
      paddingLeft: paddingUnit,
      paddingRight: paddingUnit,
    },
    root: {
      padding: paddingUnit,
      margin: '0.5rem 0',
      backgroundColor: theme.palette.background.paper,
    },
    header: {
      extend: 'padding',
    },
    content: {
      extend: 'padding',
      textAlign: 'justify',
      '& img': {
        display: 'block',
        width: 'auto',
        maxWidth: '100%',
        margin: '0 auto'
      },
      '& iframe': {
        width: '100%',
        height: '11rem'
      }
    }
  }
};


@inject("homeStore")
@observer
class NewsDetail extends React.Component {

  render() {

    const { homeStore, classes } = this.props;
    const { detail } = homeStore;

    return (
      <Paper className={classes.root}>
        <Typography className={classes.header} variant="h5" component="h3"
                    dangerouslySetInnerHTML={{ __html: detail.title }}/>
        <div className={classes.content} dangerouslySetInnerHTML={{ __html: `${detail.content}` }}/>

      </Paper>
    )
  }
}

NewsDetail.defaultProps = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewsDetail)