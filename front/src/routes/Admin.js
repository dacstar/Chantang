import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Admin/Header';
import Navbar from '../components/Admin/Navbar';
import ItemList from '../components/Admin/ItemList';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

const Admin = ({ boardData, userData, graphData }) => {
  const classes = useStyles();

  const defalutController = { board: true, user: false, graph: false };
  const [navbarController, setNavbarController] = useState(defalutController);

  return (
    <div className={classes.root}>
      <Header />
      <Navbar
        navbarController={navbarController}
        setNavbarController={setNavbarController}
      />
      <ItemList
        boardData={boardData}
        userData={userData}
        graphData={graphData}
        navbarController={navbarController}
      />
    </div>
  );
};

export default Admin;
