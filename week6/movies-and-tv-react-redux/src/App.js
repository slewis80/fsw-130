import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from "./Navbar";
import Movies from './Movies';
import Home from './Home';
import TVShows from './TVShows';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Movies" component={Movies}/>
            <Route path="/TVShows" component={TVShows}/>
        </Switch>
      </div>
  );
}

export default App;
