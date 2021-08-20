import { FC } from 'react';

import { TableBasic } from './TableBasic';
import { TableSubset } from './TableSubset';
import { TableProps } from './TableTypes';

export const Table: FC<TableProps> = (props) => {
  const { fetchData } = props;
  const TableComponent = fetchData ? TableSubset : TableBasic;
  return <TableComponent {...props} />;
};
