import { SVGProps, memo } from 'react';

const SvgCheckboxMinusBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 13H7v-2h10v2zm2-10H5c-1.11 0-2 .89-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"
      fill="#1348E4"
    />
  </svg>
);

const Icon = memo(SvgCheckboxMinusBox);
export default Icon;
