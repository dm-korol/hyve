import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SecondaryButton, Color } from './';
import { Size } from '../PrimaryButton';

export default {
  component: SecondaryButton,
  title: 'Components/Buttons/SecondaryButton',
} as Meta;

const Template: Story<any> = (args) => <SecondaryButton {...args}>{'Button'}</SecondaryButton>;

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = { fillColor: Color.orange, size: Size.large };

export const SecondarySmall = Template.bind({});
SecondarySmall.args = { fillColor: Color.blue, size: Size.small };

export const SecondaryLargeDisabled = Template.bind({});
SecondaryLargeDisabled.args = { disabled: true, fillColor: Color.orange, size: Size.large };

export const SecondarySmallDisabled = Template.bind({});
SecondarySmallDisabled.args = { disabled: true, fillColor: Color.blue, size: Size.small };
