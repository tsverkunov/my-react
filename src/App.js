import React from 'react';
import logo from './logo.svg';
import './App.sass';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';




const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
}


export default App;
