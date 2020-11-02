import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Admin/Header';
import Navbar from '../components/Admin/Navbar';
import ItemList from '../components/Admin/ItemList';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

const Admin = ({ board, users, graph }) => {
  const classes = useStyles();

  const defalutController = { board: true, user: false, graph: false };
  const [navbarController, setNavbarController] = useState(defalutController);

  return (
    <section className={classes.root}>
      <Header />
      <Navbar navbarController={navbarController} setNavbarController={setNavbarController} />
      <ItemList board={board} users={users} graph={graph} navbarController={navbarController} />
    </section>
  );
};

export default Admin;
