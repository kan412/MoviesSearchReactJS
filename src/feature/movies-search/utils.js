import { SEARCH_BY, SORT_BY } from '../../shared';

export const getMovies = (searchBy, movies, inputValue) => {
  switch (searchBy) {
    case SEARCH_BY.TITLE:
      return movies.filter(movie => movie.title.toLowerCase().includes(inputValue.toLowerCase()));
    case SEARCH_BY.GENRE:
      return movies.filter(movie => movie.genre.toLowerCase().includes(inputValue.toLowerCase()));
    default:
      throw new Error(`unhandled searchBy: ${searchBy}`);
  }
};

export const getSortedMovies = (sortBy, movies) => {
  switch (sortBy) {
    case SORT_BY.YEAR:
      return movies.sort((a, b) => b.year - a.year);
    case SORT_BY.RATING:
      return movies.sort((a, b) => b.rating - a.rating);
    default:
      throw new Error(`unhandled sortBy: ${sortBy}`);
  }
};

