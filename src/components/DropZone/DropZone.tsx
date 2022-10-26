import { ComponentType, useState } from 'react';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';
import { Icon } from '../Icon';
import { Flex } from '../Flex';
import { BoxProps } from '../Box';
import { polyIcons } from '../../theme';

export type DropZoneProps = {
  icon?: ComponentType;
  onFileUpload: (file: File) => void;
};
type DropBoxProps = BoxProps & { bgImage: string | null };
const StyedBorder = styled.div(({ theme }) => ({
  width: '128px',
  height: '128px',
  padding: '1px',
  borderRadius: '100px',
  background: theme.COLOR.gray5,
  backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23${theme.COLOR.gray3.replace(
    '#',
    '',
  )}' stroke-width='3' stroke-dasharray='8%2c 8' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e")`,
  '&:hover': {
    background: theme.COLOR.gray4,
    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23${theme.COLOR.gray1.replace(
      '#',
      '',
    )}' stroke-width='3' stroke-dasharray='8%2c 8' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e")`,
    cursor: 'pointer',
  },
}));
const StyedFlex = styled(Flex)<DropBoxProps>(({ theme, bgImage }) => ({
  width: '126px',
  height: '126px',
  borderRadius: '100px',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.COLOR.gray5,
  backgroundImage: bgImage ? `url("${bgImage}")` : 'none',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  svg: {
    path: {
      fill: `transparent`,
      stroke: bgImage ? `transparent` : `${theme.COLOR.gray3}`,
    },
  },
  '&:hover': {
    background: theme.COLOR.gray4,
    backgroundImage: bgImage ? `url("${bgImage}")` : 'none',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    svg: {
      path: {
        fill: `transparent`,
        stroke: bgImage ? `${theme.COLOR.light}` : theme.COLOR.gray1,
      },
    },
  },
}));

const StyedIcon = styled(Icon)(({ theme }) => ({
  color: theme.COLOR.gray3,
  '&:hover': {
    color: theme.COLOR.gray1,
  },
}));

export function DropZone(dropZoneProps: DropZoneProps) {
  const { icon, onFileUpload } = dropZoneProps;

  const [file, setFile] = useState<(File & { preview: string }) | null>();
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': ['.png', '.jpg', '.jpeg'],
    },
    multiple: false,
    onDrop: (acceptedFiles) => {
      const fileWithPreview = acceptedFiles.map((_file) =>
        Object.assign(_file, {
          preview: URL.createObjectURL(_file),
        }),
      )[0];
      setFile(fileWithPreview);
      onFileUpload(fileWithPreview);
    },
  });
  return (
    <StyedBorder>
      <StyedFlex
        bgImage={file ? file.preview : null}
        variant="basic"
        {...getRootProps({ className: 'dropzone' })}
      >
        <input {...getInputProps()} />
        <StyedIcon
          scale={1}
          variant="basic"
          icon={icon || polyIcons.CameraOutline}
          size="24px"
        />
      </StyedFlex>
    </StyedBorder>
  );
}
