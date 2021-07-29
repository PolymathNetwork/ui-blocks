import { SVGProps, memo } from 'react';

const SvgBonds = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11z"
      fill="#8C9BA5"
    />
    <path
      d="M9.5 15.5h1c0 .54.685 1 1.5 1s1.5-.46 1.5-1c0-.55-.52-.75-1.62-1.015-1.06-.265-2.38-.595-2.38-1.985 0-.895.735-1.655 1.75-1.91V9.5h1.5v1.09c1.015.255 1.75 1.015 1.75 1.91h-1c0-.54-.685-1-1.5-1s-1.5.46-1.5 1c0 .55.52.75 1.62 1.015 1.06.265 2.38.595 2.38 1.985 0 .895-.735 1.655-1.75 1.91v1.09h-1.5v-1.09c-1.015-.255-1.75-1.015-1.75-1.91z"
      fill="#8C9BA5"
    />
  </svg>
);

const Icon = memo(SvgBonds);
export default Icon;
