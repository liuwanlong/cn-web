import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react'
import { withStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Grey from '@material-ui/core/colors/grey';
import Zoom from '@material-ui/core/Zoom';
import CircularProgress from "@material-ui/core/CircularProgress";
import BackToTop from "../common/BackToTop";
import CompatibleDocument from '../../lib/utils/CompatibleDocument'


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
    color: Grey.A700,
    '&:visited': {
      color: Grey.A200
    }
  },
  listItemAvatar: {
    width: '3.75rem',
    height: '3.75rem',
    marginRight: '0.5rem'
  },
  progress: {
    margin: theme.spacing(2),
  },
});


@inject("homeStore")
@observer
class NewsIndex extends React.Component {

  state = {
    touchedBottom: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollLoadMore);
  };

  handleScrollLoadMore = () => {
    const { homeStore } = this.props;
    if (!homeStore.isLoading && CompatibleDocument.scrollHeight() - CompatibleDocument.clientHeight() - CompatibleDocument.scrollTop() <= 10
    ) {
      this.setState({ touchedBottom: true });
      homeStore.fetchMoreNews(() => {
        this.setState({ touchedBottom: false });
      });
    }
  }

  handleToTopFinished = () => {
    const { homeStore } = this.props;
    homeStore.fetchNewsList();
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollLoadMore);
  }

  render() {

    const { touchedBottom } = this.state;
    const { classes, homeStore } = this.props;
    const { news } = homeStore;

    return (
      <div className={classes.root}>
        <BackToTop finished={this.handleToTopFinished}/>
        <List className={classes.list}>
          {
            news.map(({ thumb, title, inputtime, sid }) =>
              <React.Fragment key={sid}>
                <ListItem component={'a'} href={`/articles/${sid}`} className={classes.listItem}>
                  <ListItemAvatar>
                    <Avatar className={classes.listItemAvatar} src={`https://api.battleangel.online${thumb}`}/>
                  </ListItemAvatar>
                  <ListItemText
                    primary={<div dangerouslySetInnerHTML={{ __html: title }}/>}
                    secondary={inputtime}
                  />
                </ListItem>
                <Divider variant="inset" component="li"/>
              </React.Fragment>
            )}
        </List>
        <Zoom in={touchedBottom}>
          <CircularProgress className={classes.progress}/>
        </Zoom>
      </div>
    )
  }
}

NewsIndex.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsIndex)