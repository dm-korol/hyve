import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from '../../theme';
import { HeaderGroup } from 'react-table';

const useStyles = makeStyles((theme: ITheme) => ({
  header: {
    color: theme.palette.text.primary,
    fontWeight: 'bold',
  },
}));

interface Props {
  headerGroups: HeaderGroup[];
}

export const TableHead = ({ headerGroups }: Props) => {
  const classes = useStyles();

  return (
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th
              // @ts-ignore
              {...column.getHeaderProps(column.getSortByToggleProps())}
              className={classes.header}>
              {column.render('Header')}
              <span>
                {
                  // @ts-ignore
                  column.isSorted
                    ? // @ts-ignore
                      column.isSortedDesc
                      ? ' 🔽'
                      : ' 🔼'
                    : ''
                }
              </span>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};
