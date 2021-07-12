import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { ITheme } from '../../theme';

const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    maxWidth: '100px',
    textAlign: 'center',
    userSelect: 'none',
    margin: '5px 100px 5px 0',
    border: '2px solid',
    padding: '6px 18px',
    borderRadius: '50px',
    textTransform: 'capitalize',
    ...theme.typography.paragraph_r,
  },
  new: {
    borderColor: theme.palette.amber[400],
    color: theme.palette.amber[400],
  },
  active: {
    borderColor: green[200],
    color: green[200],
  },
  funded: {
    borderColor: theme.palette.blue[600],
    color: theme.palette.blue[600],
  },
  finished: {
    borderColor: 'black',
    color: 'black',
  },
  locked: {
    borderColor: 'red',
    color: 'red',
  },
}));

export enum Status {
  new = 'new',
  active = 'active',
  funded = 'funded',
  finished = 'finished',
  locked = 'locked',
}

interface Props {
  status: Status;
}

export const StatusPlate = ({ status }: Props) => {
  const classes = useStyles();

  const statusClass: any = {
    [Status.new]: classes.new,
    [Status.active]: classes.active,
    [Status.funded]: classes.funded,
    [Status.finished]: classes.finished,
    [Status.locked]: classes.locked,
  };

  return <div className={`${classes.root} ${statusClass[status]}`}>{status}</div>;
};
