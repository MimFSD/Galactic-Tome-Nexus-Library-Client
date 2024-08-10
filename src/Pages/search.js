import React, { useReducer } from "react";
import "../App.css";
import SearchBar from "material-ui-search-bar";
import axios from "axios";

const Search = () => {
  // Resolver
  const serachBooks = (value) => {
    axios
      .get("http://localhost:8080/book/search?title=" + value)
      .then((response) => {
        const type = "books_loaded";
        dispatch({ type: type, data: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        const type = "error";
        dispatch({ type: type });
      });
  };

  // Reducers
  const initialState = {
    books: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "books_loaded":
        const newState = Object.assign({}, state, { books: action.data });
        return newState;
      case "error":
        return Object.assign({}, state, { books: [] });
      default:
        return Object.assign({}, state, { books: [] });
    }
  };

  const getBookComponents = (books) => {
    if (books.length > 0) {
      return books.map((book) => <li>{book.title}</li>);
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="Display">
      <SearchBar
        onRequestSearch={(value) => {
          serachBooks(value);
        }}
        style={{
          margin: "0 auto",
          maxWidth: 800,
        }}
      />
      <ul>{getBookComponents(state.books)}</ul>
    </div>
  );
};

export default Search;
