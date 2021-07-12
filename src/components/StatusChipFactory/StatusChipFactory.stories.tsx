import React from 'react';
import { Meta, Story } from '@storybook/react';
import { StatusChipFactory, StatusChipFactoryProps } from './';

export default {
  component: StatusChipFactory,
  title: 'Components/LayoutAdmin',
  argTypes: {
    status: {
      options: ['Active', 'New', 'Funded', 'Canceled', 'Default'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<StatusChipFactoryProps> = (args: StatusChipFactoryProps) => (
  <StatusChipFactory {...args} />
);

export const StatusChip = Template.bind({});
