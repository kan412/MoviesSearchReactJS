import React from 'react';
import { shallow } from 'enzyme';
import SearchResultsHeader from './component';

describe('<SearchResultsHeader />', () => {
  it('render without breaking', () => {
    const searchRes = 10;
    const component = shallow(<SearchResultsHeader searchResults={searchRes} />);
    expect(component).toMatchSnapshot();
  });
});
