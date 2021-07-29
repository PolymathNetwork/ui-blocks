import { SVGProps, memo } from 'react';

const SvgDotsHorizontalCircleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 2a8 8 0 100 16 8 8 0 000-16zm0 6.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-4.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgDotsHorizontalCircleOutline);
export default Icon;
