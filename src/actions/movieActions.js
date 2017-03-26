import getPopMovies from '../api/getPopMovies';
import searchMovies from '../api/searchMovies';

// Initial load of popular movies
export function loadMoviesSuccess(popMovies) {
  return {
    type: 'LOAD_POP_MOVIES',
    popMovies
  };
}

export function loadMovies() {
  return function(dispatch) {
    return getPopMovies.getAllMovies().then(popMovies => {
      dispatch(loadMoviesSuccess(popMovies));
    }).catch(error => {
      throw(error);
    });
  };
}

// Search movie action
export function searchMoviesSuccess(searchMovies) {
  return {
    type: 'SEARCH_MOVIES',
    searchMovies
  };
}

export function searchMovie(title) {
  return function(dispatch) {
    return searchMovies.search(title).then(searchMovies => {
      dispatch(searchMoviesSuccess(searchMovies));
    }).catch(error => {
      throw(error);
    });
  };
}
