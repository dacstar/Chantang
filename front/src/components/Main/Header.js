import React from 'react';

import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
  linkBtn: {
    color: 'white',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/" className={classes.linkBtn}>
            <HomeIcon className={classes.homeButton} />
          </Link>
          <Typography variant="h6" className={classes.title}>
            대한민국 생태관광 정보
          </Typography>
          <Button href="/admin" className={classes.linkBtn}>관리자</Button>
          <Button className={classes.linkBtn}>로그인</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
