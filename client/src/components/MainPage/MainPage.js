import React from 'react';
import CarouselPage from './CarouselPage';
import BiddingList from '../Bidding/BiddingList';
import Banner from './Banner';

function MainPage() {
  return (
    <div className="content">
      <center>
        <Banner />
        <CarouselPage />
        <BiddingList />
      </center>
    </div>
  );
}

export default MainPage;
