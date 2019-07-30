import React from 'react';
import { shallow } from 'enzyme';
import App from '../../../../src/core/app';

describe('<App />', () => {
  it('render without breaking', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
