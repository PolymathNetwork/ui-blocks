import { SVGProps, memo } from 'react';

const SvgAccountArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 21v-2h-4v-2h4v-2l3 3-3 3zM10 4a4 4 0 110 8 4 4 0 010-8zm0 10c1.15 0 2.25.12 3.24.34A5.964 5.964 0 0012 18c0 .7.12 1.37.34 2H2v-2c0-2.21 3.58-4 8-4z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgAccountArrowRight);
export default Icon;
