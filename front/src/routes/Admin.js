import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Admin/Header';
import Navbar from '../components/Admin/Navbar';
import BoardList from '../components/Admin/BoardList';
import ItemList from '../components/Admin/ItemList';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

const Admin = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Header />
      <Navbar />
      <ItemList />
    </section>
  );
};

export default Admin;
