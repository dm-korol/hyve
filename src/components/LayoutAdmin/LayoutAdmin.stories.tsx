import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';
import { Meta, Story } from '@storybook/react';
import { LayoutAdmin } from './';
import store from '../../store';
import { Provider } from 'react-redux';

export default {
  component: LayoutAdmin,
  title: 'Components/LayoutAdmin',
  decorators: [withNextRouter],
} as Meta;

const Template: Story<any> = () => (
  <Provider store={store}>
    <LayoutAdmin>Table</LayoutAdmin>
  </Provider>
);

export const Layout = Template.bind({});
