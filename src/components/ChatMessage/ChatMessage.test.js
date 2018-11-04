import * as React from 'react';
import renderer from 'react-test-renderer';

import ChatMessage from './ChatMessage';

describe('ChatMessage', () => {
  it('should render a ChatMessage receive', () => {
    const tree = renderer.create(<ChatMessage isReceived message="mess" alias="hehe" />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a ChatMessage not receive', () => {
    const tree = renderer.create(<ChatMessage isReceived={false} message="mess" alias="hehe" />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
