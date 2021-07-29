import { SVGProps, memo } from 'react';

const SvgKey2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 14a2 2 0 110-4 2 2 0 010 4zm5.65-4A5.99 5.99 0 007 6a6 6 0 100 12 5.99 5.99 0 005.65-4H17v4h4v-4h2v-4H12.65z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgKey2);
export default Icon;
