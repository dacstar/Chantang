import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import {
  List, ListItem, ListItemIcon, ListItemText, Toolbar,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';

import PanoramaIcon from '@material-ui/icons/Panorama';
import PeopleIcon from '@material-ui/icons/People';
import EqualizerIcon from '@material-ui/icons/Equalizer';

const useStyles = makeStyles(() => ({
  drawer: {
    width: 120,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 120,
  },
  item: {
    paddingLeft: 12,
  },
  iconBtn: {
    minWidth: 28,
  },
}));

const Navbar = ({ setNavbarController }) => {
  const classes = useStyles();

  const handleClick = (e) => {
    const componentName = e.currentTarget.value;

    if (componentName === 'board') {
      setNavbarController({ board: true, user: false, graph: false });
    } else if (componentName === 'user') {
      setNavbarController({ board: false, user: true, graph: false });
    } else if (componentName === 'graph') {
      setNavbarController({ board: false, user: false, graph: true });
    } else {
      console.warn('Wrong Button Value.');
    }
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <List>
        <ListItem className={classes.item}>
          <Button size="small" value="board" onClick={handleClick}>
            <ListItemIcon className={classes.iconBtn}>
              <PanoramaIcon />
            </ListItemIcon>
            <ListItemText>Board</ListItemText>
          </Button>
        </ListItem>
        <ListItem className={classes.item}>
          <Button size="small" value="user" onClick={handleClick}>
            <ListItemIcon className={classes.iconBtn}>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText>User</ListItemText>
          </Button>
        </ListItem>
        <ListItem className={classes.item}>
          <Button size="small" value="graph" onClick={handleClick}>
            <ListItemIcon className={classes.iconBtn}>
              <EqualizerIcon />
            </ListItemIcon>
            <ListItemText>Graph</ListItemText>
          </Button>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Navbar;
