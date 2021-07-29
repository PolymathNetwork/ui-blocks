import { SVGProps, memo } from 'react';

const SvgRefresh = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.65 6.35A7.958 7.958 0 0012 4a8 8 0 100 16c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18a6 6 0 110-12c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgRefresh);
export default Icon;
