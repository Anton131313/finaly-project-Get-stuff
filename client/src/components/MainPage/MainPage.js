import React from 'react';
import CarouselPage from './CarouselPage';
import BiddingList from '../Bidding/BiddingList';

function MainPage() {
  return (
    <div className="content">
      <center>
        <CarouselPage />
        <BiddingList />
      </center>
    </div>
  );
}

export default MainPage;
