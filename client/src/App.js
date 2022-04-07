import { Routes,Route } from "react-router-dom";
import Footer from "./components/MainPage/Footer";
import Header from "./components/MainPage/Header";
import Login from "./components/MainPage/Login";
import MainPage from "./components/MainPage/MainPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import SignUp from "./components/MainPage/SignUp";


function App() {
  return (
    <>
    <Header />

    <Routes>
    <Route path='/' element={<MainPage />} />
    <Route path='/signup' element={<SignUp />} />
    <Route path='/login' element={<Login />} />
    <Route path='/profile' element={<ProfilePage />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
