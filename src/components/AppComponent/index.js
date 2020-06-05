import React from 'react';
import GifList from './GifList';

export default function AppComponent(props) {
  return (
    <main className="app-component">
      {
        (props.loading) ? <p>Loading...</p> : <GifList data={props.data} />
      }
    </main>
  );
}