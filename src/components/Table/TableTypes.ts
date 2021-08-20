import { ComponentProps, JSXElementConstructor } from 'react';

import { ButtonProps } from '../Button';
import { BoxProps } from '../Box';
// import { CheckboxProps } from '../Checkbox';
import { CSSPropertiesExtended } from '../../theme/types';

export interface TableColumnDefinition<
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any> = any
> {
  Header?: JSX.Element | string;
  accessor: string;
  footer?: (index: number) => JSX.Element | null | undefined;
  editor?: T;
  editorProps?: ComponentProps<T>;
  getCustomHeaderProperties?: () => CSSPropertiesExtended;
  getCustomCellProperties?:
    | ((rowIndex: number) => CSSPropertiesExtended | null | undefined)
    | null;
  width?: string;
  id?: string;
}

export interface TableColumnEnhanced<
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any> = any
> extends TableColumnDefinition<T> {
  getHeaderProps: any;
  getSortByToggleProps?: any;
  isSorted?: boolean;
  isSortedDesc?: boolean;
  render: (name: string) => any;
}

export interface TableRowProps {
  paginate?: boolean;
  borderBottom?: string;
}

export interface FetchDataParams {
  start: number;
}

export interface TableProps extends BoxProps {
  columns: {
    Header: string;
    columns: TableColumnDefinition[];
  }[];
  data?: any;
  fetchData?: (parameters: FetchDataParams) => any;
  resetOn?: any;
  title?: any;
  empty?: { icon?: any; copy?: any };
  batchActions?: TableBatchActionType[];
  rowActions?: TableRowActionType[];
  updateData?: any;
  subRow?: (rowData: any, rowIndex: number) => void;
  defaultSort?: { accessor: string; desc?: boolean };
  sortable?: boolean;
  selectable?: boolean;
  pageStart?: number;
  pageSize?: number;
  pageSizes?: number[];
  canSkipPage?: boolean;
  isLoading?: boolean;
  refresh?: () => void;
  onRefresh?: () => void;
  onSelect?: (selectedData: any) => void;
  lastUpdate?: string;
  noHeader?: boolean;
  onRowClick?: (rowData: any, rowIndex: number) => void;
  getCustomHeaderDefaultColumnProperties?: () => CSSPropertiesExtended;
  getDefaultCellProperties?: () => CSSPropertiesExtended;
  getCustomRowProperties?: (index: number) => TableRowProps;
  rowsIndexesCheckboxesDisabled?: number[];
  rowsIndexesCheckboxesHidden?: number[];
  paginationLabel?: string;
  selectionRowCellStyle?: CSSPropertiesExtended;
  setPageSize?: (value: number) => void;
  initialSelectedRowIndices?: number[];
}

export interface TableBatchActionType {
  icon?: any;
  label?: string;
  buttonProps?: ButtonProps;
  needsSelection?: boolean;
  isRefresh?: boolean;
  condition?: boolean;
  click?: (selectedData: any, selectedIndices: string[]) => void;
  showWhenLoading?: boolean;
}

export interface TableBatchActionsProps extends BoxProps {
  batchActions: TableBatchActionType[];
  showBatchActions: boolean;
  totalSelectedRows: number;
  selectedData: any;
  selectedRowIndices: string[];
  refresh?: () => void;
  lastUpdate?: string;
  isLoading?: boolean;
}

export interface TableEditableCellProps {
  cell: any;
  data: any;
  updateData: any;
  setSkipTableReset: any;
}

export interface TablePaginationProps {
  canPreviousPage: boolean;
  canNextPage: boolean;
  nextPage: any;
  previousPage: any;
  setPageSize?: any;
  totalRows?: number;
  pageIndex: number;
  pageSize: number;
  pageSizes?: number[];
  pageCount?: number;
  gotoPage?: any;
  label?: string;
}

export interface TableRowActionsProps {
  hooks: any;
  selectable?: boolean;
  setShowBatchActions: any;
  rowActions?: TableRowActionType[];
  subRow?: (rowData: any, rowIndex: number) => void;
  setSkipTableReset: any;
  rowsIndexesCheckboxesDisabled?: number[];
  rowsIndexesCheckboxesHidden?: number[];
}

// export interface TableCheckboxProps extends CheckboxProps {
//   onChange: any;
//   setShowBatchActions: any;
//   indeterminate: boolean;
// }
export interface TableCheckboxProps {
  onChange: any;
  setShowBatchActions: any;
  indeterminate: boolean;
  [key: string]: any;
}

export interface TableRowActionType {
  id: string;
  action: (rowData: any, rowIndex: number) => void;
  Content: any;
  onlyShowOnHover?: boolean;
  ContentProps?: any;
  ContentChildren?: ((rowData: any) => string) | string;
  disabled?: (rowData: any, rowIndex: number) => boolean;
  showTooltip?: (rowData: any) => boolean;
  disabledTooltip?: (rowData: any, rowIndex: number) => string;
}

export interface TableRowCell {
  column: TableColumnEnhanced;
  getCellProps: () => any;
  render: (name: string) => any;
}

export interface ToggleAllRowsSelectedProps {
  checked: boolean;
  indeterminate: boolean;
  onChange: (e: any) => void;
  style: React.StyleHTMLAttributes<any>;
  title: string;
}
