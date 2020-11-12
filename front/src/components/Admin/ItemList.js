import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import ItemCardComponent from './CardComponent/ItemCardComponent';
import UserCardComponent from './CardComponent/UserCardComponent';
import CreateItemDialog from './Dialog/CreateItemDialog';
import CreateUserDialog from './Dialog/CreateUserDialog';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  floating: {
    border: 0,
    cursor: 'pointer',
    display: 'inline-flex',
    outline: 0,
    alignItems: 'center',
    userSelect: 'none',
    verticalAlign: 'middle',
    justifyContent: 'center',
    textDecoration: 'none',
    width: 50,
    height: 50,
    padding: 0,
    fontSize: '0.875rem',
    minWidth: 0,
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
    boxSizing: 'border-box',
    minHeight: 36,
    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 500,
    lineHeight: 1.75,
    borderRadius: '50%',
    letterSpacing: '0.02857em',
    textTransform: 'uppercase',
    textAlign: 'center',
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    backgroundColor: '#f50057',
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

  return (
    <div className={classes.content}>
      <Toolbar />
      <Grid container spacing={2}>
        {currentCardComponent()}
      </Grid>
      <div className={classes.floating}>
        {/* <CreateItemDialog /> */}
        <CreateUserDialog />
      </div>
    </div>
  );
};

export default ItemList;
