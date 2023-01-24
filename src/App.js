import BookList from './components/book/BookList';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import BookDetail from './components/book/BookDetail.js';

function App() {
  // TODO: Add routes to books
  return (
    <main className="container">
      <Switch>
        <Route exact path="/">
          <Link to={`/books`}>
            <h1>Library Catalog</h1>
          </Link>
        </Route>
        <Route exact path="/books" component={BookList} />
        <Route exact path="/books/:id" component={BookDetail} />
      </Switch>
    </main>
  );
}

export default App;
