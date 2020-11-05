import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://quarkify.net/wp-content/uploads/2020/05/quarkify_logo.png" className="App-logo" alt="logo" />
        <p>
            Hello World.
        </p>
        <p>
            This is my react app deployed to Heroku
        </p>
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
