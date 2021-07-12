import React from 'react';
import { Button as MUIButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '../../theme';
import { Size } from '../PrimaryButton';

const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    color: 'white',
    margin: '3px 5px',
    padding: '6px 28px',
    border: 'none',
    borderRadius: '50px',
    textTransform: 'none',
  },
  large: {
    ...theme.typography.buttonL,
    padding: '17px 72px',
  },
  small: {
    ...theme.typography.buttonS,
    padding: '8px 37px',
  },
  orange: {
    background: theme.palette.amber[300],
    '&:disabled': {
      color: 'white',
      border: 'none',
      background: theme.palette.amber[100],
    },
    '&:hover': {
      background: theme.palette.amber[200],
    },
    '&:active': {
      background: theme.palette.amber[400],
    },
  },
  blue: {
    background: theme.palette.indigo[600],
    '&:disabled': {
      color: 'white',
      border: 'none',
      background: theme.palette.indigo[200],
    },
    '&:hover': {
      background: theme.palette.indigo[500],
    },
    '&:active': {
      background: theme.palette.indigo[700],
    },
  },
  transparent: {
    color: theme.palette.text.primary,
    background: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}));

export enum Color {
  orange,
  blue,
  transparent,
}

interface Props {
  size: Size;
  disabled?: boolean;
  children: React.ReactChild;
  fillColor: Color;
  onClick?: () => void;
  inlineCSS?: React.CSSProperties;
}

export const SecondaryButton = ({
  disabled,
  size,
  inlineCSS,
  children,
  fillColor,
  onClick,
}: Props) => {
  const classes = useStyles();

  const color: any = {
    [Color.orange]: classes.orange,
    [Color.blue]: classes.blue,
    [Color.transparent]: classes.transparent,
  };

  const _size: any = {
    [Size.large]: classes.large,
    [Size.small]: classes.small,
  };

  const isDisabled = disabled ? disabled : false;
  const style = inlineCSS ? inlineCSS : {};

  const clickHandler = () => {
    onClick && onClick();
  };

  return (
    <MUIButton
      disabled={isDisabled}
      disableRipple={true}
      style={style}
      className={`${classes.root} ${color[fillColor]} ${_size[size]}`}
      variant={'outlined'}
      color={'default'}
      onClick={clickHandler}>
      {children}
    </MUIButton>
  );
};
