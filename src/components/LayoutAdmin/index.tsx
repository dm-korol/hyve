import React from 'react';
import Grid from '@material-ui/core/Grid';
import { SideBar, TopBar, PageHeader } from '../index';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '../../theme';
import { TopPanel } from '../index';

const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    width: '100%',
  },
}));

interface Props {
  children: React.ReactChild;
  noSideBar?: boolean;
  noTopBar?: boolean;
}

export const LayoutAdmin = (props: Props) => {
  const { children, noSideBar = false, noTopBar = false } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {!noTopBar && (
          <Grid item xs={12}>
            <TopBar />
          </Grid>
        )}
        <Grid item xs={12}>
          <TopPanel />
        </Grid>
        {!noSideBar && (
          <Grid item xs={3}>
            <SideBar />
          </Grid>
        )}
        <Grid item xs={noSideBar ? 12 : 9}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};
