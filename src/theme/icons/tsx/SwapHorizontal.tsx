import { SVGProps, memo } from 'react';

const SvgSwapHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21 9l-4-4v3h-7v2h7v3l4-4zM7 11l-4 4 4 4v-3h7v-2H7v-3z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgSwapHorizontal);
export default Icon;
