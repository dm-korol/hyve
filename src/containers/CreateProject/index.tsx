import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import { ITheme } from '../../theme';
import { Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import { PopUp, Type } from '../../components/PopUp';
import { Color, PrimaryButton, Size } from '../../components/PrimaryButton';
import { Status, StatusPlate } from '../../components/StatusPlate';
import { Color as SecondaryColor, SecondaryButton } from '../../components/SecondaryButton';
import { LayoutAdmin } from '../../components/LayoutAdmin';
import { PageHeader } from '../../components/PageHeader';

const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    margin: '55px 0 5px -20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    minWidth: '250px',
    marginBottom: '55px',
  },
  check: {
    marginRight: 'auto',
  },
  buttonsSection: {
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}));

export const CreateProject = () => {
  const classes = useStyles();
  const router = useRouter();

  const [openInform, setOpenInform] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [owner, setOwner] = useState('');
  const [checked, toggleChecked] = useState(false);

  const ownerAddress = '0x71542C5cB52B6D2a03aE452f8565274511198b9B';

  const toggleConfirm = () => {
    setOpenConfirm(!openConfirm);
  };

  const toggleInform = () => {
    setOpenInform(!openInform);
  };

  const showInform = () => {
    toggleConfirm();
    toggleInform();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    toggleChecked(e.target.checked);
    if (e.target.checked) {
      setOwner(ownerAddress);
    } else setOwner('');
  };

  const back = () => {
    router.back();
  };

  return (
    <LayoutAdmin>
      <>
        <PageHeader header={'Create New Project'} />
        <div className={classes.root}>
          <form className={classes.form}>
            <TextField
              variant={'outlined'}
              label={'Project name'}
              placeholder={'Enter the project name'}
              className={classes.input}
            />
            <TextField
              disabled={owner === ownerAddress}
              onChange={(e) => setOwner(e.target.value)}
              variant={'outlined'}
              label={'Project owner'}
              placeholder={'Enter the network address'}
              value={owner}
              className={classes.input}
            />
            <FormControlLabel
              className={classes.check}
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  name="checkedOwner"
                  color="primary"
                />
              }
              label={'Admin is owner'}
            />
          </form>
        </div>
        <div className={classes.buttonsSection}>
          <PrimaryButton size={Size.large} fillColor={Color.blue} onClick={toggleConfirm}>
            Create&Deploy
          </PrimaryButton>
          <SecondaryButton size={Size.large} onClick={back} fillColor={SecondaryColor.transparent}>
            Cancel
          </SecondaryButton>
        </div>
        <PopUp
          handleClose={toggleConfirm}
          isOpen={openConfirm}
          type={Type.confirm}
          text="Are you sure you want to create the project? Once deployed, It can't be deleted or removed">
          <SecondaryButton size={Size.large} onClick={showInform} fillColor={SecondaryColor.blue}>
            Create&Publish
          </SecondaryButton>
        </PopUp>
        <PopUp
          handleClose={toggleInform}
          isOpen={openInform}
          type={Type.inform}
          text="The project has been successfully created and deployed. Please, make sure adding required details before publishing"
        />
      </>
    </LayoutAdmin>
  );
};
