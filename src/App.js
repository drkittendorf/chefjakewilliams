import logo from './logo.svg';
import './App.css';
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
// import Navbar from './components/navbar';
// import Footer from './components/footer';

function App() {
  return (
    
  <BrowserRouter>
    <Header />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          CHEF JAKE WILLIAMS  NEW SITE IN PROGRESS
        </p>
      </header>
    </div>
    </BrowserRouter> 
  );
}

export default App;
