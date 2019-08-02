import React from 'react';
import { shallow } from 'enzyme';
import { SORT_BY } from '../../../shared';
import { SortContainer, mapDispatchToProps, mapStateToProps } from './container';


describe('<SortContainer />', () => {
  it('render without breaking', () => {
    const component = shallow(<SortContainer />);
    expect(component).toMatchSnapshot();
  });

  it('handleSort', () => {
    const handleSortToggle = jest.fn();
    const component = shallow(<SortContainer sortToggle={handleSortToggle} />);
    const button = component.find('button').at(0);
    button.simulate('click', {
      target: {
        value: SORT_BY.YEAR,
      },
    });
    expect(handleSortToggle).toHaveBeenCalledWith(SORT_BY.YEAR);
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
    // expect(dispatch).toHaveBeenCalledWith({ type: 'SORT_BY', payload: 'release_date' });
    expect(dispatch).toHaveBeenCalled();
  });
});
