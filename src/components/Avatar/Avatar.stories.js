import React from 'react';
import { storiesOf } from '@storybook/react';
import { MyAvatar } from './Avatar';

const styledUser = { borderRadius: '100px', width: '100px', height: '100px' };

const stories = storiesOf('Avatar', module);

stories.add('Avatar', () => (
  <MyAvatar email="wawrzyniakjulien@gmail.com" hover="displayFlex" styled={styledUser} />
));
