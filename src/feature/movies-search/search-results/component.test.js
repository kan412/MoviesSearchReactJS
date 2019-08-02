import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from './component';

describe('<SearchResults />', () => {
  it('render without breaking', () => {
    const data = [{}, {}];
    const component = shallow(<SearchResults data={data} />);
    expect(component).toMatchSnapshot();
  });
});
