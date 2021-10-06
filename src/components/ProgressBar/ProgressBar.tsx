import React, { FC } from 'react';
import { Box, BoxProps } from '../Box';

export type ProgressBarProps = {
  percent: number;
  height?: string;
  width?: number | string;
  borderRadius?: number;
  bg?: string;
  bar?: string;
};

export const ProgressBar: FC<ProgressBarProps> = ({
  percent = 0,
  height = '8px',
  width = '100%',
  borderRadius = 100,
  bg = 'brandLightest',
  bar = 'brandMain',
  ...restProps
}) => {
  return (
    <Box
      variant="basic"
      bg={bg}
      radius="m"
      height={height}
      width={width}
      padding='0px'
      {...restProps}
    >
      <Box
        variant="raw"
        bg={bar}
        radius="m"
        height={height}
        width={`${percent}%`}
      />
    </Box>
  );
};
