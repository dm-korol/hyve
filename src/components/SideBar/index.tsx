import React from 'react';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '../../theme';

const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    color: theme.palette.text.primary,
    maxWidth: '170px',
    borderRight: '2px solid #b4b4b4',
    margin: '20px',
    padding: '0 0 50px 0',
  },
  navigation: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  sidebarLink: {
    padding: '8px',
    ...theme.typography.bodyL_r,
    ...theme.typography.link,
  },
  logout: {
    textDecoration: 'underline',
    padding: '0 10px',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export const SideBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List className={classes.navigation}>
        {['Projects', 'Users', 'Settings'].map((link, i) => (
          <a href={`/dashboard/${link.toLowerCase()}`} className={classes.sidebarLink} key={i}>
            {link}
          </a>
        ))}
        <a href={'/'} className={classes.logout}>
          Logout
        </a>
      </List>
    </div>
  );
};
