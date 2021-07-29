import { SVGProps, memo } from 'react';

const SvgChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgChevronUp);
export default Icon;