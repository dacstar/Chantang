import React from 'react';
import Header from '../components/Main/Header';
import SearchBar from '../components/Main/SearchBar';
import BoardList from '../components/Main/BoardList';

const Home = ({ boardData }) => (
  <section>
    <Header />
    <SearchBar />
    <BoardList boardData={boardData} />
  </section>
);

export default Home;
