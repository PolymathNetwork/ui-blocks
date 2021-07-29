import { SVGProps, memo } from 'react';

const SvgAccountCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 19.2c-2.5 0-4.71-1.28-6-3.2.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 01-6 3.2zM12 5a3 3 0 110 6 3 3 0 010-6zm0-3a10 10 0 1010 10c0-5.53-4.5-10-10-10z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgAccountCircle);
export default Icon;
