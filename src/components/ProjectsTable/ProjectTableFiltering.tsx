import { TableFilterComponentProps } from '../../interfaces';
import { ChipStatuses, StatusChipFactory } from '../StatusChipFactory';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '../../theme';

const useStyles = makeStyles((theme: ITheme) => ({
  quickFiltersContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: 400,
    marginBottom: 30,
  },
  clickable: {
    cursor: 'pointer',
  },
  quickFiltersHeader: {
    lineHeight: '30px',
  },
}));

export const ProjectsTableFiltering = (props: TableFilterComponentProps) => {
  const { applyFiltering, clearFiltering } = props;
  const classes = useStyles();

  return (
    <div className={classes.quickFiltersContainer}>
      <div className={classes.quickFiltersHeader}>Quick filters:</div>
      {Object.values(ChipStatuses)
        .filter((status) => status !== 'Canceled')
        .map((status) => (
          <StatusChipFactory
            className={classes.clickable}
            status={status}
            key={`filter-chip-${status}`}
            onClick={() => applyFiltering((el: { status: ChipStatuses }) => el.status === status)}
          />
        ))}
      <StatusChipFactory
        className={classes.clickable}
        status={'Clear'}
        onClick={() => clearFiltering()}
      />
    </div>
  );
};
