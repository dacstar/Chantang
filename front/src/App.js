import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { BrowserRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Admin from './routes/Admin';

import { board, users } from './__fixture__/sample';

const App = () => {
  // const [board, setBoard] = useState(null);
  // const [users, setUser] = useState(null);
  const [graph, setGraph] = useState(1);

  // const getBoardData = () => axios.get('/boards');
  // const getUserData = () => axios.get('/users');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const boardData = await getBoardData();
  //     const userData = await getUserData();

  //     setBoard(boardData.data.items);
  //     setUser(userData.data.items);
  //   };

  //   fetchData();
  // }, []);

  const HomeComponent = (props) => (
    <Home
      board={board}
      {...props}
    />
  );

  const AdminComponent = (props) => (
    <Admin
      board={board}
      users={users}
      graph={graph}
      {...props}
    />
  );

  return (
    <BrowserRouter>
      <Route path="/" exact component={HomeComponent} />
      <Route path="/admin" component={AdminComponent} />
    </BrowserRouter>
  );
};

export default App;
