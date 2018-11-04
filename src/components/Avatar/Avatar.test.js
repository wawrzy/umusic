import * as React from 'react';
import renderer from 'react-test-renderer';

import { MyAvatar } from './Avatar';

describe('MyAvatar', () => {
  it('should render a MyAvatar', () => {
    const tree = renderer.create(
      <MyAvatar email="wawrzyniakjulien@gmail.com" hover="displayFlex" styled={{}} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
