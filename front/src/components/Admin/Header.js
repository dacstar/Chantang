import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HttpsIcon from '@material-ui/icons/Https';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: theme.zIndex.drawer + 1,
  },
  adminButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="fixed" color="secondary">
      <Toolbar>
        <Link href="/">
          <HttpsIcon color="inherit" className={classes.adminButton} />
        </Link>
        <Typography variant="h6" className={classes.title}>
          관리자 페이지
        </Typography>
        <Button color="inherit">로그아웃</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
