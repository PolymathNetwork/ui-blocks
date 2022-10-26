import { Fragment } from 'react';
import { Box } from '../Box';
import { Flex } from '../Flex';
import { Text } from '../Text';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { TableBatchActionsProps } from './TableTypes';

export const TableBatchActions = ({
  batchActions,
  showBatchActions,
  totalSelectedRows,
  selectedData,
  selectedRowIndices,
  refresh,
  lastUpdate,
  isLoading,
}: TableBatchActionsProps) => {
  const label = (str = '') =>
    str
      .replace('{0}', `${totalSelectedRows}`)
      .replace('{s}', totalSelectedRows === 1 ? '' : 's');

  return (
    <Flex variant="raw">
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
          <Fragment key={`batchAction${index + 1}Fragment`}>
            {action.isRefresh && lastUpdate && (
              <Box
                variant="raw"
                key={`batchAction${index + 1}LastUpdate`}
                margin="0 0 0 4px"
              >
                <Text as="span" variant="b3" color="gray.1">
                  {lastUpdate}
                </Text>
              </Box>
            )}
            <Box variant="raw" key={`batchAction${index + 1}`} margin="0 0 0 s">
              <Button
                variant="primary"
                onClick={() => {
                  if (refresh && action.isRefresh) refresh();
                  else if (action.click)
                    action.click(selectedData, selectedRowIndices);
                }}
                {...action.buttonProps}
              >
                {action.icon && (
                  <Icon
                    variant="basic"
                    icon={action.icon}
                    size="15px"
                    color="brandMain"
                    margin="-2px s 0 0"
                  />
                )}
                {action.buttonProps &&
                action.buttonProps.variant === 'tertiary' ? (
                  <Text as="span" variant="b2" color="brandMain">
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
