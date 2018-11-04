import * as React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import renderer from 'react-test-renderer';

import VideoAction from './VideoAction';

describe('VideoAction', () => {
  const onClick = () => {};

  it('should render a VideoAction ', () => {
    const tree = renderer.create(
      <VideoAction hide={false} onClick={onClick}>
        <SearchIcon />
      </VideoAction>,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
