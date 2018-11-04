import * as React from 'react';
import renderer from 'react-test-renderer';

import SnackbarContainer from './SnackbarContainer';

describe('SnackbarContainer', () => {
  it('should render a SnackbarContainer error', () => {
    const tree = renderer.create(<SnackbarContainer variant="error" message="Error" />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a SnackbarContainer success', () => {
    const tree = renderer.create(<SnackbarContainer variant="error" message="Error" />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
