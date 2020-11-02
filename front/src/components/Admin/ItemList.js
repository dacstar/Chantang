import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';

import AddIcon from '@material-ui/icons/Add';

import ItemCardComponent from './ItemCardComponent';
import UserCardComponent from './UserCardComponent';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fab: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardButtons: {
    display: 'flex',
    flexDirection: 'column',
  },
  themeType: {
    fontSize: 12,
  },
}));

const ItemList = ({
  board, users, graph, navbarController,
}) => {
  const classes = useStyles();
  const { board: isBoard, user: isUser, graph: isGraph } = navbarController;

  const currentCardComponent = () => {
    if (isBoard && board) {
      return board.map((item) => <ItemCardComponent key={item.id} item={item} />);
    }

    if (isUser && users) {
      return users.map((item) => <UserCardComponent key={item.id} item={item} />);
    }

    if (isGraph && graph) {
      return (<div>준비중..</div>);
    }

    return (<div>There is no information.</div>);
  };

  return (
    <div className={classes.content}>
      <Toolbar />
      <Grid container spacing={2}>
        {currentCardComponent()}
      </Grid>
      <Fab color="primary" aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
    </div>
  );
};

export default ItemList;
