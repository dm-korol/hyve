import React, { useEffect, useState } from 'react';
import { useTable, useSortBy } from 'react-table';
import { TableFilterComponentProps } from '../../interfaces';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';

// I couldn't find a good option to make interface that
// will be simultaneously part of props and another interface
interface TableItemType extends Object {}

interface ColumnDef {
  Header: string;
  accessor?: string;
  Cell?: (cellInfo: any) => JSX.Element;
}

interface Props<TableItemType> {
  tableData: TableItemType[];
  columns: ColumnDef[];
  FilterComponent?: (props: TableFilterComponentProps) => JSX.Element;
}

export const Table = ({ tableData, columns, FilterComponent }: Props<TableItemType>) => {
  const [originalData, setOriginalData] = useState<TableItemType[]>([]);
  const [data, setData] = useState<TableItemType[]>([]);

  useEffect(() => {
    setData(tableData);
    setOriginalData(tableData);
  }, []);

  const handleApplyFiltering = (filterFunc: (predicate: TableItemType) => boolean) => {
    setData(originalData.filter(filterFunc));
  };

  const handleClearFiltering = () => {
    setData(originalData);
  };

  const defaultColumnValues = {
    Cell: ({ cell: { value } }: any) => <div>{value || '—'}</div>,
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    // @ts-ignore
    { columns: columns, data, defaultColumn: defaultColumnValues },
    useSortBy
  );

  return (
    <>
      {FilterComponent && (
        <FilterComponent
          applyFiltering={handleApplyFiltering}
          clearFiltering={handleClearFiltering}
        />
      )}

      <table {...getTableProps()}>
        <TableHead headerGroups={headerGroups} />
        <TableBody getTableBodyProps={getTableBodyProps} rows={rows} prepareRow={prepareRow} />
      </table>
    </>
  );
};
