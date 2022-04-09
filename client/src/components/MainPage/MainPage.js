import React from 'react';
import BiddingList from '../Bidding/BiddingList';
import Banner from './Banner';

function MainPage() {
  return (
    <div className="content">
      <center>
        <Banner />
        <BiddingList />
      </center>
    </div>
  );
}

export default MainPage;
