import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { Checkbox, FormControlLabel, Grid, Switch, TextField } from '@material-ui/core';
import { InitializePublishModal, InitializeSuccessModal } from '../modals';
import { Color, PrimaryButton, Size } from '../../components/PrimaryButton';
import { Color as SecondaryColor, SecondaryButton } from '../../components/SecondaryButton';
import { DropZone, InputWithTitle, LayoutAdmin, PageHeader } from '../../components';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  header: {
    fontWeight: 'bold',
  },
  linkBtn: {
    textDecoration: 'underline',
    cursor: 'pointer',
    marginLeft: '5vw',
  },
  input: {
    width: '20vw',
  },
  formTitle: {
    fontSize: 24,
    marginTop: 50,
    fontWeight: 600,
    marginRight: 'auto',
  },
  addLinksContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  addLinkPlus: {
    fontSize: 36,
    fontWeight: 400,
    cursor: 'pointer',
    marginLeft: 5,
  },
});

const INITIAL_VALUES = {
  endDate: '',
  startDate: '',
  tokenPrice: '',
  vesting: false,
  farming: false,
  governance: false,
  projectDescription: '',
  existingToken: '',
  tokenName: '',
  tokenSymbol: '',
  tokenDecimals: '',
  tokenSupply: '',
};

export const InitializeProject = () => {
  const classes = useStyles();
  const router = useRouter();

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleVesting = () => {
    formik.setFieldValue('vesting', !formik.values.vesting);
  };
  const handleFarming = () => {
    formik.setFieldValue('farming', !formik.values.farming);
  };
  const handleGovernance = () => {
    formik.setFieldValue('governance', !formik.values.governance);
  };

  const [additionalLinks, setAdditionalLinks] = useState([{ id: 0, link: '' }]);
  const handleAdditionalLinkChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    idx: number
  ) => {
    const newLinks = [...additionalLinks];
    newLinks[idx] = { id: idx, link: event.target.value };
    setAdditionalLinks(newLinks);
  };

  const [isExistingToken, setExistingToken] = useState(false);
  const handleExistingToken = () => {
    setExistingToken(!isExistingToken);
  };

  const [openInform, setOpenInform] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

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

  const submitHandler = () => {
    formik.handleSubmit();
    showInform();
  };

  const back = () => {
    router.back();
  };

  return (
    <LayoutAdmin noSideBar noTopBar>
      <Grid container direction="row" justify="center">
        <Grid item xs={6}>
          <PageHeader header={'Project Initialization'} />

          <Grid container direction="row" justify="space-between">
            <Grid item xs={4}>
              <Grid container direction="row" justify="space-between">
                <InputWithTitle title={'Project Name'} input={'123'} />
                <InputWithTitle title={'ID'} input={'GH-123'} />
              </Grid>
            </Grid>

            <Grid item xs={4}>
              <div className={classes.header}>Upload Image</div>
              <DropZone />
            </Grid>
          </Grid>

          <form className={classes.form}>
            <div className={classes.formTitle}>General</div>

            <Grid container direction="row" justify="space-between">
              <Grid item xs={5}>
                <Grid container direction="column">
                  <InputWithTitle
                    title={'End Date'}
                    input={
                      <TextField
                        name="endDate"
                        value={formik.values.endDate}
                        onChange={formik.handleChange}
                        className={classes.input}
                        variant={'outlined'}
                        placeholder={'Enter the end date'}
                      />
                    }
                  />
                  <InputWithTitle
                    title={'Start Date'}
                    input={
                      <TextField
                        name="startDate"
                        value={formik.values.startDate}
                        onChange={formik.handleChange}
                        className={classes.input}
                        variant={'outlined'}
                        placeholder={'Enter the start date'}
                      />
                    }
                  />
                  <InputWithTitle
                    title={'Token Price'}
                    input={
                      <TextField
                        name="tokenPrice"
                        value={formik.values.tokenPrice}
                        onChange={formik.handleChange}
                        className={classes.input}
                        variant={'outlined'}
                        placeholder="0"
                      />
                    }
                  />
                  <FormControlLabel
                    className={classes.check}
                    control={
                      <Checkbox
                        name="vesting"
                        value={formik.values.vesting}
                        onChange={handleVesting}
                        color="primary"
                      />
                    }
                    label={'Create vesting contract'}
                  />
                  <FormControlLabel
                    className={classes.check}
                    control={
                      <Checkbox
                        name="farming"
                        value={formik.values.vesting}
                        onChange={handleFarming}
                        color="primary"
                      />
                    }
                    label={'Create farming'}
                  />
                  <FormControlLabel
                    className={classes.check}
                    control={
                      <Checkbox
                        name="governance"
                        value={formik.values.governance}
                        onChange={handleGovernance}
                        color="primary"
                      />
                    }
                    label={'Create governance'}
                  />
                </Grid>
              </Grid>
              <Grid item xs={5}>
                <InputWithTitle
                  title={'Additional Links'}
                  input={
                    <>
                      {additionalLinks.map(({ link, id }) => (
                        <div className={classes.addLinksContainer} key={`add-link-${id}`}>
                          <TextField
                            value={link}
                            onChange={(e) => handleAdditionalLinkChange(e, id)}
                            className={classes.input}
                            variant={'outlined'}
                            placeholder={'Enter the links here, full address'}
                          />
                          <div
                            className={classes.addLinkPlus}
                            onClick={() =>
                              setAdditionalLinks([
                                ...additionalLinks,
                                { id: additionalLinks.length, link: '' },
                              ])
                            }>
                            +
                          </div>
                        </div>
                      ))}
                    </>
                  }
                />
                <InputWithTitle
                  title={'Project Description'}
                  input={
                    <TextField
                      name="projectDescription"
                      value={formik.values.projectDescription}
                      onChange={formik.handleChange}
                      className={classes.input}
                      variant={'outlined'}
                      placeholder={'Type something...'}
                      rows={7}
                      multiline
                    />
                  }
                />
              </Grid>
            </Grid>

            <div className={classes.formTitle}>Token</div>

            <Grid item xs={4}>
              <Grid container direction="row">
                <FormControlLabel label="Create token" control={<></>} />
                <FormControlLabel
                  control={
                    <Switch
                      checked={isExistingToken}
                      onChange={handleExistingToken}
                      name="newTokenSwitch"
                      color="primary"
                    />
                  }
                  label="Add existing"
                />
              </Grid>
            </Grid>

            {isExistingToken ? (
              <>
                <InputWithTitle
                  title={'Token'}
                  input={
                    <TextField
                      name="existingToken"
                      value={formik.values.existingToken}
                      onChange={formik.handleChange}
                      className={classes.input}
                      variant={'outlined'}
                      placeholder={'Enter the token'}
                    />
                  }
                />
              </>
            ) : (
              <Grid container direction="row" justify="space-between">
                <Grid item xs={5}>
                  <Grid container direction="column">
                    <InputWithTitle
                      title={'Token Name'}
                      input={
                        <TextField
                          name="tokenName"
                          value={formik.values.tokenName}
                          onChange={formik.handleChange}
                          className={classes.input}
                          variant={'outlined'}
                          placeholder={'Enter the token name'}
                        />
                      }
                    />
                    <InputWithTitle
                      title={'Token Symbol'}
                      input={
                        <TextField
                          name="tokenSymbol"
                          value={formik.values.tokenSymbol}
                          onChange={formik.handleChange}
                          className={classes.input}
                          variant={'outlined'}
                          placeholder={'Enter the token symbol'}
                        />
                      }
                    />
                  </Grid>
                </Grid>

                <Grid item xs={5}>
                  <Grid container direction="column">
                    <InputWithTitle
                      title={'Decimals'}
                      input={
                        <TextField
                          name="tokenDecimals"
                          value={formik.values.tokenDecimals}
                          onChange={formik.handleChange}
                          className={classes.input}
                          variant={'outlined'}
                          placeholder={'Enter the token decimals'}
                        />
                      }
                    />
                    <InputWithTitle
                      title={'Total Supply'}
                      input={
                        <TextField
                          name="tokenSupply"
                          value={formik.values.tokenSupply}
                          onChange={formik.handleChange}
                          className={classes.input}
                          variant={'outlined'}
                          placeholder={'Enter the total token supply'}
                        />
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
            )}
          </form>

          <div className={classes.buttonsSection}>
            <PrimaryButton size={Size.large} fillColor={Color.orange} onClick={toggleConfirm}>
              Create & Publish
            </PrimaryButton>
            <SecondaryButton
              size={Size.large}
              onClick={back}
              fillColor={SecondaryColor.transparent}>
              Cancel
            </SecondaryButton>
          </div>
          <InitializePublishModal
            handleClose={toggleConfirm}
            isOpen={openConfirm}
            handleSubmit={submitHandler}
          />
          <InitializeSuccessModal handleClose={toggleInform} isOpen={openInform} />
        </Grid>
      </Grid>
    </LayoutAdmin>
  );
};
