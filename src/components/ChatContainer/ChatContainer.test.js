import * as React from 'react';
import renderer from 'react-test-renderer';

import ChatContainer from './ChatContainer';

describe('ChatContainer', () => {
  it('should render a ChatContainer', () => {
    const tree = renderer.create(
      <ChatContainer>
        <div />
      </ChatContainer>,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
