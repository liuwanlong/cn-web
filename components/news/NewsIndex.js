import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react'
import { withStyles } from '@material-ui/styles';
import Link from 'next/link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing()
    },
    list: {
      backgroundColor: theme.palette.background.paper
    },
    listItem: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    listItemAvatar: {
      borderRadius: 0,
      width: '3.75rem',
      height: '3.75rem',
      marginRight: '0.5rem'
    },
  })
;


@inject("homeStore")
@observer
class NewsIndex extends React.Component {

  render() {
    const { classes, homeStore } = this.props;
    const { news } = homeStore;

    return (
      <div className={classes.root}>
        <List className={classes.list}>
          {
            news.map(({ thumb, title, inputtime, sid }) => (
              <Link href={`/articles/${sid}`} key={sid}>
                <ListItem divider className={classes.listItem}>
                  <ListItemAvatar>
                    <Avatar className={classes.listItemAvatar} src={`https://api.battleangel.online${thumb}`}/>
                  </ListItemAvatar>
                  <ListItemText
                    primary={<div dangerouslySetInnerHTML={{ __html: title }}/>}
                    secondary={inputtime}
                  />
                </ListItem>
              </Link>
            ))
          }
        </List>
      </div>
    )
  }
}

NewsIndex.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsIndex)