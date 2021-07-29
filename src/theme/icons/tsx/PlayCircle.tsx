import { SVGProps, memo } from 'react';

const SvgPlayCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 16.5v-9l6 4.5-6 4.5zM12 2a10 10 0 100 20 10 10 0 000-20z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgPlayCircle);
export default Icon;
