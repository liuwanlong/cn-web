import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(3),
    textAlign: 'center'
  },
  chips: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1)
  },
  pager: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(3)
  }
}));

export default function About() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4">
        前端
      </Typography>
      <div className={classes.chips}>
        <Chip
          color="secondary"
          avatar={<Avatar>Next</Avatar>}
          label="Next"
          className={classes.chip}
        />
        <Chip
          color="secondary"
          avatar={<Avatar>React</Avatar>}
          label="React"
          className={classes.chip}
        />
        <Chip
          color="secondary"
          avatar={<Avatar>MU</Avatar>}
          label="Material UI"
          className={classes.chip}
        />
        <Chip
          color="secondary"
          avatar={<Avatar>Mobx</Avatar>}
          label="Mobx"
          className={classes.chip}
        />
      </div>

      <Typography variant="h4">
        后端
      </Typography>
      <div className={classes.chips}>
        <Chip
          color="secondary"
          avatar={<Avatar>Node</Avatar>}
          label="Node"
          className={classes.chip}
        />
        <Chip
          color="secondary"
          avatar={<Avatar>Express</Avatar>}
          label="Express"
          className={classes.chip}
        />
        <Chip
          color="secondary"
          avatar={<Avatar>Mysql</Avatar>}
          label="Mysql"
          className={classes.chip}
        />
        <Chip
          color="secondary"
          avatar={<Avatar>cheerio</Avatar>}
          label="cheerio"
          className={classes.chip}
        />
        <Chip
          color="secondary"
          avatar={<Avatar>http</Avatar>}
          label="http"
          className={classes.chip}
        />
        <Chip
          color="secondary"
          avatar={<Avatar>https</Avatar>}
          label="https"
          className={classes.chip}
        />
      </div>

      <Paper className={classes.pager}>
        <Typography component="p">
          本项目旨在code练习，MaterialDesign风格，项目正逐步根据我个人想法完善中，无商业行为及想法。
          <br/>
          新闻内容爬取自
          <Link href={'https://www.cnbeta.com/'} underline="always" target="_blank">
            cnBeta官网
          </Link>。
        </Typography>

      </Paper>


    </div>
  );
}