import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Breadcrumbs, List } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useRouter } from 'next/router';
import { ITheme } from '../../theme';

const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    color: theme.palette.text.primary,
    textDecoration: 'underline',
    ...theme.typography.bodyS_r,
  },
  crumb: {
    ...theme.typography.link,
  },
}));

export const BreadCrumbs = () => {
  const router = useRouter();
  const [route, setRoute] = useState('');

  useEffect(() => {
    const route = router.pathname;
    const breadcrumbs = route.replace(/\//g, ' > ').slice(3);
    setRoute(breadcrumbs);
  }, []);

  const classes = useStyles();

  return (
    <Breadcrumbs
      className={classes.root}
      separator={<NavigateNextIcon fontSize={'small'} />}
      aria-label={'breadcrumb'}>
      <a className={classes.crumb} href={'/projects'}>
        {route}
      </a>
    </Breadcrumbs>
  );
};
