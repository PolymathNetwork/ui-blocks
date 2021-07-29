import { SVGProps, memo } from 'react';

const SvgDotsOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 13a1 1 0 100-2 1 1 0 000 2zm0 2a3 3 0 100-6 3 3 0 000 6zm8-2a1 1 0 100-2 1 1 0 000 2zm0 2a3 3 0 100-6 3 3 0 000 6zm9-3a1 1 0 11-2 0 1 1 0 012 0zm2 0a3 3 0 11-6 0 3 3 0 016 0z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgDotsOutline);
export default Icon;
