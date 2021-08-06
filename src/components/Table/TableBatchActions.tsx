import { FC, Fragment } from 'react';
import { Box } from '../Box';
import { Flex } from '../Flex';
import { Text } from '../Text';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { TableBatchActionsProps } from './TableTypes';

export const TableBatchActions: FC<TableBatchActionsProps> = ({
  batchActions,
  showBatchActions,
  totalSelectedRows,
  selectedData,
  selectedRowIndices,
  refresh,
  lastUpdate,
  isLoading,
}) => {
  const label = (str = '') =>
    str
      .replace('{0}', `${totalSelectedRows}`)
      .replace('{s}', totalSelectedRows === 1 ? '' : 's');

  return (
    <Flex>
      {batchActions.map((action, index: number) => {
        if (
          !(
            action.condition === true ||
            (action.condition === undefined &&
              (!action.needsSelection ||
                (action.needsSelection &&
                  showBatchActions &&
                  totalSelectedRows > 0)))
          ) ||
          (!action.showWhenLoading && isLoading)
        ) {
          return null;
        }

        return (
          <Fragment key={`batchAction${index}Fragment`}>
            {action.isRefresh && lastUpdate && (
              <Box key={`batchAction${index}LastUpdate`} ml="4px">
                <Text variant="b3" color="gray.1">
                  {lastUpdate}
                </Text>
              </Box>
            )}
            <Box key={`batchAction${index}`} ml="s">
              <Button
                onClick={() => {
                  if (refresh && action.isRefresh) refresh();
                  else if (action.click)
                    action.click(selectedData, selectedRowIndices);
                }}
                {...action.buttonProps}
              >
                {action.icon && (
                  <Icon
                    Asset={action.icon}
                    width={15}
                    height={15}
                    color="brandMain"
                    mt="-2px"
                    mr="s"
                  />
                )}
                {action.buttonProps &&
                action.buttonProps.variant === 'ghost' ? (
                  <Text variant="b2" color="brandMain">
                    {label(action.label)}
                  </Text>
                ) : (
                  label(action.label)
                )}
              </Button>
            </Box>
          </Fragment>
        );
      })}
    </Flex>
  );
};
