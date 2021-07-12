import React, { useMemo } from 'react';
import { MOCK_DATA } from './mock';
import { StatusChipFactory } from '../StatusChipFactory';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '../../theme';
import { Table } from '../Table';
import { ProjectsTableFiltering } from './ProjectTableFiltering';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme: ITheme) => ({
  header: {
    color: theme.palette.text.primary,
    fontWeight: 'bold',
  },
  row: {
    padding: '30px',
    color: theme.palette.text.primary,
  },
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

interface ColumnDef {
  Header: string;
  accessor?: string;
  Cell?: (cellInfo: any) => JSX.Element;
}

export const ProjectsTable = () => {
  const classes = useStyles();
  const router = useRouter();

  const handleOpenProjectDetails = (pid: string) => {
    router.push(`/dashboard/projects/${pid}`);
  };

  const columns: Array<ColumnDef> = useMemo(
    () => [
      {
        Header: 'Project ID',
        accessor: 'pid',
      },
      {
        Header: 'Project owner',
        accessor: 'owner',
      },
      {
        Header: 'Project name',
        accessor: 'project_name',
      },
      {
        Header: 'End date',
        accessor: 'end_date',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: (cellInfo: any) => <StatusChipFactory status={cellInfo.row.original.status} />,
      },
      {
        Header: 'Actions',
        Cell: (cellInfo: any) => (
          <div
            className={classes.clickable}
            onClick={() => handleOpenProjectDetails(cellInfo.row.original.pid)}>
            Details 🡕
          </div>
        ),
      },
    ],
    []
  );

  return (
    <>
      <Table tableData={MOCK_DATA} columns={columns} FilterComponent={ProjectsTableFiltering} />
    </>
  );
};
