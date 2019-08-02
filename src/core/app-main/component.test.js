import React from 'react';
import { shallow } from 'enzyme';
import AppMain from './component';

describe('<AppMain />', () => {
  it('render without breaking', () => {
    const component = shallow(<AppMain />);
    expect(component).toMatchSnapshot();
  });
});
