import React from 'react';

import Header from '../components/Main/Header';
import BoardItem from '../components/Detail/PlaceItem';

const Place = ({ location }) => {
  const { item: place } = location.state;
  return (
    <div>
      <Header />
      <BoardItem place={place} />
      {/* <Comment /> */}
    </div>
  );
};

export default Place;
