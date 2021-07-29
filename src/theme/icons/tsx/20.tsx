import { SVGProps, memo } from 'react';

const Svg20 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 7h2a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2V9a2 2 0 012-2zm0 2v6h2V9h-2zm-8 8H3v-2l4-6H3V7h4a2 2 0 011.65 3.13L5.41 15H9v2zm3 0a1 1 0 110-2 1 1 0 010 2z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(Svg20);
export default Icon;
