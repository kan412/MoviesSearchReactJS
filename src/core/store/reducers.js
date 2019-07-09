import { SEARCH_BY, SORT_BY } from '../../shared/constants';

const initialState = {
  movies: [],
  searchTerm: '',
  searchBy: SEARCH_BY.TITLE,
  sortBy: SORT_BY.YEAR,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'UPDATE_SEARCH_TERM':
      return {
        ...state,
        searchTerm: payload,
      };
    case 'FETCH_MOVIES':
      return {
        ...state,
        movies: payload,
      };
    case 'SEARCH_BY':
      return {
        ...state,
        searchBy: payload,
      };
    case 'SORT_BY':
      return {
        ...state,
        sortBy: payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
