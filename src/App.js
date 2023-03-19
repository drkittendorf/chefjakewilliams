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
        <p className="Contact">
          CHEF JAKE WILLIAMS :: NEW SITE COMING SOON
        </p>
        <p className="Comingsoon">
      
<ul>

<ul>        </ul>
<ul>chefjakescatering@gmail.com</ul>

<ul>586-360-8404 </ul>
<ul>Serving the Greater Metropolitan Detroit Area</ul>
</ul>

        </p>
      </header>
    </div>
    </BrowserRouter> 
  );
}

export default App;
