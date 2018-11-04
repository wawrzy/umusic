import * as React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

describe('Button', () => {
  it('should render a Button', () => {
    const tree = renderer.create(<Button variant="contained" text="hehe" color="primary" />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
