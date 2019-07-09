import { getYear, SEARCH_BY, SORT_BY } from '../../shared';


export const getMovies = (searchBy, movies, inputValue) => {
  switch (searchBy) {
    case SEARCH_BY.TITLE:
      return movies.filter(movie => movie.title.toLowerCase().includes(inputValue.toLowerCase()));
    case SEARCH_BY.GENRE:
      return movies.filter(
        movie => movie.genres[0].toLowerCase().includes(inputValue.toLowerCase()),
      );
    default:
      throw new Error(`unhandled searchBy: ${searchBy}`);
  }
};

export const getSortedMovies = (sortBy, movies) => {
  switch (sortBy) {
    case SORT_BY.YEAR:
      return movies.sort((a, b) => getYear(b.release_date) - getYear(a.release_date));
    case SORT_BY.RATING:
      return movies.sort((a, b) => b.vote_average - a.vote_average);
    default:
      throw new Error(`unhandled sortBy: ${sortBy}`);
  }
};
