import { SVGProps, memo } from 'react';

const Svg30 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.293 16.707a1 1 0 101.414-1.414 1 1 0 00-1.414 1.414zM7 7H3v2h4v2H4v2h3v2H3v2h4a2 2 0 002-2V9a2 2 0 00-2-2zm12 0h-2a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2V9a2 2 0 00-2-2zm-2 8V9h2v6h-2z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(Svg30);
export default Icon;
