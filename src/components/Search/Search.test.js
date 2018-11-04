import * as React from 'react';
import renderer from 'react-test-renderer';

import { Search } from './Search';

describe('Search', () => {
  const f = () => 'trad';

  it('should render a Search without suggestion', () => {
    const tree = renderer.create(<Search onChange={f} t={f} />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a Search with suggestions', () => {
    const tree = renderer.create(
      <Search onChange={f} t={f} suggestions={[{ value: 'dd', label: 'dd' }]} onSuggestClick={f} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
