import Book from './Book';
import { useBookDetail } from '../../hooks/useBookDetail';
import { Link, useParams } from 'react-router-dom';

function BookDetail() {
  const id = useParams();
  const { book, loading, error } = useBookDetail(id);

  if (error)
    return (
      <>
        <h1>Something went wrong :(</h1> <h2>{error}</h2>
      </>
    );

  if (loading) return <h3>Loading book...</h3>;
  <>
    <Link to="/books">Back to catalog</Link>
  </>;

  return (
    <>
      <Book book={book} showDetail />
      <Link to={`/books`}>Back to catalog</Link>
    </>
  );
}

export default BookDetail;
