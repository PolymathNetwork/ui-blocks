import { SVGProps, memo } from 'react';

const Svg31 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 17a1 1 0 110-2 1 1 0 010 2zm6-10v8h1v2h-4v-2h1V9h-1l1-2h2zM4 7h4a2 2 0 012 2v6a2 2 0 01-2 2H4v-2h4v-2H5v-2h3V9H4V7z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(Svg31);
export default Icon;
