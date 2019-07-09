export const getYear = (date) => {
  const newdate = new Date(date);
  return newdate.getFullYear();
};

export const SEARCH_BY = {
  TITLE: 'TITLE',
  GENRE: 'GENRE',
};

export const SORT_BY = {
  YEAR: 'YEAR',
  RATING: 'RATING',
};
