import React, { useState } from 'react';
import { Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '../../theme';
import { LayoutJoiner, InputBuyToken, TokenDetails } from '../../components';
import { Color as SecondaryColor, SecondaryButton } from '../../components/SecondaryButton';
import { Size } from '../../components/PrimaryButton';

const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    '& > h5': {
      marginTop: '10px',
      ...theme.typography.hr5,
    },
  },
}));

export const BuyToken = () => {
  const classes = useStyles();

  return (
    <LayoutJoiner>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <TokenDetails />
        </Grid>
        <Grid item xs={9} className={classes.root}>
          <h5>Buy HYVE token:</h5>
          <InputBuyToken />
          <SecondaryButton size={Size.large} fillColor={SecondaryColor.transparent}>
            Cancel
          </SecondaryButton>
        </Grid>
      </Grid>
    </LayoutJoiner>
  );
};
