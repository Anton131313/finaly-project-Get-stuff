import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from 'axios';
import Footer from './components/UI/Footer';
import Header from './components/UI/Header';
import Login from './components/Auth/Login';
import MainPage from './components/MainPage/MainPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import SignUp from './components/Auth/SignUp';
import BiddingForm from './components/Bidding/BiddingForm';
import LogOut from './components/Auth/LogOut';
import AuctionCard from './components/Auction/AuctionCard';
import MyBiddings from './components/Bidding/MyBiddings';
import MyAuctions from './components/Auction/MyAuctions';

axios.defaults.withCredentials = true;

function App() {
  useEffect(() => {
    console.log('123456778');
  }, []);

  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/addBidding" element={<BiddingForm />} />
        <Route path="/bidding/:id" element={<AuctionCard />} />
        <Route path="/myProducts" element={<MyBiddings />} />
        <Route path="/myAuctions" element={<MyAuctions />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
