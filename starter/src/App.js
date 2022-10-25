import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Books from "./components/Books";
import Search from "./components/Search";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);
  const getBooks = async () => {
    const res = await BooksAPI.getAll();
    setBooks(res);
  };
  const updateShelf = async (book, shelf) => {
    const res = await BooksAPI.update(book, shelf);
    getBooks();
  };
  let allshelfs = [];
  books.forEach((book) => {
    const bookShelf = book.shelf;
    allshelfs.push(bookShelf);
  });
  let shelfs = allshelfs.filter((element, index) => {
    return allshelfs.indexOf(element) === index;
  });
  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Books books={books} shelfs={shelfs} updateShelf={updateShelf} />
          }
        />
        <Route
          path="/search"
          element={<Search books={books} updateShelf={updateShelf} />}
        />
      </Routes>
    </div>
  );
}
export default App;
