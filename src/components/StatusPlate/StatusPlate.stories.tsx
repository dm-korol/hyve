import React from 'react';
import { Meta, Story } from '@storybook/react';
import { StatusPlate, Status } from './';

export default {
  component: StatusPlate,
  title: 'Components/Indicators/Status',
} as Meta;

const Template: Story<any> = (args) => <StatusPlate {...args} />;

export const StatusNew = Template.bind({});
StatusNew.args = { status: 'new' };

export const StatusActive = Template.bind({});
StatusActive.args = { status: 'active' };

export const StatusFunded = Template.bind({});
StatusFunded.args = { status: 'funded' };

export const StatusFinished = Template.bind({});
StatusFinished.args = { status: 'finished' };

export const StatusLocked = Template.bind({});
StatusLocked.args = { status: 'locked' };
