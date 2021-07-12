import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '../../theme';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    margin: '0 0 40px -50px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageHeaderLink: {
    margin: '0 20% 0 -40%',
    ...theme.typography.link,
    textDecoration: 'underline',
  },
  header: {
    margin: '0',
    ...theme.typography.hr1,
  },
}));

interface Props {
  header: string;
}

export const PageHeader = ({ header }: Props) => {
  const classes = useStyles();
  const router = useRouter();

  const style = {
    marginLeft: router.pathname === '/' ? '-10vw' : '0',
  };

  return (
    <div className={classes.root}>
      {router.pathname !== '/' && (
        <a className={classes.pageHeaderLink} href={'/dashboard/projects'}>
          back to project list
        </a>
      )}
      <h1 style={style} className={classes.header}>
        {header}
      </h1>
    </div>
  );
};
