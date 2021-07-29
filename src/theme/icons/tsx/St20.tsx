import { SVGProps, memo } from 'react';

const SvgSt20 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 1a2 2 0 00-2 2v2a2 2 0 002 2h2v2H5v2h4a2 2 0 002-2V7a2 2 0 00-2-2H7V3h4V1H7zM13 1v2h2v8h2V3h2V1h-6z"
      fill="#8C9BA5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 13h-2a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2v-6a2 2 0 00-2-2zm-2 8v-6h2v6h-2z"
      fill="#8C9BA5"
    />
    <path
      d="M5 23h6v-2H7.41l3.24-4.87A2 2 0 009 13H5v2h4l-4 6v2z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgSt20);
export default Icon;
