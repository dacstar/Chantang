import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Admin from './routes/Admin';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import Place from './routes/Detail';
import { board, users } from './__fixture__/sample';

const App = () => {
  const [boardData, setBoardData] = useState(board);
  const [userData, setUserData] = useState(users);
  // const [boardData, setBoardData] = useState(null);
  // const [userData, setUserData] = useState(null);
  // const [graphData, setGraph] = useState(1);
  const graphData = 1;

  // const getBoardData = () => axios.get('/boards');
  // const getUserData = () => axios.get('/members');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const boards = await getBoardData();
  //     const users = await getUserData();

  //     setBoardData(boards.data.items);
  //     setUserData(users.data.items);
  //   };

  //   fetchData();
  // }, []);

  const HomeComponent = (props) => (
    <Home
      boardData={boardData}
      {...props}
    />
  );

  const AdminComponent = (props) => (
    <Admin
      boardData={boardData}
      userData={userData}
      graphData={graphData}
      {...props}
    />
  );

  return (
    <BrowserRouter>
      <Route path="/" exact component={HomeComponent} />
      <Route path="/admin" component={AdminComponent} />
      <Route path="/place/:id" component={Place} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </BrowserRouter>
  );
};

export default App;
