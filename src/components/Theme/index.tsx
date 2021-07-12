import React from 'react';
import { useSelector } from 'react-redux';
import { getMainState } from './state';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { ITheme } from '../../theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from '../../theme/config';
import GothamHTF from 'cf-gotham-fonts/gotham-font.css';

const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [GothamHTF],
          'font-family': 'GothamHTF',
        },
        '@a': {
          'font-weight': 400,
        },
      },
    },
    fontFamily: 'GothamHTF',
    width: '100vw',
    overflowX: 'hidden',
    overflowY: 'clip',
  },
}));

export const Theme = (props: { children: React.ReactChild }) => {
  const { children } = props;
  const classes = useStyles();
  const { mode } = useSelector(getMainState);

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme[mode]}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </div>
  );
};
