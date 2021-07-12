import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PopUp, Type } from './';
import { DashboardSharp } from '@material-ui/icons';
import { Color, SecondaryButton } from '../SecondaryButton';
import { PrimaryButton, Size } from '../PrimaryButton';

export default {
  component: PopUp,
  title: 'Components/PopUps/PopUp',
} as Meta;

const TemplateInform: Story<any> = (args) => (
  <PopUp {...args}>
    <SecondaryButton size={Size.large} fillColor={Color.transparent}>
      {'view'}
    </SecondaryButton>
  </PopUp>
);

const TemplateConfirm: Story<any> = (args) => (
  <PopUp {...args}>
    <SecondaryButton size={Size.large} fillColor={Color.blue}>
      {'Create&Publish'}
    </SecondaryButton>
  </PopUp>
);

export const informPopUp = TemplateInform.bind({});
informPopUp.args = {
  isOpen: true,
  handleClose: () => {},
  header: <DashboardSharp />,
  type: Type.inform,
  text: 'inform Popup sample text',
};

export const confirmPopUp = TemplateConfirm.bind({});
confirmPopUp.args = {
  isOpen: true,
  handleClose: () => {},
  type: Type.confirm,
  text: 'confirm Popup sample text',
};
