import React, {Component} from 'react';
import Die from './Die';
import './App.css';

function App() {
  return (
    <div className="App">
      <Die face="one" />
      <Die face="two" />
      <Die face="three" />
      <Die face="four" />
    </div>
  );
}

export default App;
