import initialState from './initialState';

export default function searchReducer(state = initialState.searchMovies, action) {
  switch (action.type) {
    case 'SEARCH_MOVIES':
      return action.searchMovies;

    default:
      return state;
  }
}
