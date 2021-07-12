import React from 'react';
import { Button as MUIButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '../../theme';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    margin: '3px 5px',
    borderWidth: '2px',
    padding: '6px 28px',
    borderRadius: '50px',
    textTransform: 'none',
  },
  large: {
    ...theme.typography.buttonL,
    padding: '16px 72px',
  },
  small: {
    ...theme.typography.buttonS,
    padding: '8px 37px',
  },
  orange: {
    color: theme.palette.amber[300],
    borderColor: theme.palette.amber[300],
  },
  blue: {
    color: theme.palette.indigo[600],
    borderColor: theme.palette.indigo[600],
    '&:disabled': {
      color: theme.palette.indigo[200],
      borderColor: theme.palette.indigo[200],
    },
    '&:hover': {
      background: 'transparent',
      color: theme.palette.indigo[500],
      borderColor: theme.palette.indigo[500],
    },
    '&:active': {
      background: 'transparent',
      color: theme.palette.indigo[700],
      borderColor: theme.palette.indigo[700],
    },
  },
  icon: {
    marginLeft: '5px',
  },
}));

export enum Color {
  orange,
  blue,
}

export enum Size {
  large,
  small,
}

interface Props {
  disabled?: boolean;
  size: Size;
  children: React.ReactChild;
  fillColor: Color;
  onClick?: () => void;
  inlineCSS?: React.CSSProperties;
}

export const PrimaryButton = ({
  size,
  disabled,
  inlineCSS,
  children,
  fillColor,
  onClick,
}: Props) => {
  const classes = useStyles();

  const color: any = {
    [Color.orange]: classes.orange,
    [Color.blue]: classes.blue,
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
      disableRipple={true}
      disabled={isDisabled}
      style={style}
      className={`${classes.root} ${color[fillColor]} ${_size[size]}`}
      variant={'outlined'}
      color={'default'}
      onClick={clickHandler}>
      {children}
      {size === Size.small && <ExpandMoreIcon className={classes.icon} />}
    </MUIButton>
  );
};
