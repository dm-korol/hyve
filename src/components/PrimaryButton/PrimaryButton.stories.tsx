import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PrimaryButton, Color, Size } from './';

export default {
  component: PrimaryButton,
  title: 'Components/Buttons/PrimaryButton',
} as Meta;

const Template: Story<any> = (args) => <PrimaryButton {...args}>{'Button'}</PrimaryButton>;

export const PrimaryBlueLarge = Template.bind({});
PrimaryBlueLarge.args = { fillColor: Color.blue, size: Size.large };

export const PrimaryBlueSmall = Template.bind({});
PrimaryBlueSmall.args = { fillColor: Color.blue, size: Size.small };
