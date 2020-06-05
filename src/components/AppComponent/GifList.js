import React from 'react';
import Gif from './Gif';

export default function GifList(props) {

  let gifs;
  if (props.data.length > 0) {
    gifs = props.data.map(gif =>
      //populates Gif states with retrieved data 
      <Gif
        key={gif.id}
        url={gif.images.fixed_height_downsampled.url}
        title={gif.title}
      />
    );
  } else {
    console.log("Gif not found")
  }

  return (
    <ul className="gif-list">
      {gifs}
    </ul>
  );
}