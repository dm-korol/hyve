import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';
import { Meta, Story } from '@storybook/react';
import { BreadCrumbs } from './';

export default {
  component: BreadCrumbs,
  title: 'Components/LayoutAdmin/BreadCrumbs',
  decorators: [withNextRouter],
} as Meta;

const Template: Story<any> = () => <BreadCrumbs />;

export const Breadcrumbs = Template.bind({});
