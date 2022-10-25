import { Link } from "react-router-dom";
import ShelfItems from "./ShelfBooks";
const Books = ({ books, shelfs, updateShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelfs.map((shelf) => (
            <div className="bookshelf" key={shelf}>
              <h2 className="bookshelf-title">
                {(() => {
                  if (shelf === "currentlyReading") {
                    return "Currently Reading";
                  } else if (shelf === "wantToRead") {
                    return "Want To Read";
                  } else {
                    return "Read";
                  }
                })()}
              </h2>
              <div className="bookshelf-books">
                <ShelfItems
                  books={books.filter((book) => book.shelf === shelf)}
                  updateShelf={updateShelf}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link className="close-search" to="/search">
          Add a book
        </Link>
      </div>
    </div>
  );
};
export default Books;
