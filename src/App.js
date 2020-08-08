import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (//returnの中がjsx
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
        >
          Hello react
        </a>
      </header>
    </div>
  );
}

export default App;
