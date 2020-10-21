import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>WELCOME TO REACT APP</h1>
        <h3>Your personal advisor to keep you motivated and calm amidst chaos</h3>
        <div className="card">
          <h2>Now is the time</h2>
          <button className="buton" >
            <span><h4>Unlock today's</h4></span>
          </button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
