import React from 'react';

import Header from '../components/Main/Header';
import SearchBar from '../components/Main/SearchBar';
import BoardList from '../components/Main/BoardList';

const Home = ({ boardData }) => (
  <div>
    <Header />
    <SearchBar />
    <BoardList boardData={boardData} />
  </div>
);

export default Home;
