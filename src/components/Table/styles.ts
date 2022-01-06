import styled from 'styled-components';

import { CSSPropertiesExtended } from '../../theme/types';
import { TableRowProps } from './TableTypes';

export const TableWrapper = styled.div`
  margin: 0;
  padding: 0;
`;

export const TableInnerWrapper = styled.div`
  margin: 0;
  padding: 0;
  max-width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  margin: 0;
  padding: 0;
  border-collapse: collapse;
  min-width: 100%;
`;

export const TableBody = styled.tbody`
  margin: 0;
  padding: 0;
`;

export const TableHeader = styled.thead`
  margin: 0;
  padding: 0;
`;

export const TableRow = styled.tr`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.COLOR.gray1};
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
  ${({ borderBottom: borderBottomProp }: TableRowProps) =>
    borderBottomProp
      ? `border-bottom: ${borderBottomProp};`
      : `border-bottom: 2px solid ${({ theme }: any) => theme.COLOR.gray4};`}

  ${({ paginate, borderBottom }: TableRowProps) =>
    paginate || borderBottom
      ? ''
      : `&:last-child {
          border-bottom: 0;
        }`}

  &.selected,
  &:hover {
    td {
      background-color: ${({ theme }) => theme.COLOR.gray6};
    }
  }

  &.hide {
    display: none;
  }

  &:hover {
    .showOnHover {
      opacity: 1;
      pointer-events: all;
    }
  }
`;

export const TableColumnHeader = styled.th(
  (props: CSSPropertiesExtended) => `
  margin: 0;
  padding: ${props.padding || '10px 15px'};
  text-align: ${props.textAlign || 'left'};
  color: ${({ theme }: any) => theme.COLOR.gray2};
  line-height: ${({ theme }: any) => theme.lineHeights.lessTight};
`,
);

export const TableColumn = styled.td(
  (props: CSSPropertiesExtended) => `
  margin: 0;
  padding: ${props.padding || '3px 15px'};
  white-space: nowrap;
  line-height: ${props.lineHeight || 'initial'};
  text-align: ${props.textAlign || 'left'};
  border-top: 2px solid ${props.theme.COLOR.gray5};
  border-bottom: 2px solid ${props.theme.COLOR.gray5};

  .canEdit {
    cursor: pointer;
  }

  .editIcon {
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    .editIcon {
      opacity: 1;
    }
  }

  .showOnHover {
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
  }
`,
);
