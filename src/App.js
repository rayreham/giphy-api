import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {

  state = {
    gifs: [],
    loading: true
  };

  componentDidMount() {
    this.performSearch();
    
  }

  performSearch = (word = '') => {
    const API_KEY = process.env.REACT_APP_GIF_API_KEY;
    const url =  ` http://api.giphy.com/v1/gifs/search?q=${word}&api_key=`;
    axios.get(url, { params: { key: API_KEY } })
      .then(response => {
        this.setState({
          gifs: response.data.data,
          loading: false
        });
      })
      
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}