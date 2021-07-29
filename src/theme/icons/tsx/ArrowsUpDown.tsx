import { SVGProps, memo } from 'react';

const SvgArrowsUpDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 3L7 8h10l-5-5zM12 21l-5-5h10l-5 5z" fill="#8C9BA5" />
  </svg>
);

const Icon = memo(SvgArrowsUpDown);
export default Icon;
