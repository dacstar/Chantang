import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  homeButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    marginLeft: theme.spacing(1),
    // color: theme.palette
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <HomeIcon className={classes.homeButton} />
          <Typography variant="h6" className={classes.title}>
            대한민국 생태관광 정보
          </Typography>
          <Link href="/admin" color="inherit" className={classes.link}>관리자</Link>
          <Link to="/login" color="inherit" className={classes.link}>로그인</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
