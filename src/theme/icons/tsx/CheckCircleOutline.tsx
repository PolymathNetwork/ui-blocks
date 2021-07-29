import { SVGProps, memo } from 'react';

const SvgCheckCircleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 2a8 8 0 100 16 8 8 0 000-16zm-1 12.5L6.5 12l1.41-1.41L11 13.67l5.59-5.58L18 9.5l-7 7z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgCheckCircleOutline);
export default Icon;
