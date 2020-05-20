import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Redirect, Route } from 'react-router-dom'

import Portfolio from './components/portfolio'
import Contact from './components/contact'
import TopBar from './components/top-bar';


function App() {
  return (
    <div className="App">
      <TopBar />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/contact' component={Contact} />
    </div>
  );
}

export default App;
