/* eslint-disable react/display-name */

import { Row, CellProps } from 'react-table';

import { Flex } from '../Flex';
import { Box } from '../Box';
import { TableCheckbox } from './TableCheckbox';
import { Icon } from '../Icon';
import { polyIcons } from '../../theme/icons';
import {
  TableRowActionType,
  TableRowActionsProps,
  ToggleAllRowsSelectedProps,
} from './TableTypes';
import { Tooltip } from '../Tooltip';

interface ExtendedRow extends Row<Record<string, any>> {
  getToggleRowSelectedProps: () => any;
}

export const TableRowActions = ({
  hooks,
  selectable,
  setShowBatchActions,
  rowActions,
  subRow,
  setSkipTableReset,
  rowsIndexesCheckboxesDisabled,
  rowsIndexesCheckboxesHidden,
}: TableRowActionsProps) => {
  hooks.visibleColumns.push((cols: any) => [
    ...(selectable
      ? [
          {
            id: 'selection',
            width: 30,
            Header: ({
              getToggleAllRowsSelectedProps,
            }: {
              getToggleAllRowsSelectedProps: () => ToggleAllRowsSelectedProps;
            }) => (
              <TableCheckbox
                {...getToggleAllRowsSelectedProps()}
                setShowBatchActions={setShowBatchActions}
              />
            ),
            Cell: ({ row }: CellProps<any>) =>
              rowsIndexesCheckboxesHidden?.includes(row.index) ? null : (
                <TableCheckbox
                  {...(row as ExtendedRow).getToggleRowSelectedProps()}
                  {...(rowsIndexesCheckboxesDisabled?.includes(row.index) && {
                    disabled: true,
                    checked: false,
                  })}
                />
              ),
          },
        ]
      : []),
    ...cols,
    ...(rowActions
      ? [
          {
            id: 'action',
            width: 30,
            Cell: ({ row }: CellProps<Record<string, any>>) => (
              <Flex variant="raw" justify="end">
                {rowActions.map((rowAction: TableRowActionType) => {
                  const showTooltip = rowAction.showTooltip
                    ? rowAction?.showTooltip(row.original)
                    : true;
                  const isDisabled = rowAction.disabled
                    ? rowAction.disabled(row.original, row.index)
                    : false;
                  const RowActionWrapper = (props: any) =>
                    isDisabled && rowAction.disabledTooltip && showTooltip ? (
                      <Tooltip {...props} />
                    ) : (
                      <Box {...props} />
                    );
                  return (
                    <Box variant="raw" key={rowAction.id} margin="0 0 0 s">
                      <RowActionWrapper
                        {...(rowAction.disabledTooltip
                          ? {
                              content: rowAction.disabledTooltip(
                                row.original,
                                row.index,
                              ),
                            }
                          : {})}
                      >
                        <rowAction.Content
                          {...rowAction.ContentProps}
                          className={
                            rowAction.onlyShowOnHover ? 'showOnHover' : null
                          }
                          onClick={() => {
                            if (
                              !rowAction.disabled ||
                              (rowAction.disabled &&
                                !rowAction.disabled(row.original, row.index))
                            ) {
                              setSkipTableReset(true);
                              rowAction.action(row.original, row.index);
                              setTimeout(() => {
                                setSkipTableReset(false);
                              }, 300);
                            }
                          }}
                          disabled={isDisabled}
                        >
                          {rowAction.ContentChildren &&
                            (rowAction.ContentChildren instanceof Function
                              ? rowAction.ContentChildren(row.original)
                              : rowAction.ContentChildren)}
                        </rowAction.Content>
                      </RowActionWrapper>
                    </Box>
                  );
                })}
              </Flex>
            ),
          },
        ]
      : []),
    ...(subRow
      ? [
          {
            id: 'expansion',
            width: 30,
            Cell: ({ row }: any) => (
              <span {...row.getToggleRowExpandedProps()}>
                <Icon
                  variant="basic"
                  icon={
                    row.isExpanded
                      ? polyIcons.ChevronDown
                      : polyIcons.ChevronLeft
                  }
                  size="24px"
                  color="gray3"
                />
              </span>
            ),
          },
        ]
      : []),
  ]);
};
