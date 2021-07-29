import { SVGProps, memo } from 'react';

const SvgAccountKey = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 10v2h-1v2H8v-2H5.83A2.99 2.99 0 013 14a3 3 0 010-6c1.31 0 2.42.83 2.83 2H11zm-8 0a1 1 0 100 2 1 1 0 000-2zm13 4c2.67 0 8 1.34 8 4v2H8v-2c0-2.66 5.33-4 8-4zm0-2a4 4 0 110-8 4 4 0 010 8z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgAccountKey);
export default Icon;
