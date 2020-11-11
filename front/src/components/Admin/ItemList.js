import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import AddIcon from '@material-ui/icons/Add';
import ItemCardComponent from './CardComponent/ItemCardComponent';
import UserCardComponent from './CardComponent/UserCardComponent';
import CreateItemDialog from './Dialog/CreateItemDialog';

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
  boardData, userData, graphData, navbarController,
}) => {
  const classes = useStyles();
  const { board: isBoard, user: isUser, graph: isGraph } = navbarController;
  const [openDialog, setOpenDialog] = useState(false);

  const currentCardComponent = () => {
    if (isBoard) {
      return boardData
        ? boardData.map((item) => <ItemCardComponent key={item.id} item={item} />)
        : <div>로딩중..</div>;
    }

    if (isUser) {
      return userData
        ? userData.map((item) => <UserCardComponent key={item.id} item={item} />)
        : <div>로딩중..</div>;
    }

    if (isGraph && graphData) {
      return (<div>준비중</div>);
    }

    return (<div>There is no information.</div>);
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  return (
    <div className={classes.content}>
      <Toolbar />
      <Grid container spacing={2}>
        {currentCardComponent()}
      </Grid>
      <Fab color="secondary" aria-label="add" className={classes.fab}>
        <AddIcon onClick={handleDialogOpen} />
        <CreateItemDialog open={openDialog} setOpen={setOpenDialog} />
      </Fab>
    </div>
  );
};

export default ItemList;
