import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import * as firebase from 'firebase';


var config = {
  apiKey: "AIzaSyDqT-QUqiy-ezZzKU2dNtcFfpssXVZL9D8",
  authDomain: "witz-2fc59.firebaseapp.com",
  databaseURL: "https://witz-2fc59.firebaseio.com",
  projectId: "witz-2fc59",
  storageBucket: "witz-2fc59.appspot.com",
  messagingSenderId: "433689412056"
};

firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
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
        </header>
      </div>
    );
  }
}

export default App;
