/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { loadMovies } from './actions/movieActions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './styles/styles.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

const store = configureStore();
store.dispatch(loadMovies());

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);
