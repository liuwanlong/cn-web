import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';

import MenuIcon from '@material-ui/icons/Menu';
import WebIcon from '@material-ui/icons/Web';
import ShareIcon from '@material-ui/icons/Share';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import InfoIcon from '@material-ui/icons/Info';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
  },
}));

export default function Layout(props) {

  const { children } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerToggle() {
    setOpen(!open);
  }

  const drawer = (
    <div>
      <div className={classes.toolbar}/>

      <Divider/>

      <List>

        <ListItem button>
          <ListItemIcon>
            <ColorLensIcon/>
          </ListItemIcon>
          <ListItemText>
            <Link color="inherit" href={'/setting'} underline="none">
              主题设置
            </Link>
          </ListItemText>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <ShareIcon/>
          </ListItemIcon>
          <ListItemText>
            <Link color="inherit" href={'https://github.com/liuwanlong/'} underline="none" target="_blank">
              GitHub
            </Link>
          </ListItemText>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <WebIcon/>
          </ListItemIcon>
          <ListItemText>
            <Link color="inherit" href={'https://battleangel.online'} underline="none" target="_blank">
              我的博客
            </Link>
          </ListItemText>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <InfoIcon/>
          </ListItemIcon>
          <ListItemText>
            <Link color="inherit" href={'/about'} underline="none">
              关于
            </Link>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>

      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" noWrap>
            <Link color="inherit" href={'/'} underline="none">
              CnBeta新闻
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={open}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>

        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>


      <Container className={classes.content}>
        <div className={classes.toolbar}/>
        {children}
      </Container>

    </div>
  );
}

Layout.defaultProps = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
};