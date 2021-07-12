import React, { useState } from 'react';
import { LayoutJoiner, PopUp, PrimaryButton } from '../../components';
import { Color, Size } from '../../components/PrimaryButton';
import { Type } from '../../components/PopUp';

export const JoinerAuthorization = () => {
  const [openPopUp, setOpenPopUp] = useState(false);

  const togglePopUp = () => {
    setOpenPopUp(!openPopUp);
  };

  return (
    <LayoutJoiner>
      <>
        <PrimaryButton size={Size.large} fillColor={Color.blue} onClick={togglePopUp}>
          Authorize
        </PrimaryButton>
        <PopUp
          isOpen={openPopUp}
          header={'Authorize to HYVE'}
          type={Type.empty}
          handleClose={togglePopUp}>
          <>
            <PrimaryButton size={Size.large} inlineCSS={{ margin: '20px' }} fillColor={Color.blue}>
              Metamask
            </PrimaryButton>
            <PrimaryButton size={Size.large} inlineCSS={{ margin: '20px' }} fillColor={Color.blue}>
              Wallet Connect
            </PrimaryButton>
          </>
        </PopUp>
      </>
    </LayoutJoiner>
  );
};
