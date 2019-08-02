import React from 'react';
import { shallow } from 'enzyme';
import { MoviesSearchContainer } from './container';

describe('<MovieSearchContainer />', () => {
  it('default state', () => {
    const component = shallow(<MoviesSearchContainer />);

    expect(component.state().movies).toEqual([]);
    expect(component.state().firstLoad).toBe(true);
  });

  it('componentDidUpdate', () => {
    const sortBy = 'release_date';
    const searchBy = 'title';
    const searchTerm = 'Matrix';
    const component = shallow(<MoviesSearchContainer sortBy={sortBy} searchBy={searchBy} searchTerm={searchTerm} />);
    component.instance().componentDidUpdate();
  });
});
