/* eslint-disable */

import { storiesOf, configure } from '@storybook/react';

// import stories
configure(() => {
  require('../components/Input/InputForm.stories.js');
  require('../components/Sample/Sample.stories.js');
}, module);
