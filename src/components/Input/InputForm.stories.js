import React from 'react';
import { storiesOf } from '@storybook/react';
import InputForm from './InputForm';

const stories = storiesOf('InputForm', module);

stories
  .add('InputLogin', () => (
    <InputForm name="Login" type="default" />
  ))
  .add('InputPassword', () => (
    <InputForm name="Password" type="password" />
  ));
