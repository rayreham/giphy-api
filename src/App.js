import React, { Component } from "react";
import './App.css';
import Gif from "./components/Gif";


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Gif word = "hello" /> 
      </div>
    );
  }
}

export default App;