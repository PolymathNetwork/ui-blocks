import { SVGProps, memo } from 'react';

const SvgTxLatest = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.5 7H23l-3.5-3.5L16 7h2.5v13h2V7zM2 8v2h2v8h2v-8h2V8H2zM10 8l2 5-2 5h2l1-2.5 1 2.5h2l-2-5 2-5h-2l-1 2.5L12 8h-2z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgTxLatest);
export default Icon;
