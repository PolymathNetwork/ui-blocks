import { SVGProps, memo } from 'react';

const SvgTx = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 7v2h2v8h2V9h2V7H5zM13 7l2 5-2 5h2l1-2.5 1 2.5h2l-2-5 2-5h-2l-1 2.5L15 7h-2z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgTx);
export default Icon;
