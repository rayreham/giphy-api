import React from 'react';
import SearchForm from './SearchForm';

export default function SearchFieldComponent(props) {
  return (
    <header className="main-header">
      <div className="inner">
        <h1 className="main-title">Gif Api Search</h1>
        <SearchForm onSearch={props.onSearch} />
      </div>
    </header>
  );
}