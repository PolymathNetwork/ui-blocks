import { SVGProps, memo } from 'react';

const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 4h2v12l5.5-5.5 1.42 1.42L12 19.84l-7.92-7.92L5.5 10.5 11 16V4z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgArrowDown);
export default Icon;
