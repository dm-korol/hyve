import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PageHeader } from './';
import { withNextRouter } from 'storybook-addon-next-router';

export default {
  component: PageHeader,
  title: 'Components/LayoutAdmin/PageHeader',
  decorators: [withNextRouter],
} as Meta;

const Template: Story<any> = () => <PageHeader header={'PageHeader'} />;

export const themeSwitcher = Template.bind({});
