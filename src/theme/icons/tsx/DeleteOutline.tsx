import { SVGProps, memo } from 'react';

const SvgDeleteOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgDeleteOutline);
export default Icon;