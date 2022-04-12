import React from 'react';
import CarouselPage from './CarouselPage';
import BiddingList from '../Bidding/BiddingList';

function MainPage() {
  return (
    <div className="container style={{ height: '100vh' }}">
      <center>
        <CarouselPage />
      </center>
      <BiddingList />
    </div>
  );
}

export default MainPage;
