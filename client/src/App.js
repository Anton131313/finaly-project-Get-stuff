import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Footer from './components/UI/Footer';
import Header from './components/UI/Header';
import Login from './components/Auth/Login';
import MainPage from './components/MainPage/MainPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import SignUp from './components/Auth/SignUp';
import BiddingForm from './components/Bidding/BiddingForm';
import LogOut from './components/Auth/LogOut';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/addBidding" element={<BiddingForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
