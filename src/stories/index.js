/* eslint-disable */

import { storiesOf, configure } from '@storybook/react';

// import stories
configure(() => {
  require('../components/Input/InputForm.stories.js');
  require('../components/Button/Button.stories.js');
  require('../components/AuthContainer/AuthContainer.stories.js');
  require('../components/SnackbarContainer/SnackbarContainer.stories.js');
  require('../components/Search/Search.stories.js');
  require('../components/ChatMessage/ChatMessage.stories.js');
}, module);
