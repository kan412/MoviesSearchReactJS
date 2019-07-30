import React from 'react';
import { shallow } from 'enzyme';
import { SEARCH_BY } from '../../../../../src/shared';
import { SearchContainer, mapDispatchToProps } from '../../../../../src/feature/movies-search/search/container';

describe('Search', () => {
  it('renders properly', () => {
    const component = shallow(<SearchContainer />);
    expect(component).toMatchSnapshot();
  });

  it('default state of searchBy is title', () => {
    const component = shallow(<SearchContainer />);
    expect(component.state().searchBy).toBe(SEARCH_BY.TITLE);
  });

  it('handleClick', () => {

  });

  it('mapDispatchToProps', () => {
    const dispatch = jest.fn();
    const inputValue = 'Matrix';
    const filterValue = SEARCH_BY.TITLE;
    mapDispatchToProps(dispatch).updateSearchTerm(inputValue);
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'UPDATE_SEARCH_TERM', payload: 'Matrix' });

    mapDispatchToProps(dispatch).filterToggle(filterValue);
    expect(dispatch.mock.calls[1][0]).toEqual({ type: 'SEARCH_BY', payload: 'title' });
  });

  it('update searchBy state on filter button click', () => {
    const component = shallow(<SearchContainer />);
    const button = component.find('.split-buttons').children().first();
    button.simulate('click', {
      target: {
        value: SEARCH_BY.TITLE,
      },
    });
    expect(component.state().searchBy).toBe(SEARCH_BY.TITLE);
  });
});
