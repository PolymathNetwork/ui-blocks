import { SVGProps, memo } from 'react';

const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21 7L9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgCheck);
export default Icon;