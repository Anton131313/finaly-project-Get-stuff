import React from 'react';
import { useSelector } from 'react-redux';
import CarouselPage from './CarouselPage';
import BiddingList from '../Bidding/BiddingList';
import Search from '../Search/Search';

function MainPage() {
  const search = useSelector((store) => store.search);

  return (
    <>
      {!search.length && (
      <div className="container" style={{ height: '100vh' }}>
        <center>
          <CarouselPage />
        </center>
        <BiddingList />
      </div>
      )}
      {search.length && (
      <div className="container" style={{ height: '100vh' }}>
        <center>
          <Search />
        </center>
      </div>
      )}
    </>
  );
}

export default MainPage;
