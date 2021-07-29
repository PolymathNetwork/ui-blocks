import { SVGProps, memo } from 'react';

const SvgSt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 7a2 2 0 00-2 2v2a2 2 0 002 2h2v2H5v2h4a2 2 0 002-2v-2a2 2 0 00-2-2H7V9h4V7H7zM13 7v2h2v8h2V9h2V7h-6z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgSt);
export default Icon;
