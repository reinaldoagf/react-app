import React from 'react';
import logo from './logo.svg';
import './App.css';
const user={
  firstName:'Oriana',
  lastName:'Gonzalez'
}
function getFullName(user) {
  return `${user.firstName} ${user.lastName}`;
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola {getFullName(user)}</p>
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
