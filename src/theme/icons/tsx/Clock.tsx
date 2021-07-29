import { SVGProps, memo } from 'react';

const SvgClock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgClock);
export default Icon;
