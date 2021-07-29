import { SVGProps, memo } from 'react';

const SvgAccountHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 14c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4zm0-2a4 4 0 100-8 4 4 0 000 8zM5 15l-.6-.5C2.4 12.6 1 11.4 1 9.9c0-1.2 1-2.2 2.2-2.2.7 0 1.4.3 1.8.8.4-.5 1.1-.8 1.8-.8C8 7.7 9 8.6 9 9.9c0 1.5-1.4 2.7-3.4 4.6L5 15z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgAccountHeart);
export default Icon;
