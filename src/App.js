import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';




const sampleArray = [
  { id: 1, name: 'aaa', date: 19920527 },
  { id: 2, name: 'bbb', date: 19920528 },
  { id: 3, name: 'ccc', date: 19920529 },
  { id: 4, name: 'ddd', date: 19920531 },
  { id: 5, name: 'eee', date: 19920501 }
];




export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ComponentA} />
        <Route exact path="/componentb" component={ComponentB} />
        <Route exact path="/componentc" component={ComponentC} />
      </Switch>
    </Router>
  );

};