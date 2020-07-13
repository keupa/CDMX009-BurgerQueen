import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewOrder from './pages/NewOrder'
import IncomingOrder from './pages/IncomingOrder'
import BMenu from './components/Navbar/BMenu';
import Navbar from './components/Navbar';

// import breakfastData from '../src/data/breakfastData'

function App() {
  return (
    <div className = "App">
      <Navbar />
      <BMenu />
      <Router>
        <Switch>
         <Route exact path = "/" />
         <Route exact path = "/new-order" component = {NewOrder}/>
         <Route exact path = "/incoming" component = {IncomingOrder}/>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
