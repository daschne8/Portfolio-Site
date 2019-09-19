import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav_bar'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import Home from './containers/home'
import Contact from './containers/contact'
import Projects from './containers/projects'




function App() {
  return (
    <div className="App">
      <header>Site currently under construction.</header>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/index.html" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
