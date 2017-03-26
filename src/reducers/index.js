import { combineReducers } from 'redux';
import popMovies from './popReducer';
import searchMovies from './searchReducer';

const rootReducer = combineReducers({
  popMovies,
  searchMovies
});

export default rootReducer;
