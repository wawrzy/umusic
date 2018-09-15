import React from 'react';
import renderer from 'react-test-renderer';

import Sample from './Sample';

it('should renders without ui change', () => {
  const component = renderer.create(
    <Sample name="sample" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
