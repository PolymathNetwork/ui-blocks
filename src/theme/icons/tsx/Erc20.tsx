import { SVGProps, memo } from 'react';

const SvgErc20 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 1v10h6V9H3V7h4V5H3V3h4V1H1zm18 0a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2V8h-2v1h-2V3h2v1h2V3a2 2 0 00-2-2h-2zM9 11V1h4a2 2 0 012 2v2c0 .84-.5 1.55-1.24 1.85L15 11h-2l-1.2-4H11v4H9zm4-8h-2v2h2V3z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgErc20);
export default Icon;
