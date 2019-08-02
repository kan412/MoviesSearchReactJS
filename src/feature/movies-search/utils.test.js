import getMovies from './utils';

describe('Utils', () => {
  it('url with searchBy as title', () => {
    const url = 'https://reactjs-cdp.herokuapp.com/movies?sortBy=year&sortOrder=desc&search=Matrix&searchBy=title';
    const queryString = getMovies('year', 'title', 'Matrix');
    expect(queryString).toBe(url);
  });

  it('url with searchBy as genres', () => {
    const url = 'https://reactjs-cdp.herokuapp.com/movies?sortBy=year&sortOrder=desc&searchBy=genres&filter=Matrix';
    const queryString = getMovies('year', 'genres', 'Matrix');
    expect(queryString).toBe(url);
  });
});
