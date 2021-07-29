import { SVGProps, memo } from 'react';

const SvgCheckOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.78 2.2L24 6.42 8.44 22 0 13.55l4.22-4.22 4.22 4.22L19.78 2.2zm0 2.8L8.44 16.36l-4.22-4.17-1.41 1.36 5.63 5.62L21.19 6.42 19.78 5z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgCheckOutline);
export default Icon;