import { SVGProps, memo } from 'react';

const SvgCancel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 2a8 8 0 00-8 8c0 1.85.63 3.55 1.68 4.91L16.91 5.68A8.005 8.005 0 0012 4zm0 16a8 8 0 006.32-12.91L7.09 18.32A8.005 8.005 0 0012 20z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgCancel);
export default Icon;
