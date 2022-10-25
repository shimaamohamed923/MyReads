import OneBook from "./OneBook";
const ShelfItems = ({ books, updateShelf }) => {
  return (
    <ol className="books-grid">
      {books.map((b) => (
        <li key={b.id}>
          <OneBook book={b} updateShelf={updateShelf} />
        </li>
      ))}
    </ol>
  );
};
export default ShelfItems;
