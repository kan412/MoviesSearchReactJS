export const searchBY = search => ({
  type: 'SEARCH_BY',
  payload: search,
});

export const sortBY = sort => ({
  type: 'SORT_BY',
  payload: sort,
});

export const updateSearchTerm = searchTerm => ({
  type: 'UPDATE_SEARCH_TERM',
  payload: searchTerm,
});

export const fetchMovies = () => (dispatch) => {
  fetch('https://reactjs-cdp.herokuapp.com/movies')
    .then(res => res.json())
    .then(result => dispatch({
      type: 'FETCH_MOVIES',
      payload: result.data,
    }));
};
