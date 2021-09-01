import { useState, useEffect } from 'react';

import { TableBasic } from './TableBasic';
import { TableProps, TablePaginationProps } from './TableTypes';
import { TablePagination } from './TablePagination';
import { Box } from '../Box';

export const TableSubset = ({
  data: dataProp,
  fetchData,
  pageSize: pageSizeProp,
  pageSizes,
  pageStart: pageStartProp,
  canSkipPage,
  resetOn,
  isLoading: isLoadingProp,
  setPageSize,
  paginationLabel,
  onRefresh,
  ...tableProps
}: TableProps) => {
  const pageSize = pageSizeProp || 10;
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date().toLocaleString());
  const [currentData, setCurrentData] = useState<any>(
    dataProp ? dataProp.data : [],
  );
  const [canPreviousPage, setCanPreviousPage] = useState(
    pageStartProp !== undefined && pageStartProp > 0,
  );
  const [canNextPage, setCanNextPage] = useState(
    dataProp ? dataProp.next !== null : true,
  );
  const [currentPageIndex, setCurrentPageIndex] = useState(
    pageStartProp !== undefined ? pageStartProp / pageSize : 0,
  );
  const [pageStart, setPageStart] = useState(
    pageStartProp !== undefined ? pageStartProp : currentPageIndex * pageSize,
  );
  const [dataCount, setDataCount] = useState(dataProp ? dataProp.count : 0);
  const getPageCount = (count: number) => Math.ceil(count / pageSize);

  const setTableState = (newData: any) => {
    const { data, count, next } = newData;
    if (data) setCurrentData(data);
    if (count) setDataCount(count);
    setCanNextPage(next !== null);
    if (dataProp) setIsLoading(false);
  };

  const getData = async (start: number) => {
    if (!fetchData) {
      return;
    }

    setIsLoading(true);
    const fetchResult = await fetchData({ start });
    if (!dataProp) {
      setTableState(fetchResult);
      setIsLoading(false);
    }
  };

  const goToPage = (targetPage: number) => {
    setCurrentPageIndex(targetPage);
    setPageStart(targetPage * pageSize);
    getData(targetPage * pageSize);
    if (targetPage === 0) {
      setCanPreviousPage(false);
      setCanNextPage(true);
    } else {
      setCanPreviousPage(true);
    }
  };

  const previousPage = () => {
    goToPage(currentPageIndex - 1);
    setCanNextPage(true);
  };

  const nextPage = () => {
    goToPage(currentPageIndex + 1);
  };

  const refresh = () => {
    getData(pageStart);
    setLastUpdate(new Date().toLocaleString());
    if (onRefresh) onRefresh();
  };

  const reset = () => {
    setDataCount(0);
    setCurrentPageIndex(0);
    setCanPreviousPage(false);
    setCanNextPage(false);
    setCurrentData([]);
    setLastUpdate(new Date().toLocaleString());
    setPageStart(0);
    getData(0);
  };

  useEffect(() => {
    if (dataProp) setTableState(dataProp);
  }, [dataProp]);

  useEffect(() => {
    if (resetOn) reset();
  }, [resetOn]);

  const paginationProps: TablePaginationProps = {
    canPreviousPage,
    canNextPage,
    gotoPage: canSkipPage ? goToPage : null,
    nextPage,
    previousPage,
    totalRows: dataCount,
    pageIndex: currentPageIndex,
    pageSize,
    pageSizes,
    pageCount: getPageCount(dataCount),
    setPageSize,
    label: paginationLabel,
  };

  return (
    <>
      <TableBasic
        data={currentData}
        refresh={refresh}
        lastUpdate={lastUpdate}
        isLoading={isLoading || isLoadingProp}
        {...tableProps}
      />
      {pageSizeProp && !isLoading && !isLoadingProp && currentData.length > 0 && (
        <Box variant="raw" margin="l 0 0 0">
          <TablePagination {...paginationProps} />
        </Box>
      )}
    </>
  );
};
