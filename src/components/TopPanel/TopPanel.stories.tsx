import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';
import { Meta, Story } from '@storybook/react';
import { TopPanel } from './';

export default {
  component: TopPanel,
  title: 'Components/LayoutAdmin/TopPanel',
  decorators: [withNextRouter],
} as Meta;

const Template: Story<any> = () => <TopPanel />;

export const topPanel = Template.bind({});
