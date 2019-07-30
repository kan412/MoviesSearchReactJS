import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../../../src/shared/not-found';

describe('<NotFound />', () => {
  it('render without breaking', () => {
    const component = shallow(<NotFound />);
    expect(component).toMatchSnapshot();
  });
});
