import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeSwitcher } from './';
import store from '../../store';
import { Provider } from 'react-redux';

export default {
  component: ThemeSwitcher,
  title: 'Components/Navigation/ThemeSwitcher',
} as Meta;

const Template: Story<any> = () => (
  <Provider store={store}>
    <ThemeSwitcher />
  </Provider>
);

export const themeSwitcher = Template.bind({});
