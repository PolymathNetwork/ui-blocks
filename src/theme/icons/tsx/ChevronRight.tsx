import { SVGProps, memo } from 'react';

const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8 16.58L12.58 12 8 7.41 9.41 6l6 6-6 6L8 16.58z" fill="#8C9BA5" />
  </svg>
);

const Icon = memo(SvgChevronRight);
export default Icon;
