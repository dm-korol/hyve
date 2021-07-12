import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DropZone } from './';

export default {
  component: DropZone,
  title: 'Components/ProjectDetails/DropZone',
} as Meta;

const Template: Story<any> = () => <DropZone />;

export const Dropzone = Template.bind({});
