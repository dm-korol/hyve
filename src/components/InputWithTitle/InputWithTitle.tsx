import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '../../theme';

const useStyles = makeStyles((theme: ITheme) => ({
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
}));

interface Props {
  title: string;
  input?: string | JSX.Element;
}

export const InputWithTitle = ({ title, input = '' }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.inputContainer}>
      <div className={classes.header}>{title}</div>
      <div>{input}</div>
    </div>
  );
};
