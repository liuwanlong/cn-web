import React from 'react';
import { inject, observer } from 'mobx-react'
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grey from '@material-ui/core/colors/grey';



const styles = theme => {

  let paddingUnit = theme.spacing();

  return {
    padding: {
      paddingLeft: paddingUnit,
      paddingRight: paddingUnit,
    },
    root: {
      padding: '1rem 0'
    },
    header: {
      extend: 'padding',
      marginBottom: '1rem',
    },
    content: {
      extend: 'padding',
      textAlign: 'justify',
      '& .article-summary': {
        display: 'flex',
        backgroundColor: Grey.A100,
        padding: '0.5rem',
        textJustify: 'justify'
      },
      '& .article-summary .topic': {
        width: '15rem',
        marginRight: '0.29rem'
      },
      '& .article-topic': {
        display: 'none',

      },
      '& blockquote': {
        backgroundColor: Grey["300"],
        margin: '0',
        padding: '0.5rem 2rem',
      },
      '& a': {
        color: '#000',
      },
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
      <div className={classes.root}>
        <Typography className={classes.header} variant="h6" dangerouslySetInnerHTML={{ __html: detail.title }}/>
        <div className={classes.content} dangerouslySetInnerHTML={{ __html: `${detail.content}` }}/>
      </div>

    )
  }
}

NewsDetail.defaultProps = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewsDetail)