import { FC } from 'react';

import { Flex } from '../Flex';
import { Box } from '../Box';
import { Text } from '../Text';
import { Select } from '../Select';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { polyIcons } from '../../theme/icons';
import { TablePaginationProps } from './TableTypes';

export const TablePagination: FC<TablePaginationProps> = ({
  canPreviousPage,
  canNextPage,
  nextPage,
  previousPage,
  setPageSize,
  totalRows,
  pageIndex,
  pageSize,
  pageSizes,
  pageCount,
  gotoPage,
  label = 'Rows per page',
}) => {
  // const buttonStyles = { minWidth: 50, padding: 0 };

  return (
    <Flex variant="raw" justify="end" align="center" margin="m 0 0 0">
      {pageSizes && setPageSize && (
        <Flex variant="raw" margin="0 xxl 0 0" align="center">
          <Text as="span" variant="b2m" color="gray2" margin="0 s 0 0">
            {label}
          </Text>
          <Select
            variant="basic"
            options={pageSizes.map((size: number) => ({
              label: String(size),
              value: String(size),
            }))}
            value={{
              label: String(pageSize),
              value: String(pageSize),
            }}
            onChange={(value: number) => {
              setPageSize(value);
            }}
            noIcon
          />
        </Flex>
      )}

      <Box variant="raw" margin="0 xxl 0 0">
        <Text as="span" variant="b2m" color="gray1">
          {`${pageIndex * pageSize + 1}-${
            totalRows
              ? Math.min(totalRows, (pageIndex + 1) * pageSize)
              : (pageIndex + 1) * pageSize
          }${totalRows ? ` of ${totalRows}` : ''}`}
        </Text>
      </Box>

      <Flex variant="raw" margin="0 s 0 0">
        {gotoPage && pageCount && (
          <Button
            variant="tertiary"
            // style={buttonStyles}
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            <Icon
              variant="basic"
              icon={polyIcons.ChevronLeft}
              size="24px"
              color="gray3"
            />
            <Icon
              variant="basic"
              icon={polyIcons.ChevronLeft}
              size="24px"
              color="gray3"
              margin="0 0 0 -17px"
            />
          </Button>
        )}

        <Button
          variant="tertiary"
          // style={buttonStyles}
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          <Icon
            variant="basic"
            icon={polyIcons.ChevronLeft}
            size="24px"
            color="gray3"
          />
        </Button>

        <Button
          variant="tertiary"
          // style={buttonStyles}
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          <Icon
            variant="basic"
            icon={polyIcons.ChevronRight}
            size="24px"
            color="gray3"
          />
        </Button>

        {gotoPage && pageCount && (
          <Button
            variant="tertiary"
            // style={buttonStyles}
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <Icon
              variant="basic"
              icon={polyIcons.ChevronRight}
              size="24px"
              color="gray3"
              margin="0 -17px 0 0"
            />
            <Icon
              variant="basic"
              icon={polyIcons.ChevronRight}
              size="24px"
              color="gray3"
            />
          </Button>
        )}
      </Flex>
    </Flex>
  );
};
