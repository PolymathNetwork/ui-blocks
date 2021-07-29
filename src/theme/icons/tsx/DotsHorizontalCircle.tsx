import { SVGProps, memo } from 'react';

const SvgDotsHorizontalCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-5.5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm11 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgDotsHorizontalCircle);
export default Icon;
