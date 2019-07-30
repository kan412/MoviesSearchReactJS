import React from 'react';
import { shallow } from 'enzyme';
import AppHeader from '../../../../src/core/app-header';

describe('<AppHeader />', () => {
  it('render without breaking', () => {
    const component = shallow(<AppHeader />);
    expect(component).toMatchSnapshot();
  });
});
