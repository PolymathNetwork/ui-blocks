import { SVGProps, memo } from 'react';

const SvgDotsVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 16a2 2 0 110 4 2 2 0 010-4zm0-6a2 2 0 110 4 2 2 0 010-4zm0-6a2 2 0 110 4 2 2 0 010-4z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgDotsVertical);
export default Icon;
