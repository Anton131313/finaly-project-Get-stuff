import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Footer from './components/MainPage/Footer';
import Header from './components/MainPage/Header';
import Login from './components/MainPage/Login';
import MainPage from './components/MainPage/MainPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import SignUp from './components/MainPage/SignUp';
import BiddingForm from './components/Bidding/BiddingForm';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/addBidding" element={<BiddingForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
