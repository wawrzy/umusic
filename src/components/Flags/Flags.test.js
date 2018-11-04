import * as React from 'react';
import renderer from 'react-test-renderer';

import Flags from './Flags';

describe('Flags', () => {
  const f = () => {};

  it('should render a Flags', () => {
    const tree = renderer.create(
      <Flags
        countries={['FR', 'DE']}
        defaultCountry="FR"
        onSelect={f}
        customLabels={{ FR: 'fr', DE: 'de' }}
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
