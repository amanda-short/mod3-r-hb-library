import { Link } from 'react-router-dom';

export default function BookLink({ book }) {
  return (
    <div>
      <Link to={`/books/${book.book_id}`} className="book-link">
        <div className="content">{book.name}</div>
      </Link>
    </div>
  );
}
