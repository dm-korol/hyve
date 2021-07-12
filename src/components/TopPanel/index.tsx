import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '../../theme';
import { BreadCrumbs } from '../index';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '20px 40px',
  },
  header: {
    margin: '0 40px 0 0',
    ...theme.typography.bodyL_r,
  },
}));

export const TopPanel = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.root}>
      <h2 className={classes.header}>
        {router.pathname.includes('user') ? 'HYVE Launchpad' : 'HYVE Admin'}
      </h2>
      {router.pathname !== '/' && !router.pathname.includes('user') && <BreadCrumbs />}
    </div>
  );
};
