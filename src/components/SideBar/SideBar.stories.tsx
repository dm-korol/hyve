import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SideBar } from './';

export default {
  component: SideBar,
  title: 'Components/LayoutAdmin/SideBar',
} as Meta;

const Template: Story<any> = () => <SideBar />;

export const Sidebar = Template.bind({});
