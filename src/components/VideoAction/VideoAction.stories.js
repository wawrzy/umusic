import React from 'react';
import { storiesOf } from '@storybook/react';
import Pause from '@material-ui/icons/Pause';

import VideoAction from './VideoAction';

const stories = storiesOf('VideoAction', module);

const createVideoAction = () => (
  <VideoAction onClick={() => {}} hide={false}>
    <Pause fontSize="large" />
  </VideoAction>
);

stories.add('default', () => createVideoAction());
