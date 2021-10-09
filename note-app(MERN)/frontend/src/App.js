import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateNote from './components/CreateNote';
import Notes from './components/Notes';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact>
        <Home/>
      </Route>

      <Route path="/notes">
        <Notes/>
      </Route>  

      <Route path="/create">
        <CreateNote/>
      </Route>
    </Router>
  );
}

export default App;
