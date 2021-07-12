import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '../../theme';
import { TextField } from '@material-ui/core/';
import { Formik } from 'formik';
import { Color, PrimaryButton, Size } from '../PrimaryButton';
import { PopUp, Type } from '../PopUp';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  course: {
    margin: '15px auto 20px',
    color: theme.palette.text.primary,
  },
}));

export const InputBuyToken = () => {
  const classes = useStyles();

  const [openInform, setOpenInform] = useState(false);
  const informText = 'You successfully joined An Amazing Token project.';

  const toggleInform = () => {
    setOpenInform(!openInform);
  };

  return (
    <>
      <Formik
        initialValues={{ tokenAmount: '1' }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}>
        {({ values, handleChange, handleSubmit }) => (
          <form className={classes.root} onSubmit={handleSubmit}>
            <TextField
              name={'tokenAmount'}
              onChange={handleChange}
              variant={'outlined'}
              placeholder={'enter amount of token'}
              value={values.tokenAmount}
            />
            <div className={classes.course}>{'1 TKO = 0.003 ETH'}</div>
            <PrimaryButton size={Size.large} fillColor={Color.blue} onClick={toggleInform}>
              BUY
            </PrimaryButton>
          </form>
        )}
      </Formik>
      <PopUp
        type={Type.inform}
        isOpen={openInform}
        header={
          <>
            {'Congrats'}
            <CheckCircleIcon />
          </>
        }
        text={informText}
        handleClose={toggleInform}
      />
    </>
  );
};
