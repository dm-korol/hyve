import React from 'react';
import { PopUp, Type } from '../../../components/PopUp';
import { SecondaryButton, Color as SecondaryColor } from '../../../components/SecondaryButton';
import { Size } from '../../../components/PrimaryButton';

interface InitializePublishModalProps {
  handleClose: () => void;
  isOpen: boolean;
  handleSubmit: () => void;
}

export const InitializePublishModal: React.FC<InitializePublishModalProps> = ({
  handleClose,
  isOpen,
  handleSubmit,
}) => {
  const text = `Are you sure you want to create the project? 
    Once deployed, It can’t be deleted or removed, all changes and edits to the project will be visible.
    `;

  return (
    <PopUp handleClose={handleClose} isOpen={isOpen} type={Type.confirm} text={text}>
      <SecondaryButton size={Size.large} onClick={handleSubmit} fillColor={SecondaryColor.blue}>
        Ok
      </SecondaryButton>
    </PopUp>
  );
};
