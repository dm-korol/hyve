import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '../../theme';
import { List } from '@material-ui/core';
import { ThemeSwitcher } from '../ThemeSwitcher';

const LINKS = [
  { to: '/dashboard/projects', text: 'Projects' },
  { to: '/', text: 'About' },
  { to: '/', text: 'HYVE token' },
  { to: '/', text: 'Contact' },
  { to: '/', text: 'Blog' },
];

const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    color: theme.palette.text.primary,
    ...theme.typography.bodyL_r,
    display: 'flex',
    height: '114px',
    flexDirection: 'row',
    padding: '0 150px',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {},
  navigation: {
    marginLeft: 'auto',
  },
  menuLink: {
    marginLeft: '50px',
    ...theme.typography.link,
  },
}));

export const TopBar = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <div className={classes.logo}>logo</div>
      <nav className={classes.navigation}>
        <List>
          {LINKS.map((link, i) => (
            <a className={classes.menuLink} href={link.to} key={i}>
              {link.text}
            </a>
          ))}
        </List>
      </nav>
      <ThemeSwitcher />
    </header>
  );
};
