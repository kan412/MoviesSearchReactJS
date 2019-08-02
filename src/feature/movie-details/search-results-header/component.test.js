import React from 'react';
import { shallow } from 'enzyme';
import SearchResultsHeader from './component';

describe('<SearchResultsHeader />', () => {
  it('render without breaking', () => {
    const data = ['action', 'drama'];
    const component = shallow(<SearchResultsHeader genres={data} />);
    expect(component).toMatchSnapshot();
  });
});
