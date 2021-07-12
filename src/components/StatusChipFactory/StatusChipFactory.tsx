import React from 'react';
import { Chip, ChipProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '../../theme';

const useStyles = makeStyles((theme: ITheme) => ({
  active: {
    color: theme.palette.statuses.active,
    borderColor: theme.palette.statuses.active,
  },
  new: {
    color: theme.palette.statuses.new,
    borderColor: theme.palette.statuses.new,
  },
  funded: {
    color: theme.palette.statuses.funded,
    borderColor: theme.palette.statuses.funded,
  },
  canceled: {
    color: theme.palette.statuses.canceled,
    borderColor: theme.palette.statuses.canceled,
  },
}));

export interface DefaultChipProps extends ChipProps {
  className?: string;
  onClick?: (e: any) => void;
  style?: object;
}

export interface StatusChipFactoryProps {
  status: string;
  onClick?: (e: any) => void;
  style?: object;
  className?: string;
}

export enum ChipStatuses {
  active = 'Active',
  new = 'New',
  funded = 'Funded',
  canceled = 'Canceled',
}

const DefaultChip = ({ label, ...props }: DefaultChipProps) => {
  return <Chip label={label} variant="outlined" {...props} />;
};

export const StatusChipFactory = ({ status, ...props }: StatusChipFactoryProps) => {
  const classes = useStyles();

  switch (status) {
    case ChipStatuses.active:
      return <DefaultChip label="Active" {...props} className={classes.active} />;
    case ChipStatuses.new:
      return <DefaultChip label="New" {...props} className={classes.new} />;
    case ChipStatuses.funded:
      return <DefaultChip label="Funded" {...props} className={classes.funded} />;
    case ChipStatuses.canceled:
      return <DefaultChip label="Canceled" {...props} className={classes.canceled} />;
    default:
      return <DefaultChip label={status} {...props} />;
  }
};
