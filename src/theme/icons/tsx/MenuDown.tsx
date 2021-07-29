import { SVGProps, memo } from 'react';

const SvgMenuDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7 10l5 5 5-5H7z" fill="#8C9BA5" />
  </svg>
);

const Icon = memo(SvgMenuDown);
export default Icon;
