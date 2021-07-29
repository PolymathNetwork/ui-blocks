import { SVGProps, memo } from 'react';

const SvgFileCheckOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 2l6 6v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h8zm4 18V9h-5V4H6v16h12zm-6.8-1.54l-2.75-3 1.16-1.16 1.59 1.58 3.58-3.58 1.17 1.41-4.75 4.75z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgFileCheckOutline);
export default Icon;
