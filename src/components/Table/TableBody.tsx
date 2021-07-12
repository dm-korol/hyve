import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '../../theme';
import { Row, TableBodyPropGetter, TableBodyProps } from 'react-table';

const useStyles = makeStyles((theme: ITheme) => ({
  row: {
    padding: '30px',
    color: theme.palette.text.primary,
  },
}));

interface Props {
  getTableBodyProps: (propGetter?: TableBodyPropGetter<any>) => TableBodyProps;
  rows: Row[];
  prepareRow: (row: Row) => void;
}

export const TableBody = ({ getTableBodyProps, rows, prepareRow }: Props) => {
  const classes = useStyles();

  return (
    <tbody {...getTableBodyProps()}>
      {rows.map((row) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map((cell) => {
              return (
                <td {...cell.getCellProps()} className={classes.row}>
                  {cell.render('Cell')}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
