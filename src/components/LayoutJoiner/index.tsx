import React from 'react';
import Grid from '@material-ui/core/Grid';
import { TopBar } from '../index';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '../../theme';
import { TopPanel } from '../index';

const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    width: '100%',
  },
}));

export const LayoutJoiner = (props: { children: React.ReactChild }) => {
  const { children } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TopBar />
        </Grid>
        <Grid item xs={12}>
          <TopPanel />
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};
