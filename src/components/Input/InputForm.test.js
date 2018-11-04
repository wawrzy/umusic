import * as React from 'react';
import renderer from 'react-test-renderer';

import InputForm from './InputForm';

describe('InputForm', () => {
  it('should render an Input Form', () => {
    const tree = renderer.create(<InputForm id="test" />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render an Input Form with name', () => {
    const tree = renderer.create(<InputForm id="test" name="name" />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render an Input Form with type', () => {
    const tree = renderer.create(<InputForm id="test" type="email" />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
