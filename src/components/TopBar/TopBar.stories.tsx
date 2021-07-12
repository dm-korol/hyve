import React from 'react';
import store from '../../store';
import { Meta, Story } from '@storybook/react';
import { TopBar } from './';
import { Provider } from 'react-redux';

export default {
  component: TopBar,
  title: 'Components/LayoutAdmin/TopBar',
} as Meta;

const Template: Story<any> = () => (
  <Provider store={store}>
    <TopBar />
  </Provider>
);

export const Topbar = Template.bind({});
