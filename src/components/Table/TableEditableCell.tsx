import { FC, useState, useEffect } from 'react';

import { Text } from '../Text';
import { Icon } from '../Icon';
import { DatePicker } from '../DatePicker';
import { Select } from '../Select';
import { TableEditableCellProps } from './TableTypes';
import { polyIcons } from '../../themeSettings/icons';

export const TableEditableCell: FC<TableEditableCellProps> = ({
  cell,
  data,
  updateData,
  setSkipTableReset,
}: any) => {
  const [currentValue, setCurrentValue] = useState(cell.value);
  const [isEditting, setIsEditting] = useState(false);
  const isOnClickEditor =
    cell.column.editor &&
    (cell.column.editor.name === DatePicker.name ||
      cell.column.editor.name === Select.name);

  const editCell = () => {
    if (cell.column.editor) setIsEditting(true);
  };

  const saveNewData = (value?: any) => {
    setSkipTableReset(true);
    updateData(
      data.map((row: any, index: number) => {
        if (index === cell.row.index) {
          return {
            ...data[index],
            [cell.column.id]: value !== undefined ? value : currentValue,
          };
        }
        return row;
      }),
    );
    setIsEditting(false);
    setTimeout(() => {
      setSkipTableReset(false);
    }, 300);
  };

  const handleChange = (e: any) => {
    const newValue = e && e.target ? e.target.value : e;
    setCurrentValue(newValue);
    if (isOnClickEditor) saveNewData(newValue);
  };

  const handleBlur = () => {
    if (!isOnClickEditor) saveNewData();
  };

  useEffect(() => {
    if (cell.value !== currentValue) {
      setCurrentValue(cell.value);
    }
  }, [cell.value]);

  return isEditting ? (
    <cell.column.editor
      value={currentValue}
      onChange={handleChange}
      onBlur={handleBlur}
      autoFocus
      {...cell.column.editorProps}
    />
  ) : (
    <>
      <Text
        variant="span"
        format="b2"
        color="gray1"
        {...{ onClick: editCell }}
        {...(cell.column.editor ? { className: 'canEdit' } : {})}
      >
        {cell.column.formatter
          ? cell.column.formatter(cell.value, cell.row.index)
          : cell.render('Cell')}
      </Text>
      {cell.column.editor && (
        <Icon
          variant="basic"
          icon={polyIcons.PencilOutline}
          size="16px"
          color="gray3"
          margin="-2px 0 0 s"
        />
      )}
      {cell.column.footer && <div>{cell.column.footer(cell.row.index)}</div>}
    </>
  );
};
