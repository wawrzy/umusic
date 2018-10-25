/* eslint-disable */

import { storiesOf, configure } from '@storybook/react';

// import stories
configure(() => {
  require('../components/Input/InputForm.stories.js');
  require('../components/Button/Button.stories.js');
  require('../components/AuthContainer/AuthContainer.stories.js');
  require('../components/Sample/Sample.stories.js');
  require('../components/SnackbarContainer/SnackbarContainer.stories.js');
}, module);
