import { useState, Fragment, useMemo, useCallback, useEffect } from 'react';
import {
  useTable,
  useSortBy,
  useRowSelect,
  usePagination,
  useExpanded,
} from 'react-table';

import { Flex } from '../Flex';
import { Box } from '../Box';
import { Text } from '../Text';
import { Icon } from '../Icon';
// import { Loading } from '../Loading';
import { polyIcons } from '../../theme';
import { TablePagination } from './TablePagination';
import { TableBatchActions } from './TableBatchActions';
import { TableColumnEnhanced, TableProps, TableRowCell } from './TableTypes';
import { TableEditableCell } from './TableEditableCell';
import { TableRowActions } from './TableRowActions';
import * as sc from './styles';

export function TableBasic({
  title,
  empty,
  columns,
  data = [],
  updateData,
  batchActions,
  rowActions,
  subRow,
  defaultSort,
  sortable,
  selectable,
  pageSize: pageSizeProp,
  pageSizes,
  canSkipPage,
  isLoading,
  refresh,
  lastUpdate,
  noHeader,
  onRowClick,
  getCustomHeaderDefaultColumnProperties,
  getDefaultCellProperties: getCustomCellDefaultColumnProperties,
  getCustomRowProperties,
  rowsIndexesCheckboxesDisabled,
  rowsIndexesCheckboxesHidden,
  paginationLabel,
  selectionRowCellStyle,
  maxWidth,
  onSelect,
  initialSelectedRowIndices,
}: TableProps) {
  const hasData = data.length > 0;
  const paginate = pageSizeProp && pageSizeProp > 1;
  const [skipTableReset, setSkipTableReset] = useState(false);
  const [showBatchActions, setShowBatchActions] = useState(false);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    setPageSize,
    pageCount,
    gotoPage,
    toggleRowSelected,
    state: { pageIndex, pageSize, selectedRowIds },
  } = useTable(
    {
      data,
      columns,
      autoResetPage: !skipTableReset,
      autoResetSortBy: !skipTableReset,
      // autoResetSelectedRows: !skipTableReset,
      initialState: {
        ...(defaultSort
          ? {
              sortBy: [
                {
                  id: defaultSort.accessor,
                  desc: defaultSort.desc || false,
                },
              ],
            }
          : {}),
        pageIndex: 0,
        ...(paginate ? { pageSize: pageSizeProp } : {}),
      },
    } as any,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect,
    (hooks) =>
      TableRowActions({
        hooks,
        selectable,
        setShowBatchActions,
        rowActions,
        subRow,
        setSkipTableReset,
        rowsIndexesCheckboxesDisabled,
        rowsIndexesCheckboxesHidden,
      }),
  ) as any;

  const selectedRowIndices = Object.keys(selectedRowIds);
  const totalSelectedRows = useMemo(
    () =>
      selectedRowIndices.filter((index) => {
        const indexAsNumber = parseInt(index, 10);
        const disabled = rowsIndexesCheckboxesDisabled?.includes(indexAsNumber);
        const hidden = rowsIndexesCheckboxesHidden?.includes(indexAsNumber);

        return !disabled && !hidden;
      }).length,
    [selectedRowIndices, rowsIndexesCheckboxesDisabled],
  );
  const selectedData = data.filter((entry: any, index: number) =>
    selectedRowIndices.includes(`${index}`),
  );
  const isRowSelected = useCallback(
    (row: any, index: number) => {
      const disabled = rowsIndexesCheckboxesDisabled?.includes(index);
      const hidden = rowsIndexesCheckboxesHidden?.includes(index);

      return row.isSelected && !disabled && !hidden;
    },
    [rowsIndexesCheckboxesDisabled, rowsIndexesCheckboxesHidden],
  );

  useEffect(() => {
    if (initialSelectedRowIndices) {
      initialSelectedRowIndices.forEach((index) => {
        toggleRowSelected(index, true);
      });
    }
  }, [initialSelectedRowIndices]);

  useEffect(() => {
    if (onSelect) onSelect(selectedData);
  }, [selectedData.length]);

  const InnerWrapper = maxWidth ? sc.TableInnerWrapper : Fragment;

  return (
    <sc.TableWrapper>
      {(title || (!!batchActions && batchActions.length > 0)) && (
        <Flex variant="basic" justify="spaced" margin="0 0 32px 0">
          <Box variant="basic">{title}</Box>
          <Box variant="raw">
            {batchActions && batchActions.length > 0 && (
              <TableBatchActions
                variant="raw"
                batchActions={batchActions}
                showBatchActions={showBatchActions}
                totalSelectedRows={totalSelectedRows}
                selectedData={selectedData}
                selectedRowIndices={selectedRowIndices}
                refresh={refresh}
                lastUpdate={lastUpdate}
                isLoading={isLoading}
              />
            )}
          </Box>
        </Flex>
      )}

      {isLoading ? (
        <Flex variant="raw" justify="center" margin="l 0">
          {/* <Loading /> */}
          Loading...
        </Flex>
      ) : hasData ? (
        <InnerWrapper>
          <sc.Table {...getTableProps()}>
            {!noHeader && (
              <sc.TableHeader>
                {headerGroups.map((headerGroup: any, rowIndex: number) => (
                  <sc.TableRow
                    key={`headerRow${rowIndex}`}
                    {...headerGroup.getHeaderGroupProps()}
                    {...(rowIndex === 0 ? { className: 'hide' } : {})}
                  >
                    {headerGroup.headers.map(
                      (column: TableColumnEnhanced, colIndex: number) => (
                        <sc.TableColumnHeader
                          key={`headerRow${rowIndex}Column${colIndex}`}
                          {...column.getHeaderProps(
                            sortable
                              ? column.getSortByToggleProps()
                              : undefined,
                          )}
                          {...(getCustomHeaderDefaultColumnProperties &&
                            getCustomHeaderDefaultColumnProperties())}
                          {...(column.getCustomHeaderProperties &&
                            column.getCustomHeaderProperties())}
                        >
                          <Text
                            variant="span"
                            format="b2m"
                            color={column.isSorted ? 'brandMain' : 'gray.2'}
                          >
                            {column.render('Header')}
                            <span
                              dangerouslySetInnerHTML={{
                                __html: column.isSorted
                                  ? column.isSortedDesc
                                    ? ' &darr;'
                                    : ' &uarr;'
                                  : '',
                              }}
                            />
                          </Text>
                        </sc.TableColumnHeader>
                      ),
                    )}
                  </sc.TableRow>
                ))}
              </sc.TableHeader>
            )}
            <sc.TableBody {...getTableBodyProps()}>
              {(paginate ? page : rows).map((row: any, rowIndex: number) => {
                prepareRow(row);
                return (
                  <Fragment key={`bodyRow${rowIndex}Fragment`}>
                    <sc.TableRow
                      key={`bodyRow${rowIndex}`}
                      {...row.getRowProps()}
                      {...(isRowSelected(row, rowIndex)
                        ? { className: 'selected' }
                        : {})}
                      {...(onRowClick
                        ? {
                            onClick: () => onRowClick(row.original, rowIndex),
                          }
                        : {})}
                      paginate={paginate}
                      {...(getCustomRowProperties &&
                        getCustomRowProperties(rowIndex))}
                    >
                      {row.cells.map((cell: TableRowCell, colIndex: number) => {
                        return (
                          <sc.TableColumn
                            key={`bodyRow${rowIndex}Column${colIndex}`}
                            {...{
                              ...cell.getCellProps(),
                              ...(getCustomCellDefaultColumnProperties &&
                                getCustomCellDefaultColumnProperties()),
                              ...(cell.column.getCustomCellProperties &&
                                cell.column.getCustomCellProperties(rowIndex)),
                              ...(cell.column.id === 'selection' &&
                                selectionRowCellStyle),
                            }}
                            {...(cell.column.width
                              ? { width: cell.column.width }
                              : {})}
                          >
                            {cell.column.id === 'selection' ||
                            cell.column.id === 'deletion' ? (
                              cell.render('Cell')
                            ) : (
                              <TableEditableCell
                                cell={cell}
                                data={data}
                                updateData={updateData}
                                setSkipTableReset={setSkipTableReset}
                              />
                            )}
                          </sc.TableColumn>
                        );
                      })}
                    </sc.TableRow>
                    {subRow && row.isExpanded && (
                      <sc.TableRow key={`bodyRow${rowIndex}SubRow`}>
                        <sc.TableColumn colSpan={row.cells.length}>
                          {subRow(row.original, row.index) as any}
                        </sc.TableColumn>
                      </sc.TableRow>
                    )}
                  </Fragment>
                );
              })}
            </sc.TableBody>
          </sc.Table>
        </InnerWrapper>
      ) : (
        <Flex variant="raw" justify="center" dir="column" margin="l 0 m 0">
          {empty && empty.icon === false
            ? null
            : (empty && empty.icon) || (
                <Icon
                  variant="circle"
                  icon={polyIcons.AccountGroup}
                  size="48px"
                  bg="gray4"
                  color="gray3"
                />
              )}
          {empty && empty.copy === false
            ? null
            : (empty && empty.copy) || (
                <Text variant="span" color="gray2" margin="m 0 0 0">
                  No data
                </Text>
              )}
        </Flex>
      )}

      {hasData && paginate && (
        <TablePagination
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          nextPage={nextPage}
          previousPage={previousPage}
          setPageSize={setPageSize}
          totalRows={rows.length}
          pageIndex={pageIndex}
          pageSize={pageSize}
          pageSizes={pageSizes}
          {...(canSkipPage
            ? {
                pageCount,
                gotoPage,
              }
            : {})}
          label={paginationLabel}
        />
      )}
    </sc.TableWrapper>
  );
}
