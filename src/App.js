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
          Edit here in app.js <code>src/App.js</code> and save again to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </BrowserRouter> 
  );
}

export default App;
