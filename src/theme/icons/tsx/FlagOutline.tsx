import { SVGProps, memo } from 'react';

const SvgFlagOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 3a1 1 0 011 1v.88C8.06 4.44 9.5 4 11 4c3 0 3 2 5 2 3 0 4-2 4-2v8s-1 2-4 2-3-2-5-2c-3 0-4 2-4 2v7H5V4a1 1 0 011-1zm1 4.25v4.25S9 10 11 10s3 2 5 2 2-1 2-1V7.5S17 8 16 8c-2 0-3-2-5-2S7 7.25 7 7.25z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgFlagOutline);
export default Icon;
