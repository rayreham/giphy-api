import React from 'react';

export default function Gif(props) {
  return (
    <li className="giphy">
      <img
      //returns the retrieved respective json url to display per list object
        src={props.url} 
        alt={props.title}
      />
    </li>
  );
}