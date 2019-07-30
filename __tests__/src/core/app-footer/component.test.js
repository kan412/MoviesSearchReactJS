import React from 'react';
import { shallow } from 'enzyme';
import AppFooter from '../../../../src/core/app-footer';

describe('<AppFooter />', () => {
  it('render without breaking', () => {
    const component = shallow(<AppFooter />);
    expect(component).toMatchSnapshot();
  });
});
