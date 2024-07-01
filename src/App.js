import logo from './logo.svg';
import './App.css';
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Staybar from './components/staybar';


function App() {
  return (
    
  <BrowserRouter>
    <Header />
    <Staybar />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Contact">
          CHEF JAKE WILLIAMS :: NEW SITE COMING SOON!!
        </div>
        <div className="">
                <p>chefjakescatering@gmail.com</p>
                <p>586-360-8404 </p>
                <p></p>
        </div>
      </header>
    </div>
{/* <Switch> */}
        {/* <Route exact path={["/portfolio/", "/portfolio/about"]}>
    <About />
        </Route> 
        <Route exact path={["/portfolio/portfolio"]}>
    <Portfolio />
         </Route>
         <Route exact path={["/portfolio/contact"]}>
    <Contact />
         </Route>
         <Route>
    <Error/>
        </Route>      */}
{/* </Switch>               */}
    </BrowserRouter> 
  );
}

export default App;
