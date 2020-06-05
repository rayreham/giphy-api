import React, { Component } from "react";
import axios from "axios";

class Gif extends Component {
  constructor(props) {
    super(props);
    this.state = { giphy : null};
  }

  componentDidMount() {
    const word = this.props.word;
    const API_KEY = process.env.REACT_APP_GIF_API_KEY;
    //const url = ` http://api.giphy.com/v1/gifs/search?q=${word}&api_key=RmBODKyGWiL5T5HcYoe0Iuk6R08KLQ54`;

    const url = `https://api.giphy.com/v1/gifs/random?api_key=RmBODKyGWiL5T5HcYoe0Iuk6R08KLQ54&tag=${word}&rating=G`;

    axios
       .get(url, { params: { key: API_KEY } })
       .then((response) => {
         const data = response.data;
         console.log(data);

    const newGiphyObj = {
        word: data.word,
        imageUrl: data.url,
    };

    this.setState({ giphy: newGiphyObj });
    })
    .catch((err) => console.log(err));
    }

    render() {
        let display;
        if (!this.state.giphy) {
          display = <p>Loading...</p>;
        } else {
          display = (
            <>
              <img
                src={this.state.giphy.imageUrl}
                alt={this.state.giphy.name}
              />
              <ul>
                <li> <h1>{this.state.giphy.name}</h1></li>
              </ul>
            </>
          );
        }
    

    return <div className="giphy">{display};></div>
        
        
  }
}


export default Gif;