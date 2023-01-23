import BookList from './components/book/BookList';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import BookDetail from './components/book/BookDetail.js';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Switch>
        <Route exact path="/books" component={BookList} />
      </Switch>
    </main>
  );
}

export default App;
