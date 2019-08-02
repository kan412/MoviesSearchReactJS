import React from 'react';
import { mount } from 'enzyme';
import ErrorBoundary from './container';


describe('ErrorBoundary', () => {
  it('should display an ErrorMessage if wrapped component throws', () => {
    const Something = () => null;

    const component = mount(
      <ErrorBoundary>
        <Something />
      </ErrorBoundary>,
    );

    const error = new Error('test');
    expect(component.state().hasError).toBe(false);
    component.find(Something).simulateError(error);
    expect(component.state().hasError).toBe(true);
  });
});
