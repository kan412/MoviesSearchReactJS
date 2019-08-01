import React from 'react';
import { shallow } from 'enzyme';
import { SEARCH_BY } from '../../../shared';
import { SearchContainer, mapDispatchToProps } from './container';

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
    const handleFilterToggle = jest.fn();
    const handleUpdateSearchTerm = jest.fn();
    const component = shallow(
      <SearchContainer
        filterToggle={handleFilterToggle}
        updateSearchTerm={handleUpdateSearchTerm}
      />,
    );
    const button = component.find('button').at(0);
    button.simulate('click');
    expect(handleFilterToggle).toHaveBeenCalled();
    expect(handleUpdateSearchTerm).toHaveBeenCalled();
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
