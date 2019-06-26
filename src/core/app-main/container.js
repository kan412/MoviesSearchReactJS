import React from 'react';
import MoviesSearch from '../../feature/movies-search';
import MoviesDetail from '../../feature/movie-details';
import { moviesList } from '../../shared';

class AppMain extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      page: 'main',
      content: moviesList,
    };
  }

  render() {
    const { page, content } = this.state;
    let mainPage = '';

    if (page === 'main') {
      mainPage = <MoviesSearch data={content} />;
    }

    if (page === 'single') {
      mainPage = <MoviesDetail data={content} />;
    }

    return (<div>{ mainPage }</div>);
  }
}


export default AppMain;
