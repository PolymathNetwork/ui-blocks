import { SVGProps, memo } from 'react';

const SvgDotsHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 12a2 2 0 114 0 2 2 0 01-4 0zm-6 0a2 2 0 114 0 2 2 0 01-4 0zm-6 0a2 2 0 114 0 2 2 0 01-4 0z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgDotsHorizontal);
export default Icon;
