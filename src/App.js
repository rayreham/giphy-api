import React, { Component } from 'react';
import axios from 'axios';
import SearchFieldComponent from './components/SearchFieldComponent';
import AppComponent from './components/AppComponent';

export default class App extends Component {
//gif states as per api
  state = {
    gifs: [],
    loading: true
  };

  componentDidMount() {
    this.performSearch();
    
  }

  //take in word and queries it in api
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
        <SearchFieldComponent onSearch={this.performSearch} loading={this.state.loading}/>
        <AppComponent data={this.state.gifs} />
      </div>
    );
  }
}