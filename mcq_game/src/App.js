import React from 'react';
import Quiz from './Components/Quiz';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MCQ Game</h1>
        <Quiz />
      </header>
    </div>
  );
};

export default App;
