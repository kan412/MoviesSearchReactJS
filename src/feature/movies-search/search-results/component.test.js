import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from './component';

describe('<SearchResults />', () => {
  it('render without breaking', () => {
    const data = [{}, {}];
    const component = shallow(<SearchResults data={data} />);
    expect(component).toMatchSnapshot();
  });

  it('no films found', () => {
    const data = [];
    const component = shallow(<SearchResults data={data} />);
    expect(component.find('h3').text()).toBe('No Films Found');
  });
});
