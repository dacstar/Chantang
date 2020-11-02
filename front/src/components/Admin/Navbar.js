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

const Navbar = () => {
  const classes = useStyles();

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
          <Button size="small">
            <ListItemIcon className={classes.iconBtn}>
              <PanoramaIcon />
            </ListItemIcon>
            <ListItemText>Board</ListItemText>
          </Button>
        </ListItem>
        <ListItem className={classes.item}>
          <Button size="small">
            <ListItemIcon className={classes.iconBtn}>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText>User</ListItemText>
          </Button>
        </ListItem>
        <ListItem className={classes.item}>
          <Button size="small">
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
