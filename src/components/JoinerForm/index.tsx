import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '../../theme';

const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    border: `2px solid ${theme.palette.text.primary}`,
    borderRadius: '50px',
    margin: '20px auto',
    padding: '10px',
    width: '520px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    ...theme.typography.hr4,
  },
  formCloser: {
    position: 'absolute',
    top: '2px',
    right: '10px',
    cursor: 'pointer',
  },
}));

interface Props {
  header: string;
  children: React.ReactChild;
}

export const JoinerForm = ({ header, children }: Props) => {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <h4 className={classes.header}>{header}</h4>
      <div className={classes.formCloser}>x</div>
      {children}
    </form>
  );
};
