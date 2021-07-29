import { SVGProps, memo } from 'react';

const SvgEmailMultipleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 6v14h18v2H2c-1.105 0-2-.89-2-2V6h2zm22-2c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4zm-2 0l-8 5-8-5h16zm0 12H6V6l8 5 8-5v10z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgEmailMultipleOutline);
export default Icon;
