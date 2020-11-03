import React from 'react';
import Header from '../components/Main/Header';
import SearchBar from '../components/Main/SearchBar';
import BoardList from '../components/Main/BoardList';

const Home = ({ board }) => (
  <section>
    <Header />
    <SearchBar />
    <BoardList board={board} />
  </section>
);

export default Home;
