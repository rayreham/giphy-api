import React from 'react'

export default function SearchForm(props) {

  const searchForm = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();
    props.onSearch(searchForm.current.value);
    e.currentTarget.reset();
  }

  return (
    
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        ref={searchForm}
        placeholder="look up gif..."
        />
      <button
        type="submit"
        id="submit"
        className="search-button"
      ><i className="material-icons icn-search">SEARCH</i>
      </button>
    </form>
  );
}