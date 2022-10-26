import { TableBasic } from './TableBasic';
import { TableSubset } from './TableSubset';
import { TableProps } from './TableTypes';

export const Table = (props: TableProps) => {
  const { fetchData } = props;
  const TableComponent = fetchData ? TableSubset : TableBasic;
  return <TableComponent {...props} />;
};
