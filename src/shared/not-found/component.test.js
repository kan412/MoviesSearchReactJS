import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './component';

describe('<NotFound />', () => {
  it('renders without breaking', () => {
    const component = shallow(<NotFound />);
    expect(component).toMatchSnapshot();
  });
});
