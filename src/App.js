import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import {NavigationBar} from "./components/navbar";
import Main from './Main'
import {Provider} from "react-redux";


function App() {
  return (
    <div className="App">
        <NavigationBar/>
        <Main/>
    </div>
  );
}

export default App;
