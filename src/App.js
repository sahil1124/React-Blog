import React from 'react';

import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Contact from './containers/ContactUs'
import Post from './containers/Post'


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Hero />
      <Route path="/" exact  component={Home} />
      <Route path="/contact"exact  component={Contact} />
      <Route path="/Post/:postId"exact  component={Post} />
    </div>
    </Router>
  );
}

export default App;
