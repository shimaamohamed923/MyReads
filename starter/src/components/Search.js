import { useState } from "react";
import { Link } from "react-router-dom";
import ShelfItems from "./ShelfBooks";
import * as BooksAPI from "../BooksAPI";
const Search = ({ books, updateShelf }) => {
  const [query, setQuery] = useState([]);
  const updateQuery = (query) => {
    const searchBooks = async () => {
      const res = await BooksAPI.search(query.trim().replace(".", ""));
      res.forEach((book) => {
        const currentBook = books.find((b) => b.id === book.id);
        book.shelf = currentBook === undefined ? "none" : currentBook.shelf;
      });
      //   result.filter((book) =>
      //     book.title.toLowerCase().includes(query.toLowerCase())
      //   );
      setQuery(res);
    };
    searchBooks();
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          <ShelfItems books={query} updateShelf={updateShelf} />
        </ol>
      </div>
    </div>
  );
};
export default Search;
