import config from '../../../config';
import { SEARCH_BY } from '../../shared';

const getMovies = (sortby, searchby, searchterm) => {
  let queryString = '';
  if (searchby === SEARCH_BY.GENRE) {
    queryString = `${config.API_URL}?sortBy=${sortby}&sortOrder=desc&searchBy=${searchby}&filter=${searchterm}`;
  } else {
    queryString = `${config.API_URL}?sortBy=${sortby}&sortOrder=desc&search=${searchterm}&searchBy=${searchby}`;
  }

  return queryString;
};

export default getMovies;
