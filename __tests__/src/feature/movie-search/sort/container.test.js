import React from 'react';
import { shallow } from 'enzyme';
import { SORT_BY } from '../../../../../src/shared';
import { SortContainer, mapDispatchToProps, mapStateToProps } from '../../../../../src/feature/movies-search/sort/container';


describe('<SortContainer />', () => {
  it('render without breaking', () => {
    const component = shallow(<SortContainer />);
    expect(component).toMatchSnapshot();
  });

  it('mapStateToProps', () => {
    const initialState = {
      sortBy: 'released_date',
    };
    expect(mapStateToProps(initialState).sortBy).toEqual('released_date');
  });

  it('mapDispatchToProps', () => {
    const dispatch = jest.fn();
    const sortValue = SORT_BY.YEAR;
    mapDispatchToProps(dispatch).sortToggle(sortValue);
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'SORT_BY', payload: 'release_date' });
  });
});
