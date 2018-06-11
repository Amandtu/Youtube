import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  };
  render() {
    return (
      <form
        className="search-bar"
        onSubmit={e => {
          e.preventDefault();
          this.props.SearchTermChange(this.state.term);
        }}
      >
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
        />
        <button>Search</button>
      </form>
    );
  }
}

export default SearchBar;
