import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import MovieGrid from './components/Movies/MovieGrid';
import MovieSearch from './components/Movies/MovieSearch';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MovieGrid} />
      <Route path="/movieSearch" component={MovieSearch}/>
  </Route>
);
