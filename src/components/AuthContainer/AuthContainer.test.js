import * as React from 'react';
import renderer from 'react-test-renderer';

import AuthContainer from './AuthContainer';

describe('AuthContainer', () => {
  it('should render a AuthContainer', () => {
    const tree = renderer.create(
      <AuthContainer>
        <div />
      </AuthContainer>,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
