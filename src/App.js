import React, { useState } from 'react';
import './App.css';
import Card from './card';
import { useTable } from 'react-table';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';




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
      </Switch>
    </Router>
  );

};