import { useEffect, useMemo, useState } from 'react';
import moment from 'moment';

import { Table } from './Table';
import { TableRowActionType, TableBatchActionType } from './TableTypes';
import { Text } from '../Text';
import { Button } from '../Button';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { DatePicker } from '../DatePicker';
import { Input } from '../Input';
import { Select } from '../Select';
import * as polyIcons from '../../theme/icons';

export default {
  title: 'Polyblocks/Table',
  component: Table,
};

const randomDate = (start: Date, end: Date) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

const initialData = (count: number) =>
  Array.from({ length: count }).map((e, i) => ({
    did: `0x0000000000${i}`,
    expiry: randomDate(new Date(), new Date(2022, 11, 20)),
    amount: (Math.random() * 1000 * i).toFixed(2),
    accredited: Math.random() >= 0.5,
    subRow: `Lorem ipsum dolor sitamet... ${i}`,
  }));

export const Default = () => {
  const [data, setData] = useState(initialData(15));
  const columns = useMemo(
    () => [
      {
        Header: 'Claims',
        columns: [
          {
            Header: 'Identity (DID)',
            accessor: 'did',
            footer: (index: number) =>
              index === 4 ? (
                <Text variant="span" format="b3" color="red.0">
                  This identity (DID) is invalid. Please remove or edit the
                  address to continue
                </Text>
              ) : null,
            editor: Input,
            editorProps: {
              blurOnEnterKeyPress: true,
            },
          },
          {
            Header: 'Expiry',
            accessor: 'expiry',
            formatter: (date: Date | null) =>
              date === null ? 'No expiry' : moment(date).format('MM/DD/YYYY'),
            editor: DatePicker,
            editorProps: {
              noExpiryOption: true,
            },
          },
          {
            Header: 'Amount',
            accessor: 'amount',
            formatter: (amount: any) => Number(amount).toLocaleString(),
            editor: Input,
            editorProps: {
              blurOnEnterKeyPress: true,
            },
          },
          {
            Header: 'Accredited',
            accessor: 'accredited',
            formatter: (state: any) =>
              state ? (
                <Icon
                  variant="basic"
                  icon={polyIcons.CheckboxMarkedCircle}
                  size="22px"
                  color="success"
                />
              ) : (
                <Icon
                  variant="basic"
                  icon={polyIcons.MinusCircle}
                  size="26px"
                  color="gray3"
                  margin="0 0 0 -2px"
                />
              ),
            editor: Select,
            editorProps: {
              options: [
                {
                  label: 'Yes',
                  value: true,
                  icon: {
                    variant: 'basic',
                    icon: polyIcons.CheckboxMarkedCircle,
                    color: 'success',
                    margin: '0 0 0 5px',
                  },
                },
                {
                  label: 'No',
                  value: false,
                  icon: {
                    variant: 'basic',
                    icon: polyIcons.MinusCircle,
                    size: '26px',
                    margin: '0 0 0 3px',
                  },
                },
              ],
              styles: {
                menu: (provided: any) => ({
                  ...provided,
                  width: 120,
                }),
              },
            },
          },
        ],
      },
    ],
    [data],
  );
  const subRow = (rowData: any) => {
    return <Box variant="basic">{rowData.subRow}</Box>;
  };
  const batchDelete = (selectedData: any) => {
    const selectedDids = selectedData.map((entry: any) => entry.did);
    setData(data.filter((entry: any) => !selectedDids.includes(entry.did)));
  };
  const batchActions: TableBatchActionType[] = [
    {
      icon: polyIcons.DeleteOutline,
      label: 'Delete {0} item{s}',
      buttonProps: { variant: 'tertiary' },
      needsSelection: true,
      click: batchDelete,
    },
    {
      label: 'Custom Action',
      condition: data.length < 13,
      click: () => {
        alert('Clicked!'); // eslint-disable-line no-alert
      },
    },
  ];
  const pageSizes = [5, 10, 20, 30];
  const title = (
    <Text variant="span" format="b2m" color="gray.1">
      Table Demo
    </Text>
  );

  const rowActions: TableRowActionType[] = [
    {
      id: 'add',
      Content: Button,
      ContentProps: { variant: 'primary', size: 's' },
      action: (rowData, rowIndex) => {
        alert('Row Action ' + rowIndex); // eslint-disable-line no-alert
      },
      ContentChildren: 'Add',
      onlyShowOnHover: true,
      disabledTooltip: (rowData) => {
        console.log('-- rowData =', rowData); // eslint-disable-line no-console
        return 'This button is disabled.';
      },
      disabled: () => true,
    },
    {
      id: 'delete',
      Content: Button,
      ContentProps: {
        icon: polyIcons.DeleteOutline,
        width: '24px',
        color: 'gray3',
      },
      action: (rowData) => {
        setData(data.filter((entry: any) => entry.did !== rowData.did));
      },
      onlyShowOnHover: true,
    },
  ];

  const [selectedRowIndices, setSelectedRowIndices] = useState([1]);

  return (
    <>
      Selected indices: {JSON.stringify(selectedRowIndices)}
      <Table
        variant="raw"
        title={title}
        columns={columns}
        data={data}
        updateData={setData}
        batchActions={batchActions}
        rowActions={rowActions}
        subRow={subRow}
        sortable
        selectable
        pageSize={5}
        pageSizes={pageSizes}
        canSkipPage
        initialSelectedRowIndices={selectedRowIndices}
        onSelect={(selectedData) => {
          setSelectedRowIndices(
            selectedData.map((entry: any) => data.indexOf(entry)),
          );
        }}
        empty={{
          icon: (
            <Icon
              variant="circle"
              icon={polyIcons.Coins}
              size="48px"
              bg="gray4"
              color="gray3"
            />
          ),
          copy: (
            <Text variant="span" format="b3" margin="m 0 0 0">
              No Item Exist
            </Text>
          ),
        }}
      />
    </>
  );
};

const tableExpandableInitialDataGenerator = (count: number) =>
  Array.from({ length: count }).map((e, i) => ({
    did: [1, 2].includes(i) ? '' : `0x0000000000${i}`,
    provider: `0x0000000000${i}`,
    buyLockup: '30 Sep, 2020',
    accredited: Math.random() >= 0.5,
    subRow: `Lorem ipsum dolor sitamet... ${i}`,
  }));

const tableExpandableInitialData = tableExpandableInitialDataGenerator(10);

export const TableExpandable = () => {
  const [pageStart] = useState(0);
  const pageSize = 5;
  const [data, setData] = useState({
    data: [],
    count: 0,
    next: null,
  } as any);

  const fetchData = ({ start }: { start: number }) => {
    start = Math.min(start, tableExpandableInitialData.length - pageSize - 1);
    const newData = {
      data: tableExpandableInitialData.slice(start, start + pageSize),
      count: 10,
      next: start >= tableExpandableInitialData.length - 1 ? null : true,
    };

    setData(newData);
  };

  useEffect(() => {
    fetchData({ start: 0 });
  }, []);

  const getCustomHeaderProperties = () => ({
    borderBottom: `2px solid ${({ theme }: any) => theme.COLOR.gray4}`,
  });
  const getCustomRowProperties = (index: number) =>
    [0, 1].includes(index)
      ? {
          borderBottom: 'none',
        }
      : {
          borderBottom: `2px solid ${({ theme }: any) => theme.COLOR.gray4}`,
        };

  const getDefaultCellProperties = () => ({
    borderBottom: `2px solid ${({ theme }: any) => theme.COLOR.gray4}`,
  });

  const columns = useMemo(
    () => [
      {
        Header: 'Claims',
        columns: [
          {
            Header: 'Target Identity',
            accessor: 'did',
            getCustomCellProperties: () => ({
              borderBottom: 'none',
              borderRight: `2px solid ${({ theme }: any) => theme.COLOR.gray4}`,
            }),
            getCustomHeaderProperties: () => ({
              borderRight: `2px solid ${({ theme }: any) => theme.COLOR.gray4}`,
            }),
          },
          {
            Header: 'Provider',
            accessor: 'provider',
          },
          {
            Header: 'Buy Lockup',
            accessor: 'buyLockup',
          },
          {
            Header: 'Accredited',
            accessor: 'accredited',
            formatter: (state: any) =>
              state ? (
                <Icon
                  variant="basic"
                  icon={polyIcons.CheckboxMarkedCircle}
                  size="22px"
                  color="success"
                />
              ) : (
                <Icon
                  variant="basic"
                  icon={polyIcons.MinusCircle}
                  size="26px"
                  color="gray3"
                  margin="0 0 0 -2px"
                />
              ),
          },
        ],
      },
    ],
    [],
  );

  const batchActions: TableBatchActionType[] = [
    {
      icon: polyIcons.DeleteOutline,
      label: 'Delete {0} item{s}',
      buttonProps: { variant: 'tertiary' },
      needsSelection: true,
      click: () => {},
    },
  ];
  const pageSizes = [5, 10, 20, 30];
  const title = (
    <Text variant="span" format="b3">
      Table Expandable Demo
    </Text>
  );

  const rowActions: TableRowActionType[] = [
    {
      id: 'delete',
      Content: Button,
      ContentProps: {
        icon: polyIcons.DeleteOutline,
        size: '24px',
        color: 'gray3',
      },
      action: () => {},
      onlyShowOnHover: true,
    },
  ];

  return (
    <Table
      variant="raw"
      title={title}
      columns={columns}
      data={data}
      fetchData={fetchData}
      pageStart={pageStart}
      updateData={setData}
      batchActions={batchActions}
      rowActions={rowActions}
      sortable
      selectable
      pageSize={pageSize}
      pageSizes={pageSizes}
      empty={{
        icon: (
          <Icon
            variant="basic"
            icon={polyIcons.Coins}
            size="48px"
            bg="gray4"
            color="gray3"
          />
        ),
        copy: (
          <Text variant="span" format="b3" margin="m 0 0 0">
            No Item Exist
          </Text>
        ),
      }}
      getCustomHeaderDefaultColumnProperties={getCustomHeaderProperties}
      getDefaultCellProperties={getDefaultCellProperties}
      getCustomRowProperties={getCustomRowProperties}
      rowsIndexesCheckboxesDisabled={[0, 3, 5]}
      rowsIndexesCheckboxesHidden={[1, 2]}
      paginationLabel="Identities per page"
      selectionRowCellStyle={{
        borderBottom: 'none',
      }}
      setPageSize={() => {}}
    />
  );
};
