import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ProjectsTable } from './';

export default {
  component: ProjectsTable,
  title: 'Components/LayoutAdmin',
} as Meta;

const Template: Story<any> = () => <ProjectsTable />;

export const Projectstable = Template.bind({});
