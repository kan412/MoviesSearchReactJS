import { SEARCH_BY, SORT_BY } from '../../shared/constants';

const initialState = {
  searchBy: SEARCH_BY.TITLE,
  sortBy: SORT_BY.YEAR,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
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
