export const searchBY = search => ({
  type: 'SEARCH_BY',
  payload: search,
});

export const sortBY = sort => ({
  type: 'SORT_BY',
  payload: sort,
});

export const updSearchTerm = value => ({
  type: 'UPDATE_SEARCH_TERM',
  payload: value,
});
