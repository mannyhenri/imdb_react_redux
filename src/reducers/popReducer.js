import initialState from './initialState';

export default function popReducer(state = initialState.popMovies, action) {
  switch (action.type) {
    case 'LOAD_POP_MOVIES':
      return action.popMovies;
      
    default:
      return state;
  }
}
