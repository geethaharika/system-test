import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";
import AddUpdateToDoForm from './pages/add-update-to-do-form';
import ToDoList from './pages/list-to-do';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Router>
        <Switch>
          <Route exact path='/' component={ToDoList} />
          <Route exact path='/insert' component={AddUpdateToDoForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
