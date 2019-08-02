import React from 'react';
import { shallow } from 'enzyme';
import { MovieDetailsContainer } from './container';

describe('<MovieDetailsContainer />', () => {
  it('default', () => {
    const component = shallow(<MovieDetailsContainer />);
    expect(component.state().movie).toEqual({});
    expect(component.state().relatedMovies).toEqual([]);
  });

  it('componentDidMount', () => {
    const component = shallow(<MovieDetailsContainer />);
    component.instance().componentDidMount();
    expect(component.instance().isMounted).toBe(true);
  });

  it('componentWillUnmount', () => {
    const component = shallow(<MovieDetailsContainer />);
    component.instance().componentWillUnmount();
    expect(component.instance().isMounted).toBe(false);
  });
});
